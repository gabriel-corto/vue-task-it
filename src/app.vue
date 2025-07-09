<script setup>
import Header from "@/components/header.vue"
import Summary from "@/components/summary.vue"

import TaskItem from "@/components/task-item/task-item.vue"
import EmptyTasks from "@/components/empty-tasks.vue"
import NewTaskForm from "@/components/new-task-form.vue"

import { useTasksStore } from "@/store/tasks"

const tasksStore = useTasksStore()
</script>

<template>
	<main class="max-w-2xl m-auto p-2 mt-1">
		<Header />

		<NewTaskForm />

		<div class="mt-8 space-y-4">
			<Summary />

			<div class="space-y-4">
				<TaskItem
					v-for="task of tasksStore.tasks"
					:task="task"
					:key="task.id"
				/>
			</div>

			<EmptyTasks v-if="tasksStore.tasksCount === 0" />
		</div>
	</main>
</template>
