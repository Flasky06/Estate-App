<template>
	<div>{{ store.house }}</div>
	<div class="mt-" v-for="detail in store.house">
		<div class="h-[400px] w-full rounded">
			<img class="h-full w-full rounded-lg" :src="detail.src" alt="" />
		</div>
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
	</div>
</template>
<script setup>
import { useHouseStore } from "../stores/HouseStore";
const store = useHouseStore();
console.log(store);
</script>
