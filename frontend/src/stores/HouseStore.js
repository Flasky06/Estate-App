import { defineStore } from "pinia";
import { ref } from "vue";

export const useHouseStore = defineStore("houses", () => {
	const houses = ref([]);

	const house = ref([]);
	const loading = ref(true);

	const fetchHouses = async () => {
		const url = "http://localhost:8600/houses/all";

		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			houses.value = data;
		} catch (error) {
			console.error("Error:", error);
		} finally {
			loading.value = false;
		}
	};

	fetchHouses();

	const fetchHouse = async () => {
		const url = "http://localhost:8600/houses/655ff324be27ba1c31cd69ab";

		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			house.value = data;
		} catch (error) {
			console.error("Error:", error);
		} finally {
			loading.value = false;
		}
	};
	fetchHouse();

	return { houses, loading, house };
});
