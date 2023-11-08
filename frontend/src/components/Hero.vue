<template>
	<section
		class="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center h-screen"
	>
		<div
			class="relative overflow-hidden w-full z-0 h-screen bg-contain"
			style="
				background-image: url(https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg);
				background-size: cover;
				background-position: center;
			"
		></div>
		<div class="absolute bottom-1 w-11/12 lg:z-0 bg-green-300">
			<Search />
		</div>
	</section>
</template>
<script setup>
import Search from "./layout/Search.vue";
</script>
<style></style>
