<script setup>
// Props
const props = defineProps({
  title: String,
  theme: String,
  width: String,
  height: String,
  borderRadius: String,
  padding: String,
  to: String,
  iconName: String,
  iconSize: String,
  loader: Boolean,
  loaderPath: String,
});
</script>

<template>
  <NuxtLink :to="props.to">
    <button
      class="button"
      :class="{
        'button--primary': props.theme === 'primary',
        'button--secondary': props.theme === 'secondary',
        'button--secondary-yellow': props.theme === 'secondary-yellow',
        'button--search': props.theme === 'search',
        'button--purple': props.theme === 'purple',
        'button--error': props.theme === 'error',
      }"
      :style="`height: ${props.height}; width: ${props.width}; border-radius: ${props.borderRadius}; padding: ${props.padding};`"
    >
      <p v-if="!loader">{{ props.title }}</p>
      <Icon
        v-if="iconName && iconSize && !loader"
        :name="iconName"
        :size="iconSize"
      />

      <img v-if="loader" :src="loaderPath" alt="" class="button__loader" />
    </button>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.button {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 120%;
  padding: 20px 25px;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid #353431;

  &--primary {
    background-color: #ffa217;
    color: #fff;
  }

  &--secondary {
    background-color: #fff;
    color: #353431;
  }

  &--secondary-yellow {
    background-color: #fff;
    color: #ffa217;
  }

  &--search {
    background-color: #faead1;
  }

  &--purple {
    background-color: #9730ff;
    color: #fff;
  }

  &--error {
    background-color: #fd2222;
    color: #fff;
  }

  &__loader {
    height: 30px;
  }
}
</style>
