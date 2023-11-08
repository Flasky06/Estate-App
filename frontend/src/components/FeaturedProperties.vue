<template>
	<div class="w-11/12 bg-green-400 m-auto">
		<div class="bg-orange-400 flex items-center justify-center">
			<div class="flex gap-8 overflow-x-auto">
				<div class="w-[600px]" v-for="image in images">
					<img :src="image.src" :alt="image.alt" />
					<span>{{ image.src }}</span>
					<p>{{ image.alt }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const images = ref([
	{
		src: "https://splendorholdings.co.ke/wp-content/uploads/2023/05/Splendor-Holdings-Leshwa-Web-Version18-1024x683.jpg",
		alt: "image 1",
		title: "Apartment",
	},
	{
		src: "https://splendorholdings.co.ke/wp-content/uploads/2023/05/Splendor-Holdings-Leshwa-Web-Version18-1024x683.jpg",
		alt: "image 1",
		title: "Condo",
	},
	{
		src: "https://splendorholdings.co.ke/wp-content/uploads/2023/05/Splendor-Holdings-Leshwa-Web-Version18-1024x683.jpg",
		alt: "image 1",
		title: "Office spaces",
	},
	{
		src: "https://splendorholdings.co.ke/wp-content/uploads/2023/05/Splendor-Holdings-Leshwa-Web-Version18-1024x683.jpg",
		alt: "image 1",
		title: "Bangalow",
	},
	{
		src: "https://splendorholdings.co.ke/wp-content/uploads/2023/05/Splendor-Holdings-Leshwa-Web-Version18-1024x683.jpg",
		alt: "image 1",
		title: "Villa",
	},
	{
		src: "https://splendorholdings.co.ke/wp-content/uploads/2023/05/Splendor-Holdings-Leshwa-Web-Version18-1024x683.jpg",
		alt: "image 1",
		title: "Studio",
	},
	// Add more image objects here
]);

let currentIndex = ref(0);

const imageWidth = 1000; // Width of each image in pixels

const showImages = 4; // Number of images to display at a time

const imageCarousel = document.querySelector(".image-carousel");

const scrollLeft = () => {
	if (currentIndex.value > 0) {
		currentIndex.value--;
		const scrollAmount = currentIndex.value * imageWidth;
		imageCarousel.scroll({
			left: scrollAmount,
			behavior: "smooth",
		});
	}
};

const scrollRight = () => {
	if (currentIndex.value < images.length - showImages) {
		currentIndex.value++;
		const scrollAmount = currentIndex.value * imageWidth;
		imageCarousel.scroll({
			left: scrollAmount,
			behavior: "smooth",
		});
	}
};

onMounted(() => {
	imageCarousel.scrollLeft = 0; // Initialize scroll position
});
</script>

<style>
.image-carousel {
	display: flex;
	overflow: hidden;
	width: 100%;
}

.image-carousel img {
	flex: 0 0 auto;
}
</style>
