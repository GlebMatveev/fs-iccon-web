import { defineStore } from "pinia";

export const useFilterStore = defineStore("filterStore", () => {
  const filters = ref({
    sort_direction: "desc",
    sort_by: "price",
    skip: "0",
    take: "48",
    categories: [],
    price_min: "0",
    price_max: "0",
    pack: "",
  });

  return { filters };
});
