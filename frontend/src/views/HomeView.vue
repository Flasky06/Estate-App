<template>
	<PropertyListing />
</template>

<script setup>
import PropertyListing from "../components/PropertyListing.vue";
import { useHouseStore } from "../stores/HouseStore";
const houseStore = useHouseStore();

console.log(houseStore);
</script>
<style></style>
