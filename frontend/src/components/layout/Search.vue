<template>
	<div class="z-40">
		<form
			@submit.prevent="searchHouses"
			class="bg-opacity-60 transition-opacity opacity-80 border py-4 rounded-full flex flex-col justify-center items-center lg:mx-auto lg:grid lg:grid-cols-5 lg:w-9/12 lg:gap-2 lg:px-4 lg:py-2 w-full lg:my-8"
		>
			<!-- Property Type -->
			<div class="flex flex-col px-4">
				<select
					v-model="type"
					class="border rounded-full bg-white px-1 py-2 md:py-3 md:text-lg lg:px-2 lg:py-3 lg:space-y-4"
				>
					<option value="">Looking For</option>
					<option value="type1">Apartment</option>
					<option value="type1">Villa</option>
					<option value="type1">Condo</option>
					<option value="type1">Homes</option>
				</select>
			</div>
			<!-- Location Filter -->
			<div class="flex flex-col px-4">
				<select
					v-model="location"
					class="border rounded-full bg-white px-1 py-2 md:py-3 md:text-lg lg:px-2 lg:py-3"
				>
					<option value="">Any Location</option>
					<option value="location2">Nairobi</option>
					<option value="location2">Mombasa</option>
					<option value="location1">Nakuru</option>
				</select>
			</div>

			<!-- Property size Filter -->
			<div class="flex flex-col px-4">
				<select
					v-model="size"
					class="border rounded-full w-full bg-white px-1 py-2 md:py-3 lg:px-2 lg:py-3"
				>
					<option value="">Apartment</option>
					<option value="small">Studio</option>
					<option value="medium">1 Bedroom</option>
					<option value="large">2 Bedroom</option>
					<option value="large">3 Bedroom</option>
					<option value="large">4 Bedroom</option>
					<option value="large">5 Bedroom</option>
					<option value="large">6 Bedroom</option>
				</select>
			</div>

			<!-- Price Filter -->
			<div class="flex flex-col px-4">
				<input
					v-model="price"
					class="px-3 py-2 border rounded-full bg-white text-lg md:px-4"
					placeholder="ksh"
					type="number"
					min="0"
					step="10"
				/>
			</div>

			<button
				type="submit"
				class="text-white rounded-full flex bg-blue-600 py-2 font-bold md:py-1 lg:justify-center lg:items-center lg:text-xl h-16 lg:space-x-2"
			>
				<span class="material-symbols-outlined text-3xl"> search </span
				><span class="text-2xl">Search</span>
			</button>
		</form>
	</div>
</template>
<script setup>
import { ref } from "vue";

const type = ref("");
const location = ref("");
const size = ref("");
const price = ref(null);

const searchCars = () => {
	// Handle the search functionality here, including the selected options.
};
</script>

<style scoped>
.hero {
	/* Add your Hero section styles here */
}
</style>
