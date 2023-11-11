<template>
	<div class="mt-" v-for="detail in details">
		<img :src="detail.src" alt="" />
		<div>
			<span>{{ detail.title }}</span> <span>{{ detail.category }}</span>
			<span>{{ detail.size }}</span>
			<span>{{ detail.bathroom }}</span>
			<span>{{ detail.price }}</span>
			<span>{{ detail.amenities }}</span> <span>{{ detail.location }}</span>
		</div>
	</div>
</template>
<script setup>
import { ref } from "vue";

const details = ref([
	{
		src: "https://i.pinimg.com/236x/cb/63/dc/cb63dc6bb5b3e35f2dab28d67dc7d7ae.jpg",
		img: [
			"https://cdn.pixabay.com/photo/2016/11/29/04/57/architecture-1867426_640.jpg",
			"https://i.pinimg.com/236x/cb/63/dc/cb63dc6bb5b3e35f2dab28d67dc7d7ae.jpg",
			"https://cdn.pixabay.com/photo/2019/03/08/20/14/kitchen-living-room-4043091_640.jpg",
		],
		alt: "image 1",
		title: "Gibcon Apartment",
		category: "For sale",
		size: "2 Bedroom ",
		location: "Naka",
		bathroom: "2",

		price: "2000000",
		amenities:
			"2 bathrooms, ample parking ,high speed internet ,elevator, power backup",
	},
]);
</script>
