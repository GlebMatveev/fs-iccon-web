<script setup>
// Import
import cart from "@/helpers/js/cart";

// Stores
import { useCartStore } from "@/store/cart";
import { useFilterStore } from "@/store/filter";
import { useProductStore } from "@/store/product";

const cartStore = useCartStore();
const filterStore = useFilterStore();
const productStore = useProductStore();

// Environment Variables
const runtimeConfig = useRuntimeConfig();

// Router parameters
const route = useRoute();

// Router parameters
const router = useRouter();

// Auth data
const basicAuth = {
  Authorization: `Basic ${runtimeConfig.public.basicAuth}`,
};

// Fetch
const { data: products } = await useFetch(
  runtimeConfig.public.apiBase + "/products/" + route.params.id,
  { headers: basicAuth }
);
const product = products.value[0];

const { data: productsByPack } = await useFetch(
  runtimeConfig.public.apiBase + "/products/pack/" + product.pack,
  { headers: basicAuth }
);

// Functions
function calcCurrencyRate(price) {
  return (
    parseFloat(price.replace(/[\s,%]/g, "")) *
    parseFloat(cartStore.currentCurrency.rate)
  ).toFixed(2);
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

// Functions
function applyFilterAndRouterPush(category) {
  filterStore.filters.categories = [category];
  filterStore.filters.skip = 0;
  filterStore.filters.pack = "";
  productStore.getProducts();
  router.push("/catalog/");
}

function addToCart(product) {
  cartStore.cartProducts.push(product);

  cart.addToCart(cartStore.cart, product.id, product.price);
}

function calcAddButtonStatus(id) {
  for (let key in cartStore.cartProducts) {
    if (cartStore.cartProducts[key].id === id) return true;
  }
  return false;
}

// Image placeholder
const imagePlaceholder = "/img/products/placeholder.jpg";
function replaceImgByDefault(e) {
  e.target.src = imagePlaceholder;
}

useHead({
  title: "Iccon | Catalog",
});
</script>

<template>
  <section class="detail">
    <AppCatalogDetailBreadcrumbs :name="product.name" />
    <div class="container">
      <div class="detail__wrapper">
        <div class="detail__image-wrapper">
          <img
            :src="`/img/products/${product.image}`"
            alt=""
            class="detail__image"
            @error="replaceImgByDefault"
          />
        </div>
        <div class="detail__data">
          <div class="detail__data-topbar">
            <h2 class="detail__data-title">
              {{ product.name }}
            </h2>
            <div class="detail__data-buttons">
              <p class="detail__data-price">
                {{ calcCurrencyRate(product.price) }}
                {{ cartStore.currentCurrency.code }}
              </p>
              <UiButtonMain
                :title="$t('static.catalogDetail.button')"
                theme="primary"
                @click="addToCart(product)"
                :class="{
                  disabled: calcAddButtonStatus(product.id),
                }"
              />
            </div>
          </div>
          <div class="detail__data-text">
            <p class="detail__data-text-title">
              {{ $t("static.catalogDetail.license.title") }}
            </p>
            <p class="detail__data-text-description">
              {{ $t("static.catalogDetail.license.description[0]") }}
            </p>
            <p class="detail__data-text-description">
              {{ $t("static.catalogDetail.license.description[1]") }}
            </p>
          </div>
          <div
            class="detail__data-banner"
            @click="applyFilterAndRouterPush('3')"
          >
            <p class="detail__data-banner-title">
              {{ $t("static.catalogDetail.banner.title") }}
            </p>
            <p class="detail__data-banner-description">
              {{ $t("static.catalogDetail.banner.description") }}
            </p>
          </div>
        </div>
      </div>
      <div class="detail__tags">
        <h3 class="detail__tags-title">
          {{ $t("static.catalogDetail.titleTags") }}
        </h3>
        <div class="detail__tags-wrapper">
          <p
            class="detail__tags-item"
            v-for="item in product.keyword.split(',')"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <div class="detail__icons">
        <div class="detail__icons-topbar">
          <h3 class="detail__icons-title">
            {{ $t("static.catalogDetail.icons.title") }}
          </h3>
          <UiButtonMain
            :title="$t('static.catalogDetail.icons.title')"
            theme="secondary"
            to="/catalog"
          />
        </div>
        <div class="detail__icons-wrapper">
          <UiCardProject
            :project="item"
            :currency="cartStore.currentCurrency"
            v-for="item in productsByPack.slice(0, 16)"
          />
        </div>
      </div>
      <div class="detail__cards">
        <h3 class="detail__cards-title">
          {{ $t("static.catalogDetail.categories.title") }}
        </h3>

        <div class="detail__cards-wrapper">
          <div
            class="detail__cards-item"
            @click="applyFilterAndRouterPush('1')"
          >
            <img
              src="/img/static/home/banner-top-01.png"
              alt="Icons"
              class="detail__cards-image"
            />
            <p class="detail__cards-subtitle">
              {{ $t("static.catalogDetail.categories.items[0]") }}
            </p>
          </div>
          <div
            class="detail__cards-item"
            @click="applyFilterAndRouterPush('2')"
          >
            <img
              src="/img/static/home/banner-top-02.png"
              alt="Interface Icons"
              class="detail__cards-image"
            />
            <p class="detail__cards-subtitle">
              {{ $t("static.catalogDetail.categories.items[1]") }}
            </p>
          </div>
          <div
            class="detail__cards-item"
            @click="applyFilterAndRouterPush('3')"
          >
            <img
              src="/img/static/home/banner-top-03.png"
              alt="Stickers"
              class="detail__cards-image"
            />
            <p class="detail__cards-subtitle">
              {{ $t("static.catalogDetail.categories.items[2]") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.detail {
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__image-wrapper {
    width: 700px;
    height: 700px;
    background: #f3f3f3;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    width: 390px;
    height: 390px;
    object-fit: contain;
  }

  &__data {
    width: 490px;

    &-topbar {
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
    }

    &-title {
      font-family: "Merriweather";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 120%;
      letter-spacing: -0.01em;
      color: #353431;
      max-width: 255px;
    }

    &-buttons {
      display: flex;
      gap: 25px;
      align-items: center;
    }

    &-price {
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 120%;
      color: #ffa217;
    }

    &-text {
      &-title {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #353431;
        margin-bottom: 10px;
      }

      &-description {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
        color: #353431;
        margin-bottom: 15px;
        width: 300px;
      }
    }

    &-banner {
      background-image: url("/img/static/catalog-detail/banner.png");
      width: 490px;
      height: 216px;
      border: 2px solid #353431;
      border-radius: 5px;
      padding: 25px;
      cursor: pointer;

      &-title {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 140%;
        color: #353431;
        margin-bottom: 15px;
      }

      &-description {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: #353431;
        max-width: 173px;
      }
    }
  }

  &__tags {
    padding: 15px 0 70px 0;

    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 140%;
      color: #000000;
      margin-bottom: 15px;
    }

    &-wrapper {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    &-item {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 140%;
      color: #353431;
      padding: 10px 20px;
      border: 2px solid #353431;
      border-radius: 5px;
    }
  }

  &__icons {
    &-topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    &-title {
      font-family: "Merriweather";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 140%;
      letter-spacing: -0.01em;
      color: #353431;
    }

    &-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }
  }

  &__cards {
    padding: 70px 0;

    &-title {
      font-family: "Merriweather";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 140%;
      letter-spacing: -0.01em;
      color: #353431;
      margin-bottom: 20px;
      text-align: center;
    }

    &-wrapper {
      display: flex;
      justify-content: space-between;
      width: 714px;
      margin: 0 auto;
      flex-wrap: wrap;
    }

    &-item {
      text-align: center;
      cursor: pointer;
    }

    &-image {
      width: 221px;
      height: 147px;
      object-fit: contain;
      margin-bottom: 10px;
    }

    &-subtitle {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #4f4e4a;
    }
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

@media (max-width: 1024px) {
  .detail {
    &__image-wrapper {
      width: 450px;
      height: 450px;
    }

    &__image {
      width: 50%;
      height: 50%;
    }

    &__icons {
      &-wrapper {
        justify-content: space-between;
      }
    }
  }
}

@media (max-width: 768px) {
  .detail {
    &__image-wrapper {
      width: 250px;
      height: 250px;
    }

    &__data {
      width: 60%;

      &-banner {
        width: 100%;
      }
    }
  }
}

@media (max-width: 425px) {
  .detail {
    &__image-wrapper {
      width: 100%;
      margin-bottom: 30px;
    }

    &__data {
      width: 100%;

      &-banner {
        width: 100%;
      }
    }

    &__icons {
      &-wrapper {
        justify-content: space-between;
      }

      &-title {
        width: 70%;
      }
    }

    &__cards {
      &-wrapper {
        width: 100%;
        justify-content: center;
      }
    }
  }
}
</style>
