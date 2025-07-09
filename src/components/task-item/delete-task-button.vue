<script setup lang="ts">
import { useTasksStore } from "@/store/tasks"
import { TaskType } from "@/types/tasks"
import { Trash2 } from "lucide-vue-next"

const props = defineProps<{ task: TaskType }>()

const tasksStore = useTasksStore()

function handleDeleteTask(taskId: string) {
	tasksStore.deleteTask(taskId)
}
</script>

<template>
	<button
		class="text-rose-500 cursor-pointer"
		@click="() => handleDeleteTask(props.task.id)"
	>
		<Trash2 class="w-5 h-5" />
	</button>
</template>
