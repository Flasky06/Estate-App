<template>
	<div class="bg-[#061158] top-0 sticky z-40">
		<div
			class="hidden lg:flex lg:flex-row lg:justify-center lg:py-3 lg:space-x-24 bg-[#1E1E1E] text-white"
		>
			<div>Infospace@gmail.com</div>
			<div>+254 712 345 678</div>
			<div>Gibcon House 4th Floor Nakuru</div>
		</div>
		<!-- Desktop Navbar -->
		<div
			class="px-4 sm:px-6 hidden lg:flex justify-between lg:items-center py-4 border-b-8 border-white"
		>
			<router-link class="text-white text-2xl" to="/"> Namlah </router-link>

			<ul class="space-x-16 lg:flex">
				<li><router-link to="/" class="text-white">Home</router-link></li>
				<li>
					<router-link
						to="/about"
						@click="toggleMobileSidebar"
						class="text-white"
						>About</router-link
					>
				</li>
				<li>
					<router-link
						to="/services"
						@click="toggleMobileSidebar"
						class="text-white"
					>
						Services
					</router-link>
				</li>
				<li>
					<router-link
						to="/portfolio"
						@click="toggleMobileSidebar"
						class="text-white"
						>Portfolio</router-link
					>
				</li>
				<li>
					<router-link
						to="/testimonials"
						@click="toggleMobileSidebar"
						class="text-white"
						>Testimonials</router-link
					>
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
						<span class="text-white text-xl ml-4"> Namlah</span>
					</router-link>
					<button
						@click="toggleMobileSidebar"
						class="text-white mr-2 text-2xl lg:hidden"
					>
						☰
					</button>
				</div>
				<div name="slide " class="w-9/12 ml-auto left-0">
					<div
						v-if="mobileSidebarOpen"
						class="bg-[#061158] text-white mt-4 p-4 rounded-lg opacity-80 h-screen"
					>
						<div class="text-end mt-4 text-2xl">
							<button @click="toggleMobileSidebar" class="text-white">X</button>
						</div>
						<ul class="space-y-12 text-xl ml-4">
							<li>
								<router-link to="/" @click="toggleMobileSidebar">
									Home</router-link
								>
							</li>
							<li>
								<router-link to="/about" @click="toggleMobileSidebar">
									About</router-link
								>
							</li>
							<li>
								<router-link to="/services" @click="toggleMobileSidebar">
									Services</router-link
								>
							</li>
							<li>
								<router-link to="/portfolio" @click="toggleMobileSidebar">
									Portfolio</router-link
								>
							</li>
							<li>
								<router-link to="/testimonials" @click="toggleMobileSidebar">
									Testimonials</router-link
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

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
