<template>
	<section class="lg:mt-16">
		<div
			class="grid grid-cols-2 gap-1 px-1 md:gap-2 lg:grid-cols-4 lg:gap-4 lg:max-w-7xl mx-auto lg:mx-auto"
		>
			<div v-for="property in properties" :key="property.id">
				<div class="w-full h-40 lg:h-56 my-3 rounded relative">
					<img
						src="https://i.pinimg.com/236x/cb/63/dc/cb63dc6bb5b3e35f2dab28d67dc7d7ae.jpg"
						:alt="property.title"
						class="w-full h-full rounded object-fill"
					/>
					<span
						class="absolute top-1 right-1 rounded bg-opacity-60 bg-black transition-opacity opacity-80 text-white text-lg px-4 py-1"
						>{{ property.description }}</span
					>
					<div class="flex flex-col px-2">
						<h3 class="font-light text-lg">{{ property.title }}</h3>

						<div class="flex space-x-2 items-center">
							<span class="material-symbols-outlined text-3xl"> bed </span>
							<span class="text-lg items-center">{{ property.rooms }}</span>
						</div>
					</div>
					<div class="flex space-x-2 items-center">
						<span class="text-xl">ksh</span>
						<span class="text-base">{{ property.price }}</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
import { useHouseStore, fetchHouses } from "../stores/HouseStore";
import { onMounted } from "vue";

const houses = useHouseStore();

onMounted(() => {
	console.log("Component mounted");
	houses.fetchData();

	fetchHouses();
	console.log("Initial state:", houses.houses);
});

console.log("Initial state:", houses.houses);
console.log("Component show");
</script>
<style></style>
