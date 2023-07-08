<template>
  <section class="millions">
    <div class="container">
      <div class="millions__wrapper">
        <div class="millions__text">
          <h2 class="millions__text-title">
            {{ $t("static.about.millions.title") }}
          </h2>
          <p class="millions__text-description">
            {{ $t("static.about.millions.description") }}
          </p>
        </div>

        <div class="millions__items">
          <div class="millions__items-card">
            <h3 class="millions__items-title">
              {{ $t("static.about.millions.items[0].title") }}
            </h3>
            <p class="millions__items-description">
              {{ $t("static.about.millions.items[0].description") }}
            </p>
          </div>
          <div class="millions__items-card">
            <h3 class="millions__items-title">
              {{ $t("static.about.millions.items[1].title") }}
            </h3>
            <p class="millions__items-description">
              {{ $t("static.about.millions.items[1].description") }}
            </p>
          </div>
          <div class="millions__items-card">
            <h3 class="millions__items-title">
              {{ $t("static.about.millions.items[2].title") }}
            </h3>
            <p class="millions__items-description">
              {{ $t("static.about.millions.items[2].description") }}
            </p>
          </div>
          <div class="millions__items-card">
            <h3 class="millions__items-title">
              {{ $t("static.about.millions.items[3].title") }}
            </h3>
            <p class="millions__items-description">
              {{ $t("static.about.millions.items[3].description") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.millions {
  padding: 50px 0;

  &__wrapper {
    background-color: #20dac7;
    border: 2px solid #353431;
    border-radius: 5px;
    padding: 50px;
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
    }
  }

  &__items {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    width: 673px;

    &-card {
      width: 329px;
      height: 109px;
      background: #e9fcfa;
      border: 2px solid #353431;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &-title {
      font-style: normal;
      font-weight: 800;
      font-size: 28px;
      line-height: 140%;
      color: #1ab2a3;
    }
    &-description {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;
      color: #353431;
    }
  }
}

@media (max-width: 1024px) {
  .millions {
    &__text {
      width: 100%;
      margin-bottom: 20px;
    }
  }
}

@media (max-width: 425px) {
  .millions {
    &__text {
      &-title {
        font-size: 30px;
      }
    }
  }
}
</style>
