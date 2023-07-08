<template>
  <section class="possibilities">
    <div class="container">
      <div class="possibilities__wrapper">
        <div class="possibilities__text">
          <h2 class="possibilities__text-title">
            {{ $t("static.about.possibilities.title") }}
          </h2>
          <p class="possibilities__text-description">
            {{ $t("static.about.possibilities.description") }}
          </p>
        </div>
        <div class="possibilities__items">
          <div
            class="possibilities__items-card possibilities__items-card--yellow"
          >
            <img
              src="/img/static/about/possibilities-01.png"
              alt="Freepik"
              class="possibilities__items-image"
            />
          </div>
          <div
            class="possibilities__items-card possibilities__items-card--green"
          >
            <img
              src="/img/static/about/possibilities-02.png"
              alt="Flaticon"
              class="possibilities__items-image"
            />
          </div>
          <div
            class="possibilities__items-card possibilities__items-card--green"
          >
            <img
              src="/img/static/about/possibilities-03.png"
              alt="Slidesgo"
              class="possibilities__items-image"
            />
          </div>
          <div
            class="possibilities__items-card possibilities__items-card--yellow"
          >
            <img
              src="/img/static/about/possibilities-04.png"
              alt="Wepik"
              class="possibilities__items-image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.possibilities {
  padding: 70px 0;

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
    }
  }

  &__items {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    width: 773px;

    &-card {
      width: 379px;
      height: 92px;
      border: 2px solid #353431;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-card--yellow {
      background: #ffa217;
    }
    &-card--green {
      background: #20dac7;
    }
  }
}

@media (max-width: 1024px) {
  .possibilities {
    &__text {
      width: 100%;
      margin-bottom: 20px;
    }
  }
}
</style>
