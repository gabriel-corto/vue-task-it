import CompleteTaskButton from "@/components/task-item/complete-task-button.vue"
import { mount } from "@vue/test-utils"

import { createPinia, setActivePinia } from "pinia"
setActivePinia(createPinia())

describe("CompleteTaskButton", () => {
	test("render the corret icon button when task is completed", () => {
		const wrapper = mount(CompleteTaskButton, {
			props: {
				task: {
					isCompleted: true,
					id: "1",
					title: "Task 01",
				},
			},
		})

		expect(wrapper.find("svg").classes()).toContain("lucide-circle-check-big")
	})

	test("render the corret icon button when task is not completed", () => {
		const wrapper = mount(CompleteTaskButton, {
			props: {
				task: {
					isCompleted: false,
					id: "1",
					title: "Task 01",
				},
			},
		})

		expect(wrapper.find("svg").classes()).toContain("lucide-circle")
	})
})
