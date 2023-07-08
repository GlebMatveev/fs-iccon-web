<template>
  <section class="timeline">
    <div class="container">
      <h2 class="timeline__title">
        {{ $t("static.about.timeline.title") }}
      </h2>
    </div>

    <div class="timeline__wrapper">
      <div class="timeline__line"></div>
      <div class="timeline__item">
        <p class="timeline__item-year">
          {{ $t("static.about.timeline.items[0].year") }}
        </p>
        <div class="timeline__item-dot"></div>
        <p class="timeline__item-description">
          {{ $t("static.about.timeline.items[0].description") }}
        </p>
      </div>
      <div class="timeline__item">
        <p class="timeline__item-year">
          {{ $t("static.about.timeline.items[1].year") }}
        </p>
        <div class="timeline__item-dot"></div>
        <p class="timeline__item-description">
          {{ $t("static.about.timeline.items[1].description") }}
        </p>
      </div>
      <div class="timeline__item timeline__item--active">
        <p class="timeline__item-year">
          {{ $t("static.about.timeline.items[2].year") }}
        </p>
        <div class="timeline__item-dot"></div>
        <p class="timeline__item-description">
          {{ $t("static.about.timeline.items[2].description") }}
        </p>
      </div>
      <div class="timeline__item">
        <p class="timeline__item-year">
          {{ $t("static.about.timeline.items[3].year") }}
        </p>
        <div class="timeline__item-dot"></div>
        <p class="timeline__item-description">
          {{ $t("static.about.timeline.items[3].description") }}
        </p>
      </div>
      <div class="timeline__item">
        <p class="timeline__item-year">
          {{ $t("static.about.timeline.items[4].year") }}
        </p>
        <div class="timeline__item-dot"></div>
        <p class="timeline__item-description">
          {{ $t("static.about.timeline.items[4].description") }}
        </p>
      </div>
      <div class="timeline__item">
        <p class="timeline__item-year">
          {{ $t("static.about.timeline.items[5].year") }}
        </p>
        <div class="timeline__item-dot"></div>
        <p class="timeline__item-description">
          {{ $t("static.about.timeline.items[5].description") }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.timeline {
  padding: 70px 0;

  &__wrapper {
    display: flex;
    justify-content: center;
    overflow-x: auto;
    overflow: hidden;
    position: relative;
  }

  &__line {
    width: 100%;
    border-bottom: 2px solid #faead1;
    position: absolute;
    top: 60px;
  }

  &__title {
    font-family: "Merriweather";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 140%;
    letter-spacing: -0.01em;
    color: #353431;
    margin-bottom: 87px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-year {
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 140%;
      color: #9d9b95;
      margin-bottom: 15px;
    }
    &-dot {
      width: 37px;
      height: 37px;
      border-radius: 25px;
      background-color: #fcf4e8;
      margin-bottom: 15px;
      z-index: 1;
    }
    &-description {
      width: 296px;
      min-height: 106px;
      text-align: center;
      padding: 20px;
      color: #6a6862;
    }
  }

  &__item--active > &__item-year {
    color: #072c28;
  }
  &__item--active > &__item-dot {
    background-color: #ffa217;
  }
  &__item--active > &__item-description {
    color: #353431;
    background-color: #ffa217;
    border: 1px solid #353431;
    border-radius: 5px;
  }
}
</style>
