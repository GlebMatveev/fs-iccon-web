<template>
  <section class="banner">
    <div class="container">
      <div class="banner__wrapper">
        <div class="banner__text">
          <h2 class="banner__text-title">
            {{ $t("static.home.bannerBottom.title") }}
          </h2>
          <p class="banner__text-description">
            {{ $t("static.home.bannerBottom.description") }}
          </p>
          <UiButtonMain
            :title="$t('static.home.bannerBottom.button')"
            theme="secondary-yellow"
            to="/catalog"
          />
        </div>
        <img
          src="/img/static/home/banner-bottom.png"
          alt="Figma icons"
          class="banner__image"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  padding: 70px 0;

  &__wrapper {
    background: #ffa217;
    border: 2px solid #353431;
    border-radius: 5px;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    width: 585px;
    height: 100%;
    object-fit: cover;
  }
}

@media (max-width: 1024px) {
  .banner {
    &__text {
      margin-bottom: 50px;
    }
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
