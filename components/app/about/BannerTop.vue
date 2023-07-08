<template>
  <section class="banner">
    <div class="container">
      <div class="banner__wrapper">
        <h1 class="banner__title">
          {{ $t("static.about.bannerTop.title") }}
        </h1>
        <p class="banner__description">
          {{ $t("static.about.bannerTop.description") }}
        </p>
        <img
          class="banner__image"
          src="/img/static/about/banner-top.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  background-color: #fcf4e8;

  &__wrapper {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-family: "Merriweather";
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 120%;
    letter-spacing: -0.01em;
    color: #353431;
    margin-bottom: 20px;
  }
  &__description {
    width: 866px;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #4f4e4a;
    margin-bottom: 38px;
  }
}

@media (max-width: 768px) {
  .banner {
    &__description {
      width: 100%;
    }
    &__image {
      width: 100%;
    }
  }
}

@media (max-width: 425px) {
  .banner {
    &__title {
      text-align: center;
      font-size: 30px;
    }
  }
}
</style>
