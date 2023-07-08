<template>
  <section class="banner">
    <div class="container">
      <div class="banner__wrapper">
        <div class="banner__text">
          <h2 class="banner__text-title">
            {{ $t("static.about.bannerBottom.title") }}
          </h2>
          <p class="banner__text-description">
            {{ $t("static.about.bannerBottom.description") }}
          </p>
          <UiButtonMain
            :title="$t('static.about.bannerBottom.button')"
            theme="purple"
            to="/support"
          />
        </div>
        <img
          src="/img/static/about/banner-bottom.png"
          alt="Join our team"
          class="banner__image"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  padding: 30px 0;
  background-color: #f2e5ff;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  &__text {
    width: 367px;

    &-title {
      font-family: "Merriweather";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 140%;
      letter-spacing: -0.01em;
      color: #353431;
      margin-bottom: 20px;
    }
    &-description {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;
      color: #4f4e4a;
      margin-bottom: 50px;
    }
  }

  &__image {
    width: 659px;
    height: 400px;
  }
}

@media (max-width: 425px) {
  .banner {
    &__image {
      width: 100%;
      height: 100%;
      margin-top: 20px;
    }
  }
}
</style>
