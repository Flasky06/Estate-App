t
<template>
	<div class="mt-48">
		<h1>Name is {{ store.user.name }}</h1>
		<h2>Email is {{ store.user.email }}</h2>
		<h2>Website is {{ store.website }}</h2>

		<input
			class="border px-4 py-2"
			type="text"
			placeholder="New Name"
			v-model="nameInput"
		/><button
			class="border bg-blue-600 text-white px-4 py-2 rounded"
			@click="handleSubmit"
		>
			Change Name
		</button>
	</div>
</template>

<script setup>
import { useUserStore } from "../stores/UserStore";
import { ref } from "vue";

const store = useUserStore();
const nameInput = ref("");

const handleSubmit = () => {
	store.changeName(nameInput.value);
	console.log(nameInput.value);
	nameInput.value = "";
};
</script>
<style></style>
