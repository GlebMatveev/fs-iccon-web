<template>
  <section class="banner">
    <div class="container">
      <div class="banner__wrapper">
        <div class="banner__text">
          <h2 class="banner__text-title">
            {{ $t("static.home.bannerTablet.title") }}
          </h2>
          <p class="banner__text-description">
            {{ $t("static.home.bannerTablet.description") }}
          </p>
          <UiButtonMain
            :title="$t('static.home.bannerTablet.button')"
            theme="primary"
            to="/catalog"
          />
        </div>
        <img
          src="/img/static/home/banner-tablet.png"
          alt="Tablet"
          class="banner__image"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  background-color: #fcf4e8;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__text {
    width: 406px;
    margin: 70px 0;

    &-title {
      font-family: "Merriweather";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 140%;
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
    margin-top: auto;
    object-fit: contain;
  }
}

@media (max-width: 425px) {
  .banner {
    &__image {
      width: 100%;
    }
  }
}
</style>
