<template>
	<div class="bg-inherit z-40 bg:opacity-80">
		<form
			@submit.prevent="searchCars"
			class="border py-4 border-white rounded-lg flex flex-col lg:mx-auto lg:grid lg:grid-cols-5 lg:w-9/12 lg:gap-4 lg:px-2 lg:py-4 w-full"
		>
			<!-- Property Type -->
			<div class="mb-4 flex flex-col px-4">
				<label class="text-xl text-white">LOOKING FOR</label>
				<select
					v-model="type"
					class="border rounded bg-white px-1 py-2 lg:px-2 lg:py-3"
				>
					<option value="">Property Type</option>
					<option value="location1">Apartment</option>
					<option value="location2">Villa</option>
					<option value="location2">Condo</option>
					<option value="location2">Bungalow</option>
				</select>
			</div>
			<!-- Location Filter -->
			<div class="mb-4 flex flex-col px-4">
				<label class="text-xl text-white">LOCATION</label>
				<select
					v-model="location"
					class="border rounded bg-white px-1 py-2 lg:px-2 lg:py-3"
				>
					<option value="">Any Location</option>
					<option value="location2">Nairobi</option>
					<option value="location2">Mombasa</option>
					<option value="location1">Nakuru</option>
				</select>
			</div>

			<!-- Property size Filter -->
			<div class="mb-4 flex flex-col px-4">
				<label class="text-xl text-white">PROPERTY SIZE</label>
				<select
					v-model="size"
					class="border rounded w-full bg-white px-1 py-2 lg:px-2 lg:py-3"
				>
					<option value="">Apartment</option>
					<option value="small">Studio</option>
					<option value="medium">1 Bedroom</option>
					<option value="large">2 Bedroom</option>
					<option value="large">3 Bedroom</option>
					<option value="large">4 Bedroom</option>
				</select>
			</div>

			<!-- Price Filter -->
			<div class="mb-4 flex flex-col px-4">
				<label class="text-xl text-white">YOUR BUDGET</label>
				<input
					v-model="price"
					class="px-3 py-2 border rounded bg-white text-lg"
					type="number"
					min="0"
					step="10"
				/>
			</div>

			<button
				type="submit"
				class="text-white rounded bg-blue-600 mx-4 py-2 font-bold lg:my-5 lg:mx-4"
			>
				SEARCH
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
