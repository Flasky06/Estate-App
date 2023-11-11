<template>
	<section class="lg:w-11/12 lg:mx-auto">
		<h1 class="text-center font-bold text-3xl my-8 lg:my-16">
			Discover What You Are Looking For
		</h1>
		<div class="flex flex-col md:grid md:grid-cols-3 md:gap-2 md:mx-1 lg:gap-">
			<div
				v-for="listing in listings"
				:key="listing.title"
				class="p-4 rounded-lg shadow-2xl my-2 mx-2 px-1 relative flex flex-col items-center justify-center space-y-3 md:px-8 md:py-4 md:my-4 z-20 lg:shadow-3xl"
			>
				<h3
					class="font-semibold text-lg underline underline-offset-4 decoration-inherit decoration-solid decoration-1"
				>
					Discover {{ listing.type }}
				</h3>
				<p class="text-center lg:text-lg">{{ listing.description }}</p>
				<button
					class="bg-blue-600 rounded text-white px-2 py-1 flex items-center cursor-pointer lg:px-4 lg:font-semibold lg:hover:bg-blue-900 hover:scale-110"
				>
					<span class="flex items-center text-lg">Explore</span>
					<span class="material-symbols-outlined text-base lg:text-lg">
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
