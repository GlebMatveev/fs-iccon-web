<script setup>
// Props
const props = defineProps({
  name: String,
});
</script>

<template>
  <div class="breadcrumbs">
    <div class="container">
      <div class="breadcrumbs__wrapper">
        <NuxtLink class="breadcrumbs__link" to="/">Home </NuxtLink>
        <NuxtLink class="breadcrumbs__link" to="/catalog">/ Catalog </NuxtLink>
        <p class="breadcrumbs__static">/ {{ props.name }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  padding: 20px 0;

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__link {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: #9d9b95;
    margin-right: 5px;
    white-space: nowrap;
  }
  &__link:hover {
    color: #ffa217;
  }

  &__static {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: #353431;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
