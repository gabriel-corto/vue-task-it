import { describe, expect, it } from "vitest"

import { TaskType } from "@/types/tasks"
import { useStorageTasks } from "@/composables/useStorageTasks"

describe("useStorageTasks", () => {
	it("should store the tasks and retrieve them in localStorage", () => {
		const { getTasks, saveTasks } = useStorageTasks()

		const tasks: TaskType[] = [
			{ id: "1", title: "Task 1", isCompleted: false },
			{ id: "2", title: "Task 2", isCompleted: true },
		]

		saveTasks(tasks)
		const storedTasks = getTasks()

		expect(storedTasks).toEqual(tasks)
	})
})
