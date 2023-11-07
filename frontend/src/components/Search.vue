<template>
	<div class="hero">
		<form
			@submit.prevent="searchCars"
			class="flex flex-wrap items-center space-x-2"
		>
			<div class="mb-4">
				<label class="text-lg">Where</label>
				<select v-model="location" class="px-3 py-2 border rounded">
					<option value="">Any Location</option>
					<option value="location1">Location 1</option>
					<option value="location2">Location 2</option>
					<!-- Add more location options as needed -->
				</select>
			</div>
			<div class="mb-4">
				<label class="text-lg">Size</label>
				<select v-model="size" class="px-3 py-2 border rounded">
					<option value="">Any Size</option>
					<option value="small">Small</option>
					<option value="medium">Medium</option>
					<option value="large">Large</option>
					<!-- Add more size options as needed -->
				</select>
			</div>
			<div class="mb-4">
				<label class="text-lg">Price (Min)</label>
				<input
					v-model="minPrice"
					class="px-3 py-2 border rounded"
					type="number"
					min="0"
					step="10"
				/>
			</div>
			<div class="mb-4">
				<label class="text-lg">Price (Max)</label>
				<input
					v-model="maxPrice"
					class="px-3 py-2 border rounded"
					type="number"
					min="0"
					step="10"
				/>
			</div>
			<button
				type="submit"
				class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
			>
				SEARCH
			</button>
		</form>
	</div>
</template>

<script setup>
import { ref } from "vue";

const location = ref("");
const size = ref("");
const minPrice = ref(null);
const maxPrice = ref(null);

const searchCars = () => {
	// Handle the search functionality here, including the selected options.
	// You can access the selected values via the `location`, `size`, `minPrice`, and `maxPrice` refs.
};
</script>

<style scoped>
.hero {
	/* Add your Hero section styles here */
}
</style>
