<template>
	<section class="">
		<h1 class="text-center font-bold text-3xl my-8">Explore Our Listings</h1>

		<div
			class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8 lg:px-8"
		>
			<div
				v-for="data in listings"
				:key="data.title"
				class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
			>
				<img
					:src="data.image"
					alt="Listing Image"
					class="w-full h-40 object-cover rounded-lg mb-2"
				/>
				<button
					class="text-lg font-semibold mx-auto py-2 px-4 underline underline-offset-4"
				>
					Discover {{ data.type }}
				</button>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from "vue";

const listings = ref([
	{
		image:
			"https://splendorholdings.co.ke/wp-content/uploads/2023/05/Alba-Gardens-Studio-1--1024x684.png",
		title: "Alba Gardens Studio",
		type: "studio",
	},
	{
		image:
			"https://splendorholdings.co.ke/wp-content/uploads/2023/05/Splendor-Holdings-Leshwa-Web-Version18-1024x683.jpg",
		title: "Splendor Holdings Leshwa",
		type: "1 Bedroom",
	},
	{
		image:
			"https://splendorholdings.co.ke/wp-content/uploads/2023/05/Alba-Gardens-2bd-2-1024x684.png",
		title: "Alba Gardens 2bd",
		type: "2 Bedroom",
	},
	{
		image:
			"https://splendorholdings.co.ke/wp-content/uploads/2023/05/Royal-Oaks-48-1024x683.png",
		title: "Royal Oaks 48",
		type: "3 Bedroom",
	},
	{
		image:
			"https://splendorholdings.co.ke/wp-content/uploads/2023/05/Alba-Gardens-Studio-1--1024x684.png",
		title: "Alba Gardens Studio",
		type: "4 Bedroom",
	},
	{
		image:
			"https://splendorholdings.co.ke/wp-content/uploads/2023/05/Splendor-Holdings-Leshwa-Web-Version18-1024x683.jpg",
		title: "Splendor Holdings Leshwa",
		type: "5 Bedroom",
	},
]);
</script>

<style scoped>
/* Add your custom styles here */
</style>
