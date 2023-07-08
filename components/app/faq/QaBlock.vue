<script setup>
//Props
const props = defineProps({
  title: String,
  qa: Object,
});
</script>

<template>
  <section class="qa-block">
    <h2 class="qa-block__title">{{ props.title }}</h2>
    <div
      class="qa-block__wrapper"
      :class="{ 'qa-block__wrapper--active': item.toggle }"
      v-for="item in props.qa"
      @click="item.toggle = !item.toggle"
    >
      <div class="qa-block__question-block">
        <h3 class="qa-block__question">
          {{ item.question }}
        </h3>
        <Icon
          class="filter__item-icon"
          v-if="item.toggle"
          name="FaqArrowUp"
          size="32"
        />
        <Icon class="filter__item-icon" v-else name="FaqArrowDown" size="32" />
      </div>
      <p class="qa-block__answer" v-if="item.toggle">{{ item.answer }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.qa-block {
  padding: 50px 0 70px 0;

  &__title {
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 44px;
    color: #404145;
    margin-bottom: 30px;
  }

  &__wrapper {
    padding: 24px;
    border: 2px solid #353431;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 12px;
  }

  &__wrapper--active {
    color: #fff;
    background-color: #ffa217;
  }

  &__question-block {
    display: flex;
    justify-content: space-between;
  }

  &__question {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
  }

  &__answer {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 135%;
    margin-top: 12px;
  }
}

@media (max-width: 425px) {
  .qa-block {
    &__question {
      width: 80%;
    }
  }
}
</style>
