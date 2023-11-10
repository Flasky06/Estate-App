<template>
	<div class="w-full px-2 my-28 mx-auto">
		<h1 class="text-center font-bold text-3xl my-8">Explore Our Properties</h1>

		<div class="flex items-center justify-center">
			<div class="flex gap-2 overflow-x-auto">
				<div class="" v-for="image in images">
					<div
						class="relative rounded w-40 h-32 flex justify-center md:w-80 md:h-64"
					>
						<img
							class="rounded w-full h-full"
							:src="image.src"
							:alt="image.alt"
						/>
						<span
							class="absolute bottom-0 flex justify-center items-center text-white font-semibold bg-opacity-60 bg-black transition-opacity opacity-80 w-full h-1/5 md:text-xl"
							>{{ image.title }}</span
						>
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
		src: "https://cdn.pixabay.com/photo/2017/08/10/19/40/buildings-2626957_640.jpg",
		alt: "image 2",
		title: "Condo",
	},
	{
		src: "https://cdn.pixabay.com/photo/2016/10/16/10/29/office-space-1744801_640.jpg",
		alt: "image 3",
		title: "Office spaces",
	},
	{
		src: "https://cdn.pixabay.com/photo/2016/11/29/04/57/architecture-1867426_640.jpg",
		alt: "image 4",
		title: "Bungalow",
	},
	{
		src: "https://cdn.pixabay.com/photo/2017/03/30/00/24/villa-2186906_640.jpg",
		alt: "image 5",
		title: "Villa",
	},
	{
		src: "https://cdn.pixabay.com/photo/2019/03/08/20/14/kitchen-living-room-4043091_640.jpg",
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
