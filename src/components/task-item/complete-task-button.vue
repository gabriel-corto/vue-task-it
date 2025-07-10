<script setup lang="ts">
defineProps<{ task: TaskType }>()

import { useTaskStatus } from "@/composables/useTaskStatus"
import { useTasksStore } from "@/store/tasks"
import type { TaskType } from "@/types/tasks"

import { Circle, CheckCircle } from "lucide-vue-next"

const { getTaskStatus } = useTaskStatus()
const tasksStore = useTasksStore()

function handleCompleteTask(taskId: string) {
	tasksStore.completeTask(taskId)
}
</script>

<template>
	<span
		:class="getTaskStatus(task.isCompleted)"
		@click="handleCompleteTask(task.id)"
		@keyup.enter="handleCompleteTask(task.id)"
		role="button"
		tabindex="0"
		aria-label="Marcar tarefa como concluída"
	>
		<CheckCircle class="w-5 h-5" v-if="task.isCompleted" />
		<Circle class="w-5 h-5" v-else />
	</span>
</template>
