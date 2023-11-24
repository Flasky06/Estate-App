import { defineStore } from "pinia";
import { ref } from "vue";

export const useHouseStore = defineStore("houses", () => {
	const houses = ref([]);
	const loading = ref(true);

	const fetchData = async () => {
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

	fetchData();

	return { houses, loading };
});
