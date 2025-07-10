<script setup lang="ts">
import { computed, ref } from "vue"

import { useTasksStore } from "@/store/tasks"
import { PlusCircle } from "lucide-vue-next"

const taskInput = ref<string>("")
const isTaskInputValid = computed(() => taskInput.value.length === 0)

const { addNewTask } = useTasksStore()

function handleAddNewTask(e: Event) {
	e.preventDefault()
	addNewTask(taskInput.value)

	taskInput.value = ""
}
</script>

<template>
	<form
		class="flex mt-5 gap-2 items-center justify-center"
		@submit="handleAddNewTask"
	>
		<input
			type="text"
			autofocus
			v-model="taskInput"
			placeholder="Type your task here..."
			class="p-1 h-12 rounded-lg bg-gray-100 flex-1 pl-4 placeholder:text-neutral-400 focus:outline-0 transition-all duration-150 border-2 border-transparent focus:border-blue-500"
		/>

		<button
			type="submit"
			:disabled="isTaskInputValid"
			class="p-1 h-12 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed flex gap-1 items-center bg-blue-500 text-white font-semibold not-disabled:hover:bg-blue-600 duration-150 transition-all cursor-pointer px-4"
		>
			<PlusCircle class="w-5 h-5" />
			<span>Adcionar</span>
		</button>
	</form>
</template>
