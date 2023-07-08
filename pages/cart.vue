<script setup>
// Import
import cart from "@/helpers/js/cart";

// Stores
import { usePopupStore } from "@/store/popup";
import { useCartStore } from "@/store/cart";

const popupStore = usePopupStore();
const cartStore = useCartStore();

// Environment Variables
const runtimeConfig = useRuntimeConfig();

// Middleware
definePageMeta({
  middleware: "auth",
});

const { data: users } = await useFetch(
  runtimeConfig.public.apiBase + "/users/" + localStorage.userId
);
const user = users.value[0];

// Watchers
watch(
  cartStore.cartProducts,
  () => {
    cartStore.cartQuantity = cart.calcCartQuantity(cartStore.cart);
    cartStore.cartPrice = cart.calcCartPrice(cartStore.cart);
  },
  { deep: true }
);

// Variables
const loader = ref(false);

// Functions
function calcCurrencyRate(price) {
  return (
    parseFloat(price) * parseFloat(cartStore.currentCurrency.rate)
  ).toFixed(2);
}

const order = reactive({
  userId: "",
  userEmail: "",
  products: "",
  order: {
    description: `Order by user #${user.id} (${user.email})`,
    successUrl: runtimeConfig.public.domain,
    declineUrl: runtimeConfig.public.domain,
    customer: {
      accountId: user.id,
      email: user.email,
    },
    amount: {
      value: "",
      currency: "",
    },
  },
});

function checkout() {
  loader.value = true;
  setTimeout(() => {
    loader.value = false;
  }, "1000");

  order.userId = user.id;
  order.userEmail = user.email;
  order.userFullName = user.name + " " + user.surname;
  order.cart = cartStore.cartProducts;
  order.quantity = cartStore.cartQuantity;
  order.total = cartStore.cartPrice;
  order.order.amount.value = cartStore.cartPrice;
  order.order.amount.currency = cartStore.currentCurrency.code;

  $fetch("/orders", {
    method: "POST",
    baseURL: runtimeConfig.public.apiBase,
    body: JSON.stringify(order),
  }).then(function (response) {
    // user_auth = 0 - success
    // user_auth = 1 - error
    if (response.code === 1) {
      // error
      popupStore.popupTransactionFailed = true;
    } else if (response.code === 0) {
      // redirect
      window.location.href = response.payload.object.payUrl;
    }
  });
}

useHead({
  title: "Piccon | Cart",
});
</script>

<template>
  <section class="cart">
    <div class="container">
      <div class="cart__wrapper">
        <div class="cart__sidebar">
          <div class="cart__payment">
            <h3 class="cart__payment-title">
              {{ $t("static.cart.formTitle") }}
            </h3>

            <div class="cart__payment-total">
              <p class="cart__payment-total-text">
                {{ $t("static.cart.total") }}
              </p>
              <p class="cart__payment-total-sum">
                {{ calcCurrencyRate(cartStore.cartPrice) }}
                {{ cartStore.currentCurrency.code }}
              </p>
            </div>
            <UiButtonMain
              class="cart__payment-button"
              :class="{ disabled: cartStore.cartPrice <= 0 }"
              :title="$t('static.cart.button')"
              theme="primary"
              width="100%"
              height="62px"
              padding="0"
              :loader="loader"
              loader-path="/img/static/loader.gif"
              @click="checkout()"
            />
            <p class="cart__payment-checkout-text">
              {{ $t("static.cart.checkout") }}
            </p>

            <img
              class="cart__payment-checkout-icons"
              src="/img/static/cart/payment.png"
              alt=""
            />
          </div>
        </div>
        <div class="cart__content">
          <h2 class="cart__title">{{ $t("static.cart.title") }}</h2>
          <div class="cart__cards">
            <UiCardProjectHorizontal
              class="cart__cards-item"
              v-for="item in cartStore.cartProducts"
              :project="item"
              :currency="cartStore.currentCurrency"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cart {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 100px;
    row-gap: 30px;
  }

  &__content {
    width: 831px;
  }
  &__title {
    font-family: "Merriweather";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 140%;
    letter-spacing: -0.01em;
    color: #353431;
    margin-bottom: 25px;
  }

  &__cards-item {
    border-bottom: 1px solid #e6e6e6;
  }
  &__cards-item:last-child {
    border-bottom: none;
  }

  &__sidebar {
    width: 347px;
  }

  &__payment {
    border: 2px solid #353431;
    box-shadow: 5px 5px 0px #363636;
    border-radius: 5px;
    padding: 25px;

    &-title {
      font-style: normal;
      font-weight: 800;
      font-size: 32px;
      line-height: 44px;
      color: #404145;
      margin-bottom: 20px;
    }

    &-input {
      width: 100%;
      margin-bottom: 15px;
    }

    &-inputs {
      display: flex;
      gap: 15px;
    }

    &-total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 5px 0 20px 0;

      &-text {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #808080;
      }
      &-sum {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 33px;
        color: #ffa217;
      }
    }

    &-button {
      width: 100%;
      margin-bottom: 15px;
      height: 60px;
    }

    &-checkout-text {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 32px;
      text-align: center;
      color: #9d9b95;
      margin-bottom: 4px;
    }
    &-checkout-icons {
      display: block;
      margin: 0 auto;
    }
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

@media (max-width: 768px) {
  .cart {
    &__wrapper {
      flex-wrap: wrap;
    }

    &__content {
      width: 100%;
    }

    &__sidebar {
      width: 100%;
    }
  }
}

@media (max-width: 425px) {
  .cart {
    &__wrapper {
      flex-wrap: wrap;
    }

    &__content {
      width: 100%;
    }

    &__sidebar {
      width: 100%;
    }

    &__cards {
      &-item {
        text-align: center;
      }
    }
  }
}
</style>
