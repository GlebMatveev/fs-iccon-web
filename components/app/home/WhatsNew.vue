<template>
  <section class="whats">
    <div class="container">
      <div class="whats__wrapper">
        <div class="whats__text">
          <h2 class="whats__text-title">
            {{ $t("static.home.whatsNew.title") }}
          </h2>
          <p class="whats__text-description">
            {{ $t("static.home.whatsNew.description") }}
          </p>
          <UiButtonMain
            :title="$t('static.home.whatsNew.button')"
            theme="primary"
            to="/catalog"
          />
        </div>
        <div class="whats__cards">
          <div class="whats__cards-item">
            <img
              src="/img/static/home/whats-new-01.png"
              :alt="$t('static.home.whatsNew.items[0]')"
              class="whats__cards-image"
            />
            <h3 class="whats__cards-title">
              {{ $t("static.home.whatsNew.items[0]") }}
            </h3>
          </div>
          <div class="whats__cards-item">
            <img
              src="/img/static/home/whats-new-02.png"
              :alt="$t('static.home.whatsNew.items[1]')"
              class="whats__cards-image"
            />
            <h3 class="whats__cards-title">
              {{ $t("static.home.whatsNew.items[1]") }}
            </h3>
          </div>
          <div class="whats__cards-item">
            <img
              src="/img/static/home/whats-new-03.png"
              :alt="$t('static.home.whatsNew.items[2]')"
              class="whats__cards-image"
            />
            <h3 class="whats__cards-title">
              {{ $t("static.home.whatsNew.items[2]") }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.whats {
  padding: 70px 0;
  background-color: #fcf4e8;

  &__wrapper {
    display: flex;
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

  &__cards {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;

    &-item {
      width: 251px;
    }
    &-image {
      width: 100%;
      height: 182px;
      object-fit: cover;
      border: 2px solid #353431;
      border-radius: 5px;
      margin-bottom: 17px;
    }
    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #353431;
    }
  }
}

@media (max-width: 1024px) {
  .whats {
    &__text {
      margin-bottom: 50px;
    }
  }
}

@media (max-width: 425px) {
  .whats {
    &__cards {
      &-item {
        width: 100%;
      }
    }
  }
}
</style>
