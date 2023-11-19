<template>
	<div v-for="task in houseStore.houses" :key="task.id">
		{{ task.title }}
	</div>
</template>

<script setup>
import { useHouseStore } from "../stores/house.store";

const houseStore = useHouseStore();
</script>

<style></style>
