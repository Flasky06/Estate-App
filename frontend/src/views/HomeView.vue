<template>
	<Hero />
	<PropertyCategories />
	<ListingsCategories />
	<h2 class="my-8">Welcome, {{ userStore.user }}</h2>

	<FeaturedProperties />
</template>
<script setup>
import Hero from "../components/Hero.vue";
import ListingsCategories from "../components/ListingsCategories.vue";
import PropertyCategories from "../components/PropertyCategories.vue";
import FeaturedProperties from "../components/FeaturedProperties.vue";

import { useUserStore } from "../stores/users.store";
const userStore = useUserStore;
</script>
