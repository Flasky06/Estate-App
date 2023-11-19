import { defineStore } from "pinia";

export const useHouseStore = defineStore("house", () => ({
	state: () => ({
		houses: [
			{
				id: 1,
				type: "For Rent",
				description:
					"Explore a wide range of rental and lease properties, available in all sizes and locations, perfectly tailored to your budget. Discover your ideal home today!",
			},
			{
				id: 2,
				type: "For Sale",
				description:
					"We offer a variety of properties for sale, available in all sizes and locations, all within your budget. Find your dream home today!",
			},
			{
				id: 3,
				type: "Office Spaces",
				description:
					"Discover contemporary office spaces available in various locations.",
			},
		],
	}),
	getters: {
		getTasks: (state) => state.houses,
	},
}));
