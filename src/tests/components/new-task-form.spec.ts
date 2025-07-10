import { mount } from "@vue/test-utils"
import { describe, test, expect } from "vitest"
import { createPinia, setActivePinia } from "pinia"
import NewTaskForm from "@/components/new-task-form.vue"

setActivePinia(createPinia())

describe("NewTaskForm", () => {
	test("if new task button is disabled when input is empty", () => {
		const wrapper = mount(NewTaskForm)

		const input = wrapper.find("input[type='text']")
		const button = wrapper.find("button[type='submit']")

		expect(input.exists()).toBe(true)
		expect(button.attributes("disabled")).toBeDefined()
	})

	test("if new task button is enabled when input is not empty", () => {
		const wrapper = mount(NewTaskForm)

		const input = wrapper.find("input[type='text']")
		const button = wrapper.find("button[type='submit']")

		expect(input.setValue("New Task"))
		expect(button.attributes("disabled")).toBeFalsy()
	})
})
