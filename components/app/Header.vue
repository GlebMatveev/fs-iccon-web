<script setup>
// Stores
import { usePopupStore } from "@/store/popup";
import { useFilterStore } from "@/store/filter";
import { useCartStore } from "@/store/cart";
import { useProductStore } from "@/store/product";

const popupStore = usePopupStore();
const filterStore = useFilterStore();
const cartStore = useCartStore();
const productStore = useProductStore();

// Environment Variables
const runtimeConfig = useRuntimeConfig();

// Router parameters
const router = useRouter();

// States
const useStateToRouteAfterAuth = useState("stateToRouteAfterAuth", () => "");

function applyFilterAndRouterPush(category) {
  filterStore.filters.categories = [category];
  filterStore.filters.skip = 0;
  filterStore.filters.pack = "";
  productStore.getProducts();
  router.push("/catalog/");
}

function clearFilterAndRouterPush() {
  filterStore.filters.categories = [];
  filterStore.filters.skip = 0;
  filterStore.filters.pack = "";
  productStore.getProducts();
  router.push("/catalog/");
}

function showPopupSignIn() {
  popupStore.popupSignUp = false;
  popupStore.popupSignIn = true;
}

function checkAuth(to) {
  useStateToRouteAfterAuth.value = to;
  // если нет данных авторизации
  if (!localStorage.userId || !localStorage.userToken) {
    showPopupSignIn();
    // если есть данные авторизации
  } else if (localStorage.userId && localStorage.userToken) {
    let checkToken = {
      userId: localStorage.userId,
      userToken: localStorage.userToken,
    };

    $fetch("/auth/token", {
      method: "POST",
      baseURL: runtimeConfig.public.apiBase,
      body: checkToken,
    })
      .then((response) => {
        // code = 0 - истёк срок жизни токена
        // code = 1 - токен актуален
        if (response.code == 0) {
          showPopupSignIn();
        } else if (response.code == 1) {
          router.push(useStateToRouteAfterAuth.value);
        }
      })
      .catch((error) => {
        console.log(error);
        showPopupSignIn();
      });
  }
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__topbar">
        <NuxtLink
          class="header__logo-link"
          to="/"
        >
          <img
            class="header__logo"
            src="/img/static/logo.png"
            alt="Logo"
          />
        </NuxtLink>

        <ul class="header__categories">
          <li
            class="header__categories-item"
            @click="clearFilterAndRouterPush()"
          >
            <p>{{ $t("header.categories[0]") }}</p>
          </li>
          <li
            class="header__categories-item"
            @click="applyFilterAndRouterPush('1')"
          >
            <p>{{ $t("header.categories[1]") }}</p>
          </li>
          <li
            class="header__categories-item"
            @click="applyFilterAndRouterPush('2')"
          >
            <p>{{ $t("header.categories[2]") }}</p>
          </li>
          <li
            class="header__categories-item"
            @click="applyFilterAndRouterPush('3')"
          >
            <p>{{ $t("header.categories[3]") }}</p>
          </li>
        </ul>

        <div class="header__links">
          <UiSelectLangSwitcher />
          <UiSelectCurrencySwitcher />

          <div class="header__links-delimiter"></div>

          <div
            class="header__links-cart"
            @click="checkAuth('/cart')"
          >
            <p>{{ $t("header.buttons[0]") }}</p>
            <div
              class="header__links-cart-dot"
              v-if="cartStore.cartProducts.length > 0"
            ></div>
          </div>

          <p
            class="header__links-item"
            @click="checkAuth('/profile/projects')"
          >
            {{ $t("header.buttons[1]") }}
          </p>

          <p
            class="header__links-item"
            @click="popupStore.popupSignIn = true"
          >
            {{ $t("header.buttons[2]") }}
          </p>

          <UiButtonMain
            theme="secondary"
            :title="$t('header.buttons[3]')"
            padding="10px 25px"
            @click="popupStore.popupSignUp = true"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  &__topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 84px;
    flex-wrap: wrap;
  }

  &__categories {
    display: flex;
    gap: 25px;

    &-item {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: #000000;
      cursor: pointer;
    }
    &-item:hover {
      color: #ffa217;
    }
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 20px;

    &-item {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      color: #000000;
      cursor: pointer;
    }

    &-cart {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      color: #000000;
      cursor: pointer;
      position: relative;

      &-dot {
        position: absolute;
        width: 9px;
        height: 9px;
        right: -8px;
        top: 1px;
        background-color: #ffa217;
        border: 1.5px solid #000000;
        border-radius: 50px;
      }
    }

    &-delimiter {
      width: 20px;
      height: 0px;
      border: 1px solid #353431;
      transform: rotate(90deg);
    }
  }
}

@media (max-width: 768px) {
  .header {
    &__categories {
      display: none;
    }
  }
}

@media (max-width: 425px) {
  .header {
    &__topbar {
      padding: 10px 0;
      gap: 15px;
    }

    &__links {
      gap: 15px;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
}
</style>
