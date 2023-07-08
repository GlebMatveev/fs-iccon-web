<script setup>
// Stores
import { useProductStore } from "@/store/product";
import { useFilterStore } from "@/store/filter";

const productStore = useProductStore();
const filterStore = useFilterStore();

// Router parameters
const router = useRouter();

// Functions
function applyFilterAndRouterPush(category) {
  filterStore.filters.categories = [category];
  filterStore.filters.skip = 0;
  filterStore.filters.pack = "";
  productStore.getProducts();
  router.push("/catalog/");
}
</script>

<template>
  <section class="banner">
    <div class="container">
      <div class="banner__wrapper">
        <div class="banner__text">
          <h1 class="banner__text-title">
            {{ $t("static.home.bannerTop.textTitle") }}
          </h1>
          <p class="banner__text-description">
            {{ $t("static.home.bannerTop.textDescription") }}
          </p>
        </div>
        <div class="banner__nav">
          <div class="banner__search">
            <UiInputSearch />
            <p class="banner__search-label">
              {{ $t("static.home.bannerTop.searchLabel[0]")
              }}<b>{{ $t("static.home.bannerTop.searchLabel[1]") }}</b>
            </p>
          </div>
          <div class="banner__cards">
            <div
              class="banner__cards-item"
              @click="applyFilterAndRouterPush('1')"
            >
              <img
                src="/img/static/home/banner-top-01.png"
                alt="Icons"
                class="banner__cards-image"
              />
              <p class="banner__cards-title">
                {{ $t("static.home.bannerTop.categories[0]") }}
              </p>
            </div>
            <div
              class="banner__cards-item"
              @click="applyFilterAndRouterPush('2')"
            >
              <img
                src="/img/static/home/banner-top-02.png"
                alt="Interface Icons"
                class="banner__cards-image"
              />
              <p class="banner__cards-title">
                {{ $t("static.home.bannerTop.categories[1]") }}
              </p>
            </div>
            <div
              class="banner__cards-item"
              @click="applyFilterAndRouterPush('3')"
            >
              <img
                src="/img/static/home/banner-top-03.png"
                alt="Stickers"
                class="banner__cards-image"
              />
              <p class="banner__cards-title">
                {{ $t("static.home.bannerTop.categories[2]") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  background-color: #fcf4e8;
  padding: 100px 0;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__text {
    max-width: 427px;

    &-title {
      font-family: "Merriweather";
      font-style: normal;
      font-weight: 700;
      font-size: 56px;
      line-height: 120%;
      letter-spacing: -0.01em;
      color: #353431;
      margin-bottom: 20px;
    }
    &-description {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 140%;
      color: #4f4e4a;
    }
  }

  &__nav {
    width: 713px;
  }

  &__search {
    &-label {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #4f4e4a;
      margin: 15px 0 40px 0;
    }
  }

  &__cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

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
    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #4f4e4a;
    }
  }
}

@media (max-width: 1024px) {
  .banner {
    &__text {
      margin-bottom: 50px;
    }
  }
}

@media (max-width: 425px) {
  .banner {
    &__text {
      text-align: center;
    }
    &__search {
      &-label {
        text-align: center;
      }
    }
    &__cards {
      gap: 10px;
      justify-content: center;
    }
  }
}
</style>
