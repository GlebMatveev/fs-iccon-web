<script setup>
// Stores
import { useProductStore } from "@/store/product";
import { useFilterStore } from "@/store/filter";

const productStore = useProductStore();
const filterStore = useFilterStore();

// Functions
function goPreviousPage() {
  filterStore.filters.skip =
    filterStore.filters.take * (+productStore.products.meta.page - 2);
  productStore.getProducts();
  window.scrollTo(0, 0);
}

function goNextPage() {
  filterStore.filters.skip =
    filterStore.filters.take * +productStore.products.meta.page;
  productStore.getProducts();
  window.scrollTo(0, 0);
}

function goNumPage(num) {
  filterStore.filters.skip = filterStore.filters.take * num;
  productStore.getProducts();
  window.scrollTo(0, 0);
}
</script>

<template>
  <div class="paginator">
    <UiButtonMain
      theme="secondary"
      :title="$t('paginator.buttonPrevious')"
      @click="goPreviousPage()"
      v-show="+productStore.products.meta.page > 1"
    />

    <UiButtonMain
      theme="secondary"
      :title="(+productStore.products.meta.page - 2).toString()"
      @click="goNumPage(+productStore.products.meta.page - 3)"
      v-show="!(+productStore.products.meta.page <= 2)"
    />
    <UiButtonMain
      theme="secondary"
      :title="(+productStore.products.meta.page - 1).toString()"
      @click="goNumPage(+productStore.products.meta.page - 2)"
      v-show="!(+productStore.products.meta.page <= 1)"
    />

    <UiButtonMain
      :theme="productStore.products.meta.page ? 'primary' : 'secondary'"
      :title="(+productStore.products.meta.page).toString()"
      @click="goNumPage(+productStore.products.meta.page - 1)"
    />

    <UiButtonMain
      theme="secondary"
      :title="(+productStore.products.meta.page + 1).toString()"
      @click="goNumPage(+productStore.products.meta.page)"
      v-show="
        !(
          +productStore.products.meta.page >=
          +productStore.products.meta.pages - 0
        )
      "
    />
    <UiButtonMain
      theme="secondary"
      :title="(productStore.products.meta.page + 2).toString()"
      @click="goNumPage(+productStore.products.meta.page + 1)"
      v-show="
        !(
          +productStore.products.meta.page >=
          +productStore.products.meta.pages - 1
        )
      "
    />

    <UiButtonMain
      theme="secondary"
      :title="$t('paginator.buttonNext')"
      @click="goNextPage()"
      v-show="
        productStore.products.meta.page != productStore.products.meta.pages
      "
    />
  </div>
</template>

<style lang="scss" scoped>
.paginator {
  padding: 40px 0;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
