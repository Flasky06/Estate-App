<template>
	<div class="task">
		<h3>{{ task.title }}</h3>
		<p>description is {{ task.description }}</p>
		<p>The price is {{ task.price }}</p>

		<div class="icons">
			<i class="material-icons" @click="taskStore.deleteTask(task.id)">delete</i
			>ls
		</div>
		<div class="icons">
			<i class="material-icons" @click="taskStore.toggleFav(task.id)"
				>favorite</i
			>
		</div>
	</div>
</template>
<script setup>
import { useTaskStore } from "../stores/TaskStore";

const props = defineProps(["task"]);
const taskStore = useTaskStore();
</script>

<style scoped></style>
