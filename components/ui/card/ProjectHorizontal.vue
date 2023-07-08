<script setup>
// Import
import cart from "@/helpers/js/cart";

// Stores
import { useCartStore } from "@/store/cart";

const cartStore = useCartStore();

// Props
const props = defineProps({
  project: Object,
  currency: Object,
});

// Functions
function removeFromCart(id) {
  const x = cartStore.cartProducts.findIndex((item) => item.id === id);
  if (x !== -1) {
    cartStore.cartProducts.splice(x, 1);
  }

  const y = cartStore.cart.findIndex((item) => item.id === id);
  if (y !== -1) {
    cartStore.cart.splice(y, 1);
  }
}

function calcCurrencyRate(price) {
  return (parseFloat(price) * parseFloat(props.currency.rate)).toFixed(2);
}

// Watchers
watch(
  cartStore.cartProducts,
  () => {
    cartStore.cartQuantity = cart.calcCartQuantity(cartStore.cart);
    cartStore.cartPrice = cart.calcCartPrice(cartStore.cart);
  },
  { deep: true }
);

// Image placeholder
const imagePlaceholder = "/img/products/placeholder.jpg";
function replaceImgByDefault(e) {
  e.target.src = imagePlaceholder;
}
</script>

<template>
  <div class="project">
    <NuxtLink
      class="project__link"
      :to="'/catalog/' + project.id"
    >
      <img
        :src="`/img/products/${project.image}`"
        @error="replaceImgByDefault"
        class="project__image"
      />
    </NuxtLink>
    <div class="project__text">
      <h3 class="project__name">{{ project.name }}</h3>
      <p class="project__author">{{ project.developer }}</p>
    </div>

    <p class="project__price">
      {{ calcCurrencyRate(project.price) }} {{ props.currency.code }}
    </p>

    <div
      class="project__remove-button"
      @click="removeFromCart(project.id)"
    >
      <Icon
        class="project__remove-icon"
        name="Cart"
        size="18"
      />
      <p class="project__remove-label">
        {{ $t("projectHorizontal.button") }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project {
  display: flex;
  align-items: center;
  padding: 36px 24px 36px 24px;

  &__link {
    width: 72px;
    height: 72px;
    object-fit: contain;
    border: 2px solid #353431;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__image {
    height: 70%;
    width: 70%;
  }

  &__text {
    width: 431px;
    margin: 0 20px;
  }
  &__name {
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 140%;
    color: #353431;
    margin-bottom: 5px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  &__author {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #9d9b95;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__price {
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 24px;
    color: #ffa217;
  }

  &__remove-button {
    display: flex;
    margin-left: auto;
    cursor: pointer;
  }
  &__remove-icon {
    margin-right: 4px;
  }
  &__remove-label {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #f44336;
  }
}

@media (max-width: 1024px) {
  .project {
    &__text {
      width: 370px;
    }
  }
}

@media (max-width: 768px) {
  .project {
    &__text {
      width: 370px;
    }
  }
}

@media (max-width: 425px) {
  .project {
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;

    &__link {
      height: 350px;
      width: 100%;
      margin-bottom: 10px;
    }
    &__name {
      margin-bottom: 10px;
    }
    &__author {
      margin-bottom: 10px;
    }
    &__price {
      margin-bottom: 10px;
    }

    &__image {
      height: 50%;
      width: 50%;
    }

    &__text {
      width: 100%;
    }

    &__remove-button {
      margin-left: 0;
    }
  }
}
</style>
