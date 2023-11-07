<template>
	<div
		class="flex flex-col w-10/12 mt-12 py-4 px-2 mx-auto border md:w-7/12 md:px-4 md:mt-16 lg:w-4/12"
	>
		<h1 class="text-4xl font-bold my-8 text-center">LOGIN</h1>
		<form type="submit" class="flex flex-col space-y-5">
			<input
				type="text"
				placeholder="Email Address"
				class="border border-black px-2 py-1 text-lg lg:py-2 lg:text-xl"
			/>
			<div class="flex flex-col">
				<input
					type="text"
					placeholder="Password"
					class="border border-black px-2 py-1 text-lg lg:py-2 lg:text-xl"
				/>
				<p class="text-lg">Forgot Password ?</p>
			</div>
			<button
				class="bg-black text-white py-2 w-11/12 self-center text-lg rounded"
			>
				LOGIN
			</button>

			<span class="my-2 text-center text-lg"
				>don't have an account ? Signup now</span
			>
		</form>
	</div>
</template>
<script setup></script>
