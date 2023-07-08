<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <label class="currency">
    <Icon class="currency__icon" name="HeaderGlobe" size="20" />
    <select
      class="currency__wrapper"
      name="currency"
      id="currency"
      v-model="locale"
      @change="(e) => $i18n.setLocaleCookie(e.target.value)"
    >
      <option
        class="countswitcher__option"
        v-for="locale in locales"
        :key="locale.code"
      >
        {{ locale.code }}
      </option>
    </select>
  </label>
</template>

<style lang="scss" scoped>
.currency {
  display: flex;
  align-items: center;

  &__icon {
    margin-right: 7px;
  }

  &__wrapper {
    text-transform: uppercase;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    border: none;
    outline: none;
    appearance: none;

    cursor: pointer;
  }
}
</style>
