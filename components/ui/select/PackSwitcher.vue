<script setup>
// Stores
import { useProductStore } from "@/store/product";
import { usePackStore } from "@/store/pack";
import { useFilterStore } from "@/store/filter";

const productStore = useProductStore();
const packStore = usePackStore();
const filterStore = useFilterStore();
</script>

<template>
  <div class="sortswitcher">
    <select
      class="sortswitcher__wrapper"
      name="sortswitcher"
      id="sortswitcher"
      v-model="filterStore.filters.pack"
      @change="productStore.getProducts()"
    >
      <option value="">{{ $t("packSwitcher") }}</option>
      <option
        v-for="item in packStore.packs"
        :value="item.pack"
      >
        {{ item.pack }}
      </option>
    </select>
    <label for="sortswitcher"> </label>
  </div>
</template>

<style lang="scss" scoped>
.sortswitcher {
  position: relative;
  display: flex;
  align-items: center;

  &__title {
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 120%;
    color: #353431;
    margin-right: 10px;
  }

  &__wrapper {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 120%;
    color: #353431;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px;
    border: 2px solid #353431;
    border-radius: 5px;
    height: 54px;
    cursor: pointer;
  }

  &__wrapper:focus {
    outline: none;
  }

  &__icon {
    position: absolute;
    right: 0;
    top: 0;

    pointer-events: none;
  }
}

@media (max-width: 425px) {
  .sortswitcher {
    width: 100%;

    &__wrapper {
      width: 100%;
    }
  }
}
</style>
