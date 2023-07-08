<script setup>
// Props
const props = defineProps({
  project: Object,
  currency: Object,
  width: String,
  height: String,
  borderRadius: String,
  padding: String,
  to: String,
});

// Functions
function calcCurrencyRate(price) {
  return (parseFloat(price) * parseFloat(props.currency.rate)).toFixed(2);
}

// Image placeholder
const imagePlaceholder = "/img/products/placeholder.jpg";
function replaceImgByDefault(e) {
  e.target.src = imagePlaceholder;
}
</script>

<template>
  <NuxtLink
    class="project"
    :to="'/catalog/' + project.id"
  >
    <div
      class="project"
      :style="`height: ${props.height}; width: ${props.width}; border-radius: ${props.borderRadius}; padding: ${props.padding};`"
    >
      <img
        class="project__image"
        :src="`/img/products/${project.image}`"
        alt=""
      />
      <p class="project__price">
        {{ calcCurrencyRate(project.price) }} {{ props.currency.code }}
      </p>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.project {
  width: 141px;
  height: 141px;
  background: #ffffff;
  border: 2px solid #f3f3f3;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &__image {
    height: 40%;
    width: 40%;
    object-fit: contain;
  }

  &__price {
    position: absolute;
    bottom: 7px;
    right: 8px;
    padding: 5px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 120%;
    color: #454440;
    background: #f3f3f3;
    border-radius: 3px;
  }
}

@media (max-width: 425px) {
  .project {
    width: 100%;
  }
}
</style>
