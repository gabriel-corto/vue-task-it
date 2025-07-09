<script setup lang="ts">
const props = defineProps<{ task: TaskType }>()

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
		:class="getTaskStatus(props.task.isCompleted)"
		@click="() => handleCompleteTask(props.task.id)"
	>
		<CheckCircle class="w-5 h-5" v-if="props.task.isCompleted" />
		<Circle class="w-5 h-5" v-else />
	</span>
</template>
