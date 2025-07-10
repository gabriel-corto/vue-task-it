import { defineStore } from "pinia"
import type { TaskType } from "@/types/tasks"

import { useStorageTasks } from "@/composables/useStorageTasks"

const storage = useStorageTasks()

export const useTasksStore = defineStore("tasks", {
	state: () => {
		return {
			tasks: storage.getTasks() as TaskType[],
		}
	},
	actions: {
		addNewTask(title: string) {
			const newTask: TaskType = {
				id: crypto.randomUUID(),
				title,
				isCompleted: false,
			}

			this.tasks = [...this.tasks, newTask]
			storage.saveTasks(this.tasks)
		},
		completeTask(taskId: string) {
			const task = this.tasks.find((task) => task.id === taskId)

			if (task) {
				task.isCompleted = !task.isCompleted
			}
			storage.saveTasks(this.tasks)
		},
		deleteTask(taskId: string) {
			const tasksNotDeleted = this.tasks.filter((task) => task.id !== taskId)
			this.tasks = tasksNotDeleted
			storage.saveTasks(this.tasks)
		},
	},
	getters: {
		tasksCount: (state) => state.tasks.length,
		completedTasks: (state) => {
			const completeds = state.tasks.filter((task) => task.isCompleted)
			return completeds.length
		},
	},
})
