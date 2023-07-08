<template>
  <section class="advantages">
    <div class="container">
      <div class="advantages__wrapper">
        <div class="advantages__item">
          <Icon class="advantages__item-icon" name="FaqNote" size="74" />
          <h3 class="advantages__item-title">
            {{ $t("static.faq.advantages[0].title") }}
          </h3>
          <p class="advantages__item-description">
            {{ $t("static.faq.advantages[0].description") }}
          </p>
        </div>
        <div class="advantages__item">
          <Icon class="advantages__item-icon" name="FaqGem" size="74" />
          <h3 class="advantages__item-title">
            {{ $t("static.faq.advantages[1].title") }}
          </h3>
          <p class="advantages__item-description">
            {{ $t("static.faq.advantages[1].description") }}
          </p>
        </div>
        <div class="advantages__item">
          <Icon class="advantages__item-icon" name="FaqInfinity" size="74" />
          <h3 class="advantages__item-title">
            {{ $t("static.faq.advantages[2].title") }}
          </h3>
          <p class="advantages__item-description">
            {{ $t("static.faq.advantages[2].description") }}
          </p>
        </div>
        <div class="advantages__item">
          <Icon class="advantages__item-icon" name="FaqHorn" size="74" />
          <h3 class="advantages__item-title">
            {{ $t("static.faq.advantages[3].title") }}
          </h3>
          <p class="advantages__item-description">
            {{ $t("static.faq.advantages[3].description") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.advantages {
  padding: 70px 0 50px 0;

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 20px;
  }

  &__item {
    width: 298px;
    min-height: 282px;
    background-color: #e9fcfa;
    border: 2px solid #353431;
    border-radius: 5px;
    padding: 25px 22px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-icon {
      margin-bottom: 20px;
      min-height: 74px;
    }
    &-title {
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 140%;
      color: #353431;
      margin-bottom: 10px;
      text-align: center;
    }
    &-description {
      text-align: center;
    }
  }
}

@media (max-width: 425px) {
  .advantages {
    &__item {
      width: 100%;
    }
  }
}
</style>
