import { describe, it, expect } from "vitest"
import { useTaskStatus } from "@/composables/useTaskStatus"

describe("useTaskStatus", () => {
	it("return the correct class to completed task", () => {
		const { getTaskStatus } = useTaskStatus()
		expect(getTaskStatus(true)).toBe("text-emerald-500")
	})

	it("return the correct class to uncompleted task", () => {
		const { getTaskStatus } = useTaskStatus()
		expect(getTaskStatus(false)).toBe("text-neutral-600")
	})
})
