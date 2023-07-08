<script setup>
// Stores
import { useFilterStore } from "@/store/filter";
import { useProductStore } from "@/store/product";

const filterStore = useFilterStore();
const productStore = useProductStore();

// Router parameters
const router = useRouter();

// Functions
function applyFilterAndRouterPush(category) {
  filterStore.filters.categories = [category];
  filterStore.filters.skip = 0;
  filterStore.filters.pack = "";
  productStore.getProducts();
  router.push("/catalog/");
}

function clearFilterAndRouterPush() {
  filterStore.filters.categories = [];
  filterStore.filters.skip = 0;
  filterStore.filters.pack = "";
  productStore.getProducts();
  router.push("/catalog/");
}

function updateCategoriesCheckbox(id) {
  let index = filterStore.filters.categories.indexOf(id);

  if (id == "0" && filterStore.filters.categories.length <= 0) {
    return true;
  } else {
    if (~index) {
      return true;
    } else {
      return false;
    }
  }
}
</script>

<template>
  <section class="bar">
    <div class="container">
      <div class="bar__wrapper">
        <ul class="bar__categories">
          <li
            class="bar__categories-item"
            :class="{
              'bar__categories-item--active': updateCategoriesCheckbox('0'),
            }"
            @click="clearFilterAndRouterPush()"
          >
            <p>{{ $t("static.catalog.categories[0]") }}</p>
          </li>
          <li
            class="bar__categories-item"
            :class="{
              'bar__categories-item--active': updateCategoriesCheckbox('1'),
            }"
            @click="applyFilterAndRouterPush('1')"
          >
            <p>{{ $t("static.catalog.categories[1]") }}</p>
          </li>
          <li
            class="bar__categories-item"
            :class="{
              'bar__categories-item--active': updateCategoriesCheckbox('2'),
            }"
            @click="applyFilterAndRouterPush('2')"
          >
            <p>{{ $t("static.catalog.categories[2]") }}</p>
          </li>
          <li
            class="bar__categories-item"
            :class="{
              'bar__categories-item--active': updateCategoriesCheckbox('3'),
            }"
            @click="applyFilterAndRouterPush('3')"
          >
            <p>{{ $t("static.catalog.categories[3]") }}</p>
          </li>
        </ul>

        <div class="bar__filters">
          <UiSelectPackSwitcher />
          <UiSelectSortSwitcher />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bar {
  padding: 20px 0 70px 0;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
  }

  &__categories {
    display: flex;
    background-color: #fcf4e8;
    border: 2px solid #353431;
    border-radius: 5px;
    padding: 5px;
    flex-wrap: wrap;

    &-item {
      padding: 13px 19px;
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 120%;
      color: #353431;
      cursor: pointer;
    }
    &-item--active {
      color: #fff;
      background-color: #ffa217;
      border-radius: 3px;
    }
  }

  &__filters {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }
}
</style>
