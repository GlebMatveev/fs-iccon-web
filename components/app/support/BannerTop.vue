<template>
  <section class="banner">
    <div class="container">
      <div class="banner__wrapper">
        <h2 class="banner__title">{{ $t("static.support.title") }}</h2>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  background-color: #fcf4e8;

  &__wrapper {
    padding: 120px 0;
  }

  &__title {
    font-family: "Merriweather";
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 120%;
    letter-spacing: -0.01em;
    color: #353431;
  }
}
</style>
