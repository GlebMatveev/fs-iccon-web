<template>
  <section class="companies">
    <div class="container">
      <div class="companies__wrapper">
        <h2 class="companies__title">
          {{ $t("static.about.companies.title") }}
        </h2>
        <div class="companies__items">
          <div class="companies__items-card">
            <img
              src="/img/static/about/companies-01.png"
              alt="Airwallex"
              class="companies__items-image"
            />
          </div>
          <div class="companies__items-card">
            <img
              src="/img/static/about/companies-02.png"
              alt="afterpay"
              class="companies__items-image"
            />
          </div>
          <div class="companies__items-card">
            <img
              src="/img/static/about/companies-03.png"
              alt="amazon"
              class="companies__items-image"
            />
          </div>
          <div class="companies__items-card">
            <img
              src="/img/static/about/companies-04.png"
              alt="Amplitude"
              class="companies__items-image"
            />
          </div>
          <div class="companies__items-card">
            <img
              src="/img/static/about/companies-05.png"
              alt="Airtable"
              class="companies__items-image"
            />
          </div>
          <div class="companies__items-card">
            <img
              src="/img/static/about/companies-06.png"
              alt="asana"
              class="companies__items-image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.companies {
  padding: 50px 0;

  &__wrapper {
    background-color: #9730ff;
    border: 2px solid #353431;
    border-radius: 5px;
    padding: 50px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__title {
    font-family: "Merriweather";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 140%;
    letter-spacing: -0.01em;
    color: #ffffff;
    width: 395px;
  }

  &__items {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    width: 593px;

    &-card {
      width: 187px;
      height: 75px;
      background-color: #f2e5ff;
      border: 2px solid #353431;
      box-shadow: 5px 5px 0px #363636;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

@media (max-width: 1024px) {
  .companies {
    &__title {
      width: 100%;
      margin-bottom: 20px;
    }
  }
}

@media (max-width: 425px) {
  .companies {
    &__title {
      font-size: 30px;
    }
  }
}
</style>
