<template>
	<Header />
	<RouterView />
	<!-- <FooterComponent /> -->
</template>
<script setup>
import { RouterView } from "vue-router";
import FooterComponent from "./components/layout/FooterComponent.vue";
import Header from "./components/layout/Header.vue";
</script>

<style scoped></style>
