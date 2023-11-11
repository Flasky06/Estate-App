<template>
	<div class="bg-[#061158] top-0 sticky z-[100]">
		<!-- Desktop Navbar -->
		<div
			class="px-4 sm:px-6 hidden lg:flex justify-between lg:items-center py-4 border-b-2 border-white"
		>
			<router-link class="text-white text-2xl" to="/"> Flasky </router-link>

			<ul class="space-x-16 lg:flex">
				<li><router-link to="/" class="text-white">Home</router-link></li>
				<li>
					<router-link
						to="/about"
						@click="toggleMobileSidebar"
						class="text-white"
						>Properties</router-link
					>
				</li>

				<li>
					<router-link
						to="/portfolio"
						@click="toggleMobileSidebar"
						class="text-white"
						>Profile</router-link
					>
				</li>
				<li>
					<router-link
						to="/services"
						@click="toggleMobileSidebar"
						class="text-white"
					>
						Logout
					</router-link>
				</li>
			</ul>
		</div>

		<!-- Mobile Navbar (sidebar) -->
		<div
			class="lg:hidden fixed w-full h-20 z-[100] shadow-xl transition-transform ease-in-out duration-300 bg-[#061158]"
		>
			<div class="max-w-7xl lg:px-8 py-4">
				<div class="flex items-center justify-between">
					<router-link to="/">
						<span class="text-white text-xl ml-4"> Flasky</span>
					</router-link>
					<button
						@click="toggleMobileSidebar"
						class="text-white mr-2 text-2xl lg:hidden"
					>
						{{ mobileSidebarOpen ? "✕" : "☰" }}
					</button>
				</div>
				<div name="slide " class="w-9/12 ml-auto left-0">
					<div
						v-if="mobileSidebarOpen"
						class="bg-[#061158] text-white mt-4 p-4 rounded-lg opacity-80 h-screen"
					>
						<div class="space-y-12 text-xl ml-4">
							<div class="font-bold text-xl">
								<router-link to="/" @click="toggleMobileSidebar">
									Home</router-link
								>
							</div>
							<div class="font-bold text-xl">
								<router-link to="/buy" @click="toggleMobileSidebar">
									<span>For rent</span>
								</router-link>
							</div>
							<div class="font-bold text-xl">
								<router-link to="/buy" @click="toggleMobileSidebar">
									<span>For sale</span>
								</router-link>
							</div>
							<div class="font-bold text-xl">
								<router-link to="/rent" @click="toggleMobileSidebar">
									Profile</router-link
								>
							</div>
							<ul class="space-y-4">
								<div class="font-bold text-xl my-5">Settings and legal</div>
								<li>About flasky.co.m</li>
								<li>Terms and conditions</li>
								<li>Privacy and cookies</li>
							</ul>
							<div>
								<router-link to="/rent" @click="toggleMobileSidebar">
									Logout</router-link
								>
							</div>
						</div>
					</div>
					<div class="font-bold text-xl">
						<router-link to="/contact" @click="toggleMobileSidebar">
							Logout</router-link
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const mobileSidebarOpen = ref(true);

const toggleMobileSidebar = () => {
	mobileSidebarOpen.value = !mobileSidebarOpen.value;
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
	transition: transform 0.3s;
}
.slide-enter,
.slide-leave-to {
	transform: translateX(100%);
}
</style>
