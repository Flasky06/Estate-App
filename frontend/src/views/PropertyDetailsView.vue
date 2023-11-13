<template>
	<div class="mt-" v-for="detail in details">
		<div class="flex flex-col">
			<div class="flex flex-col">
				<span>{{ detail.title }}</span>
				<span> {{ detail.location }}</span>
				<span>ksh {{ detail.price }}</span>
			</div>

			<span>{{ detail.bathroom }}</span>
			<div>
				<span>{{ detail.houseFeatures.size }} </span>
			</div>
			<div>
				<span>bath</span> <span> {{ detail.houseFeatures.bathrooms }}</span>
				<span>{{ detail.category }}</span>
			</div>
		</div>
		<ImageSlider />
	</div>
</template>
<script setup>
import ImageSlider from "../components/ImageSlider.vue";
import { ref } from "vue";

const details = ref([
	{
		src: "https://i.pinimg.com/236x/cb/63/dc/cb63dc6bb5b3e35f2dab28d67dc7d7ae.jpg",
		img: [
			"https://cdn.pixabay.com/photo/2016/11/29/04/57/architecture-1867426_640.jpg",
			"https://i.pinimg.com/236x/cb/63/dc/cb63dc6bb5b3e35f2dab28d67dc7d7ae.jpg",
			"https://cdn.pixabay.com/photo/2019/03/08/20/14/kitchen-living-room-4043091_640.jpg",
			"https://i.pinimg.com/236x/cb/63/dc/cb63dc6bb5b3e35f2dab28d67dc7d7ae.jpg",
		],
		alt: "image 1",
		title: "Gibcon Apartment",
		category: "For sale",
		location: "FreeArea ,Nakuru",
		bathroom: "2",
		houseFeatures: { size: "2 bedroom", bathrooms: 2 },
		price: "2000000",
		amenities: [
			" ample parking",
			"high speed internet",
			"elevator",
			"power backup",
		],
	},
]);
</script>
