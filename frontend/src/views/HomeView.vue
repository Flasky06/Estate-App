<template>
	<PropertyCategories />
	<ListingsCategories />
	<h2 class="my-8">Welcome, {{ userStore.user }}</h2>

	<FeaturedProperties />
	<PropertyListing />
</template>
<script setup>
import ListingsCategories from "../components/ListingsCategories.vue";
import PropertyCategories from "../components/PropertyCategories.vue";
import FeaturedProperties from "../components/FeaturedProperties.vue";
import PropertyListing from "../components/PropertyListing.vue";

import { useUserStore } from "../stores/users.store";
const userStore = useUserStore;
</script>
