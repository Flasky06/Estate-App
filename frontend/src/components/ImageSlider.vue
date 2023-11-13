<template>
	<div class="image-slideshow">
		<div class="slideshow-container">
			<img
				v-for="(image, index) in images"
				:key="index"
				:src="image"
				:alt="`Image ${index + 1}`"
				:class="{
					'opacity-100': index === currentIndex,
					'opacity-0': index !== currentIndex,
				}"
				class="w-full h-80 object-cover transition-opacity duration-300"
			/>
			<button @click="prevSlide" class="prev-button">&lt;</button>
			<button @click="nextSlide" class="next-button">&gt;</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const images = ref([
	"https://cdn.pixabay.com/photo/2016/11/29/04/57/architecture-1867426_640.jpg",
	"https://cdn.pixabay.com/photo/2016/11/29/04/57/architecture-1867426_640.jpg",
	"https://cdn.pixabay.com/photo/2016/11/29/04/57/architecture-1867426_640.jpg",
]);

const currentIndex = ref(0);

const nextSlide = () => {
	currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevSlide = () => {
	currentIndex.value =
		(currentIndex.value - 1 + images.value.length) % images.value.length;
};
</script>

<style scoped>
/* Tailwind CSS classes for styling */
.image-slideshow {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

.slideshow-container {
	position: relative;
	width: 100%;
	max-width: 800px; /* Set your preferred max width */
	overflow: hidden;
}

.prev-button,
.next-button {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: rgba(0, 0, 0, 0.5);
	color: #fff;
	font-size: 24px;
	border: none;
	cursor: pointer;
	padding: 10px 20px;
}

.prev-button {
	left: 0;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
}

.next-button {
	right: 0;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
}
</style>
