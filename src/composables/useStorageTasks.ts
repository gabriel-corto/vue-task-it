import { TaskType } from "@/types/tasks"

export function useStorageTasks() {
	const tasksKey = "tasks-it-vue"

	function getTasks() {
		const tasks = localStorage.getItem(tasksKey)
		return tasks ? JSON.parse(tasks) : []
	}

	function saveTasks(tasks: TaskType[]) {
		localStorage.setItem(tasksKey, JSON.stringify(tasks))
	}

	return {
		getTasks,
		saveTasks,
	}
}
