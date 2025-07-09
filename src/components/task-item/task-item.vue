<script setup lang="ts">
import type { TaskType } from "@/types/tasks"

import DeleteTaskButton from "./delete-task-button.vue"
import CompleteTaskButton from "./complete-task-button.vue"

const props = defineProps<{ task: TaskType }>()
</script>

<template>
	<div
		class="bg-neutral-50 rounded-md flex items-center justify-between p-3 text-neutral-700 font-medium tracking-wide"
	>
		<CompleteTaskButton :task="task" />

		<p :class="props.task.isCompleted && 'line-through text-neutral-400'">
			{{ props.task.title }}
		</p>

		<DeleteTaskButton :task="task" />
	</div>
</template>
