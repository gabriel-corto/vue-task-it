<script setup>
import { ClipboardList } from "lucide-vue-next"
</script>

<template>
	<div
		class="space-y-4 mt-10 flex items-center justify-center flex-col text-neutral-400"
	>
		<ClipboardList class="w-16 h-16" />

		<div class="text-center">
			<h1>Lista está vazia</h1>
			<p>Crie e organize as suas tarefas</p>
		</div>
	</div>
</template>
