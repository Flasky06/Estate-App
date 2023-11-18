import { defineStore } from "pinia";

export const useHousesStore = defineStore("house", () => ({
	state: () => ({
		properties: [],
	}),

	actions: {
		// Action to fetch houses
		async fetchHouses() {
			try {
				const response = await fetch("http://localhost:8085/houses");
				const data = await response.json();

				// Update the state with the fetched houses
				this.properties = data;
			} catch (error) {
				// Handle the error (e.g., log it or show a notification)
				console.error("Error fetching houses:", error);
			}
		},
	},
}));
