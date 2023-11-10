<template>
	<section>
		<h1 class="text-center font-bold text-3xl my-8">
			Discover Our Featured Properties
		</h1>
		<div class="flex flex-col">
			<div class="flex flex-col w-full" v-for="property in Properties">
				<div class="w-full h-60 px-4">
					<img
						:src="property.src"
						:alt="property.title"
						class="w-full h-full"
					/>
				</div>

				<div class="flex flex-col">
					<h3 class="font-semibold text-xl">{{ property.title }}</h3>
					<span>{{ property.category }}</span>

					<div class="flex space-x-2 items-center">
						<span class="material-symbols-outlined text-4xl"> bed </span>
						<span class="text-xl">{{ property.size }}</span>
					</div>
					<div class="flex space-x-2 items-center">
						<span>ksh</span>
						<span class="text-lg">{{ property.price }}</span>
					</div>
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
		category: "for sale",
		size: "2 Bedroom ",
		price: "2000000",
	},
	{
		src: "https://i.pinimg.com/236x/cb/63/dc/cb63dc6bb5b3e35f2dab28d67dc7d7ae.jpg",
		alt: "image 2",
		title: "Sigma Apartment",
		category: "for sale",
		size: "3 Bedroom",
		price: "2000000",
	},
	{
		src: "https://cdn.pixabay.com/photo/2016/10/16/10/29/office-space-1744801_640.jpg",
		alt: "image 3",
		title: "Alphine House",
		category: "for sale",
		size: "Studio",
		price: "20000",
	},
	{
		src: "https://cdn.pixabay.com/photo/2016/11/29/04/57/architecture-1867426_640.jpg",
		alt: "image 4",
		title: "Green Park",
		category: "for rent",
		size: "1 Bedroom",
		price: "42000",
	},
	{
		src: "https://cdn.pixabay.com/photo/2017/03/30/00/24/villa-2186906_640.jpg",
		alt: "image 5",
		title: "Rodridge",
		category: "for rent",
		size: "2 Bedroom",
		price: "55000",
	},
	{
		src: "https://cdn.pixabay.com/photo/2019/03/08/20/14/kitchen-living-room-4043091_640.jpg",
		alt: "image 6",
		title: "Kelani Estate",
		category: "for sale",
		size: "3 Bedroom ",
		price: "4500000",
	},
	// Add more image objects here
]);
</script>
<style></style>
