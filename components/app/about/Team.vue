<template>
  <section class="team">
    <div class="container">
      <div class="team__wrapper">
        <div class="team__text">
          <h2 class="team__text-title">
            {{ $t("static.about.team.title") }}
          </h2>
          <p class="team__text-description">
            {{ $t("static.about.team.description") }}
          </p>
        </div>
        <img src="/img/static/about/team.png" alt="Team" class="team__image" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.team {
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
    }
  }

  &__image {
    width: 773px;
    height: 394px;
    border: 2px solid #353431;
    border-radius: 5px;
    object-fit: cover;
  }
}

@media (max-width: 1024px) {
  .team {
    &__text {
      width: 100%;
      margin-bottom: 20px;
    }
  }
}

@media (max-width: 768px) {
  .team {
    &__image {
      width: 100%;
    }
  }
}
</style>
