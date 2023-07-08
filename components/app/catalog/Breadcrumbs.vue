<template>
  <div class="breadcrumbs">
    <div class="container">
      <div class="breadcrumbs__wrapper">
        <NuxtLink class="breadcrumbs__link" to="/">Home</NuxtLink>
        <p class="breadcrumbs__static">/ Catalog</p>
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
  }
}
</style>
