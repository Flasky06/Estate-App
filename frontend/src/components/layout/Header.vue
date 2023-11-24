<template>
	<div class="bg-white top-0 border-b sticky z-[100]">
		<!-- Desktop Navbar -->
		<div
			class="px-4 sm:px-6 hidden lg:flex justify-between mx-4 lg:items-center py-4 border-b-2 border-white"
		>
			<router-link class="text-2xl" to="/"> Flasky </router-link>
			<Search />

			<ul class="space-x-16 lg:flex">
				<router-link to="/login" @click="toggleMobileSidebar" class=""
					><button
						class="border px-4 py-2 text-xl rounded-full flex items-center justify-center space-x-2"
					>
						<span class="material-symbols-outlined text-3xl"> menu </span>

						<span class="material-symbols-outlined text-5xl">
							account_circle
						</span>
					</button>
				</router-link>
			</ul>
		</div>

		<!-- Mobile Navbar (sidebar) -->
		<div
			class="lg:hidden fixed w-full h-20 z-[100] shadow-xl transition-transform ease-in-out duration-300 bg-primary"
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
							<div class="font-bold text-lg">
								<router-link to="/" @click="toggleMobileSidebar">
									Home</router-link
								>
							</div>
							<div class="font-bold text-lg">
								<router-link to="/rentals" @click="toggleMobileSidebar">
									<span>For rent</span>
								</router-link>
							</div>
							<div class="font-bold text-lg">
								<router-link to="/sale" @click="toggleMobileSidebar">
									<span>For sale</span>
								</router-link>
							</div>
							<div class="font-bold text-lg">
								<router-link to="/profile" @click="toggleMobileSidebar">
									Profile</router-link
								>
							</div>
							<ul class="space-y-4">
								<div class="font-bold text-xl my-5">Settings and legal</div>
								<li class="font-light">About flasky.com</li>
								<li class="font-light">Terms and conditions</li>
								<li class="font-light">Privacy and cookies</li>
							</ul>
							<div>
								<router-link to="/logout" @click="toggleMobileSidebar">
									Logout</router-link
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import Search from "./Search.vue";

const mobileSidebarOpen = ref(false);

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
