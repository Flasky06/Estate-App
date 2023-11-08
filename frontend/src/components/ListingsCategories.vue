<template>
	<section
		class="pt-24 bg-opacity-60 bg-black transition-opacity opacity-80"
		style="
			background-image: url(https://cdn.pixabay.com/photo/2016/11/06/23/51/buildings-1804481_640.jpg);
			background-size: cover;
			background-position: center;
		"
	>
		<div class="bg-opacity-60 bg-black transition-opacity opacity-80">
			<h1 class="text-center font-bold text-3xl my-8 text-white">
				Explore Our Listings
			</h1>

			<div
				v-for="listing in listings"
				:key="listing.title"
				class="p-4 rounded-lg shadow-sm shadow-blue-400 my-2 mx-2 relative flex flex-col items-center justify-center space-y-3"
			>
				<h3 class="font-semibold text-xl text-white">
					Discover {{ listing.type }}
				</h3>
				<p class="text-center text-white text-lg">{{ listing.description }}</p>
				<button
					class="bg-blue-600 rounded text-white px-2 py-1 flex items-center cursor-pointer"
				>
					<span class="flex items-center text-lg">Explore</span>
					<span class="material-symbols-outlined text-base">
						arrow_right_alt
					</span>
				</button>
			</div>
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
