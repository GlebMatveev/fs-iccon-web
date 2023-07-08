<template>
  <section class="tools">
    <div class="container">
      <h2 class="tools__title">
        {{ $t("static.home.tools.title") }}
      </h2>
      <p class="tools__description">
        {{ $t("static.home.tools.description") }}
      </p>
      <div class="tools__wrapper">
        <img
          src="/img/static/home/tools.png"
          alt="Tools"
          class="tools__image"
        />
        <div class="tools__cards">
          <div class="tools__cards-item">
            <h3 class="tools__cards-title">
              {{ $t("static.home.tools.items[0].title") }}
            </h3>
            <p class="tools__cards-description">
              {{ $t("static.home.tools.items[0].description") }}
              <span class="tools__cards-link">{{
                $t("static.home.tools.items[0].link")
              }}</span>
            </p>
          </div>
          <div class="tools__cards-item">
            <h3 class="tools__cards-title">
              {{ $t("static.home.tools.items[1].title") }}
            </h3>
            <p class="tools__cards-description">
              {{ $t("static.home.tools.items[1].description") }}
              <span class="tools__cards-link">{{
                $t("static.home.tools.items[1].link")
              }}</span>
            </p>
          </div>
          <div class="tools__cards-item">
            <h3 class="tools__cards-title">
              {{ $t("static.home.tools.items[2].title") }}
            </h3>
            <p class="tools__cards-description">
              {{ $t("static.home.tools.items[2].description") }}
              <span class="tools__cards-link">{{
                $t("static.home.tools.items[2].link")
              }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.tools {
  padding: 70px 0;

  &__title {
    font-family: "Merriweather";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 140%;
    letter-spacing: -0.01em;
    color: #353431;
    margin-bottom: 10px;
    width: 50%;
  }
  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    color: #4f4e4a;
    margin-bottom: 50px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__image {
    width: 894px;
    height: 527px;
    object-fit: cover;
  }

  &__cards {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;

    &-item {
      width: 296px;
      height: 100%;
      padding: 20px;
      border: 2px solid #353431;
      border-radius: 5px;
    }
    &-item:hover {
      background-color: #20dac7;
      box-shadow: 5px 5px 0px #363636;
      cursor: pointer;
    }

    &-title {
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 140%;
      color: #353431;
      margin-bottom: 10px;
    }
    &-description {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 140%;
      color: #0d5951;
    }
  }
}

@media (max-width: 1024px) {
  .tools {
    &__cards {
      margin-top: 50px;
      flex-direction: row;
    }
  }
}

@media (max-width: 768px) {
  .tools {
    &__image {
      width: 100%;
    }

    &__cards {
      flex-direction: column;
    }
  }
}

@media (max-width: 425px) {
  .tools {
    &__cards {
      &-item {
        width: 100%;
      }
    }
  }
}
</style>
