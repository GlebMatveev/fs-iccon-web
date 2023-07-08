<template>
  <section class="bar">
    <div class="container">
      <div class="bar__wrapper">
        <AppCatalogPaginator class="bar__paginator" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bar {
  padding: 0 0 70px 0;

  &__wrapper {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
