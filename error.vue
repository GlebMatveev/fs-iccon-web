<template>
  <div class="root">
    <AppHeader />

    <main class="main">
      <div class="container">
        <div class="error">
          <p class="error__title">{{ $t("static.error.title") }}</p>
          <p class="error__description">
            {{ $t("static.error.description") }}
          </p>
          <UiButtonMain
            :title="$t('static.error.link')"
            theme="primary"
            to="/"
          />
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.error {
  margin: 160px 0 150px 0;
  text-align: center;

  &__title {
    margin: 16px 0 8px 0;
    font-family: "Merriweather";
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 120%;
    letter-spacing: -0.01em;
    color: #353431;
    margin-bottom: 20px;
  }

  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #4f4e4a;
    margin-bottom: 72px;
  }
}
</style>
