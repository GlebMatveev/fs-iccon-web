<script setup>
// Stores
import { useFilterStore } from "@/store/filter";
import { useProductStore } from "@/store/product";

const filterStore = useFilterStore();
const productStore = useProductStore();
</script>

<template>
  <div class="sortswitcher">
    <!-- <p class="sortswitcher__title">{{ $t("sortSwitcher.title") }}</p> -->
    <select
      class="sortswitcher__wrapper"
      name="sortswitcher"
      id="sortswitcher"
      v-model="filterStore.filters.sort_direction"
      @change="productStore.getProducts()"
    >
      <option value="desc">
        {{ $t("sortSwitcher.options[0]") }}
      </option>
      <option value="asc">
        {{ $t("sortSwitcher.options[1]") }}
      </option>
    </select>
    <label for="sortswitcher">
      <!-- <Icon class="sortswitcher__icon" name="SortSwitcherArrowDown" size="24" /> -->
    </label>
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
