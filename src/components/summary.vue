<script setup>
import { useTasksStore } from "@/store/tasks"
const tasksStore = useTasksStore()
</script>

<template>
	<div class="flex items-center justify-between">
		<p class="font-medium text-neutral-600 flex items-center gap-2">
			All Tasks
			<span
				class="flex w-6 h-6 text-sm font-bold bg-neutral-500 items-center justify-center rounded-full text-white"
				>{{ tasksStore.tasksCount }}</span
			>
		</p>
		<p class="font-medium text-neutral-600 flex items-center gap-2">
			Tasks Completeds
			<span
				class="flex w-6 h-6 text-sm font-bold bg-blue-500 items-center justify-center rounded-full text-white"
				>{{ tasksStore.completedTasks }}</span
			>
		</p>
	</div>
</template>
