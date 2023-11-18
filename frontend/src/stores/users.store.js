import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
	state: () => ({ user: {} }),

	actions: {
		async fetchUser() {
			const res = await fetch(
				"http://localhost:8500/auth/65588654f2c49a8b6bc9ad60"
			);

			const user = await res.json();
			console.log(user);
			this.user = user;
		},

		async signUp(email, password) {
			const res = await fetch("http://localhost:8500/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			const user = await res.json();
			this.user = user;
		},

		async signIn(email, password) {
			try {
				const response = await fetch("https://localhost:8500/auth/register", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, password }),
				});

				if (!response.ok) {
					const errorMessage = await response.text();
					throw new Error(
						`Failed to sign in. Server responded with ${response.status}: ${errorMessage}`
					);
				}

				const user = await response.json();
				this.user = user;
			} catch (error) {
				console.error("Error during signIn:", error.message);
				throw error; // Rethrow the error to propagate it further
			}
		},
	},
});
