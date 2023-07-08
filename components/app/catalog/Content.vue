<script setup>
// Stores
import { useProductStore } from "@/store/product";
import { useLoaderStore } from "@/store/loader";
import { useCartStore } from "@/store/cart";

const productStore = useProductStore();
const loaderStore = useLoaderStore();
const cartStore = useCartStore();
</script>

<template>
  <section class="content">
    <div class="container">
      <AppLoaderForContent v-if="loaderStore.loaderForContent" />
      <div
        v-else
        class="content__wrapper"
      >
        <UiCardProject
          :project="item"
          :currency="cartStore.currentCurrency"
          v-for="item in productStore.products.payload"
          :key="item.id"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.content {
  padding: 0 0 70px 0;

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
}

@media (max-width: 1024px) {
  .content {
    &__wrapper {
      justify-content: space-between;
    }
  }
}
</style>
