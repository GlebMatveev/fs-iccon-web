import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", () => {
  const cart = ref([]);
  const cartQuantity = ref(0);
  const cartPrice = ref(0);
  const cartProducts = ref([]);

  const currentCurrency = ref({
    code: "USD",
    rate: 1.0,
  });

  return {
    cart,
    cartQuantity,
    cartPrice,
    cartProducts,
    currentCurrency,
  };
});
