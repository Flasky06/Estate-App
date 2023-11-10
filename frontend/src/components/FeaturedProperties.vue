<template>
	<section>
		<h1 class="text-center font-bold text-3xl my-8">
			Discover Our Featured Properties
		</h1>
		<div class="flex flex-col">
			<div class="flex flex-col w-full px-4" v-for="property in Properties">
				<div class="w-full h-60 relative">
					<img
						:src="property.src"
						:alt="property.title"
						class="w-full h-full"
					/>
					<span
						class="absolute top-1 right-1 bg-opacity-60 bg-black transition-opacity opacity-80 text-white text-lg px-4 py-1"
						>{{ property.category }}</span
					>
				</div>

				<div class="flex flex-col px-2">
					<h3 class="font-light text-xl">{{ property.title }}</h3>

					<div class="flex space-x-2 items-center">
						<span class="material-symbols-outlined text-4xl"> bed </span>
						<span class="text-xl items-center">{{ property.size }}</span>
					</div>
				</div>
				<div class="flex space-x-2 items-center">
					<span class="text-xl">ksh</span>
					<span class="text-lg">{{ property.price }}</span>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
import { ref } from "vue";

const Properties = ref([
	{
		src: "https://i.pinimg.com/236x/cb/63/dc/cb63dc6bb5b3e35f2dab28d67dc7d7ae.jpg",
		alt: "image 1",
		title: "Gibcon Apartment",
		category: "For sale",
		size: "2 Bedroom ",
		bathroom: "2",
		price: "2000000",
	},
	{
		src: "https://i.pinimg.com/236x/cb/63/dc/cb63dc6bb5b3e35f2dab28d67dc7d7ae.jpg",
		alt: "image 2",
		title: "Sigma Apartment",
		category: "For sale",
		size: "3 Bedroom",
		bathroom: "2",
		price: "2000000",
	},
	{
		src: "https://cdn.pixabay.com/photo/2016/10/16/10/29/office-space-1744801_640.jpg",
		alt: "image 3",
		title: "Alphine House",
		category: "For sale",
		size: "Studio",
		bathroom: "1",
		price: "20000",
	},
	{
		src: "https://cdn.pixabay.com/photo/2016/11/29/04/57/architecture-1867426_640.jpg",
		alt: "image 4",
		title: "Green Park",
		category: "For rent",
		size: "1 Bedroom",
		bathroom: "2",
		price: "42000",
	},
	{
		src: "https://cdn.pixabay.com/photo/2017/03/30/00/24/villa-2186906_640.jpg",
		alt: "image 5",
		title: "Rodridge Apartment",
		category: "For rent",
		size: "2 Bedroom",
		bathroom: "1",
		price: "55000",
	},
	{
		src: "https://cdn.pixabay.com/photo/2019/03/08/20/14/kitchen-living-room-4043091_640.jpg",
		alt: "image 6",
		title: "Kelani Estate",
		category: "For sale",
		size: "3 Bedroom ",
		bathroom: "3",
		price: "4500000",
	},
	// Add more image objects here
]);
</script>
<style></style>
