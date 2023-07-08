<script setup>
// Stores
import { useCartStore } from "@/store/cart";
const cartStore = useCartStore();

const currencies = [
  {
    code: "USD",
    rate: 1.0,
  },
  {
    code: "EUR",
    rate: 1.09,
  },
];
</script>

<template>
  <label class="currency">
    <Icon
      class="currency__icon"
      name="HeaderEuro"
      size="20"
    />
    <select
      class="currency__wrapper"
      name="currency"
      id="currency"
      v-model="cartStore.currentCurrency"
    >
      <option
        v-for="item in currencies"
        :value="item"
      >
        {{ item.code }}
      </option>
    </select>
  </label>
</template>

<style lang="scss" scoped>
.currency {
  display: flex;
  align-items: center;

  &__icon {
    margin-right: 7px;
  }

  &__wrapper {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    border: none;
    outline: none;
    appearance: none;

    cursor: pointer;
  }
}
</style>
