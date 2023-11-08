<template>
	<section class="">
		<h1 class="text-center font-bold text-3xl my-8">Explore Our Listings</h1>

		<div
			v-for="listing in listings"
			:key="listing.title"
			class="p-4 rounded-lg shadow-md my-2 mx-2 px-1 relative flex flex-col items-center justify-center space-y-3"
		>
			<h3
				class="font-semibold text-lg underline underline-offset-4 decoration-inherit decoration-solid decoration-1"
			>
				Discover {{ listing.type }}
			</h3>
			<p class="text-center">{{ listing.description }}</p>
			<button
				class="bg-blue-600 rounded text-white px-2 py-1 flex items-center cursor-pointer"
			>
				<span class="flex items-center text-lg">Explore</span>
				<span class="material-symbols-outlined text-base">
					arrow_right_alt
				</span>
			</button>
		</div>
	</section>
</template>

<script setup>
import { ref } from "vue";

const listings = ref([
	{
		type: "For Rent",
		description:
			"Explore a wide range of rental and lease properties, available in all sizes and locations, perfectly tailored to your budget. Discover your ideal home today!",
	},
	{
		type: "For Sale",
		description:
			"We offer a variety of properties for sale, available in all sizes and locations, all within your budget. Find your dream home today!",
	},
	{
		type: "Office Spaces",
		description:
			"Discover contemporary office spaces available in various locations.",
	},
]);
</script>

<style scoped>
/* Add your custom styles here */
</style>
