<script setup lang="ts">
import { useTasksStore } from "@/store/tasks"
import { TaskType } from "@/types/tasks"
import { Trash2 } from "lucide-vue-next"

defineProps<{ task: TaskType }>()

const tasksStore = useTasksStore()

function handleDeleteTask(taskId: string) {
	tasksStore.deleteTask(taskId)
}
</script>

<template>
	<span
		role="button"
		tabindex="0"
		class="text-rose-500 cursor-pointer"
		@click="() => handleDeleteTask(task.id)"
		@keyup.enter="() => handleDeleteTask(task.id)"
		aria-label="Excluir tarefa"
	>
		<Trash2 class="w-5 h-5" />
	</span>
</template>
