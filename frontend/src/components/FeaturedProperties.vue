<template>
	<div class="w-full px-2 bg-green-400 mt-40 mx-auto">
		<div class="bg-orange-400 flex items-center justify-center">
			<div class="flex gap-2 overflow-x-auto">
				<div class="w-[600px]" v-for="image in images">
					<div class="relative w-40 h-auto flex justify-center">
						<img class="w-full h-auto" :src="image.src" :alt="image.alt" />
						<span class="absolute bottom-0 text-white font-semibold">{{
							image.alt
						}}</span>
					</div>
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
		alt: "image 2",
		title: "Condo",
	},
	{
		src: "https://splendorholdings.co.ke/wp-content/uploads/2023/05/Splendor-Holdings-Leshwa-Web-Version18-1024x683.jpg",
		alt: "image 3",
		title: "Office spaces",
	},
	{
		src: "https://splendorholdings.co.ke/wp-content/uploads/2023/05/Splendor-Holdings-Leshwa-Web-Version18-1024x683.jpg",
		alt: "image 4",
		title: "Bangalo",
	},
	{
		src: "https://splendorholdings.co.ke/wp-content/uploads/2023/05/Splendor-Holdings-Leshwa-Web-Version18-1024x683.jpg",
		alt: "image 5",
		title: "Villa",
	},
	{
		src: "https://splendorholdings.co.ke/wp-content/uploads/2023/05/Splendor-Holdings-Leshwa-Web-Version18-1024x683.jpg",
		alt: "image 6",
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
