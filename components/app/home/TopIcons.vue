<script setup>
// Stores
import { useFilterStore } from "@/store/filter";
import { useProductStore } from "@/store/product";

const filterStore = useFilterStore();
const productStore = useProductStore();

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

function applyFilterWithPackAndRouterPush(category, pack) {
  filterStore.filters.categories = [category];
  filterStore.filters.pack = pack;
  filterStore.filters.skip = 0;
  productStore.getProducts();
  router.push("/catalog/");
}
</script>

<template>
  <section class="cards">
    <div class="container">
      <div class="cards__top">
        <h2 class="cards__top-title">{{ $t("static.home.topIcons.title") }}</h2>
        <UiButtonMain
          :title="$t('static.home.topIcons.button')"
          theme="secondary"
          @click="applyFilterAndRouterPush('1')"
        />
      </div>
      <div class="cards__items">
        <div
          class="cards__items-card"
          @click="
            applyFilterWithPackAndRouterPush('1', 'Miscellaneous Elements')
          "
        >
          <img
            src="/img/static/home/top-icons-01.png"
            alt="Music icons"
            class="cards__items-image"
          />
          <div class="cards__items-text">
            <h3 class="cards__items-title">
              {{ $t("static.home.topIcons.items[0].title") }}
            </h3>
            <p class="cards__items-subtitle">
              {{ $t("static.home.topIcons.items[0].subtitle") }}
            </p>
          </div>
        </div>
        <div
          class="cards__items-card"
          @click="applyFilterWithPackAndRouterPush('1', 'Home Screen Apps')"
        >
          <img
            src="/img/static/home/top-icons-02.png"
            alt="Electronic Devices"
            class="cards__items-image"
          />
          <div class="cards__items-text">
            <h3 class="cards__items-title">
              {{ $t("static.home.topIcons.items[1].title") }}
            </h3>
            <p class="cards__items-subtitle">
              {{ $t("static.home.topIcons.items[1].subtitle") }}
            </p>
          </div>
        </div>
        <div
          class="cards__items-card"
          @click="applyFilterWithPackAndRouterPush('1', 'Hand drawn arrows')"
        >
          <img
            src="/img/static/home/top-icons-03.png"
            alt="Virtual Reality VR"
            class="cards__items-image"
          />
          <div class="cards__items-text">
            <h3 class="cards__items-title">
              {{ $t("static.home.topIcons.items[2].title") }}
            </h3>
            <p class="cards__items-subtitle">
              {{ $t("static.home.topIcons.items[2].subtitle") }}
            </p>
          </div>
        </div>
        <div
          class="cards__items-card"
          @click="applyFilterWithPackAndRouterPush('1', 'Alphabet and numbers')"
        >
          <img
            src="/img/static/home/top-icons-04.png"
            alt="Supermarket"
            class="cards__items-image"
          />
          <div class="cards__items-text">
            <h3 class="cards__items-title">
              {{ $t("static.home.topIcons.items[3].title") }}
            </h3>
            <p class="cards__items-subtitle">
              {{ $t("static.home.topIcons.items[3].subtitle") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cards {
  padding: 70px 0 50px 0;

  &__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    &-title {
      font-family: "Merriweather";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 140%;
      letter-spacing: -0.01em;
      color: #353431;
    }
  }

  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;

    &-card {
      width: 298px;
      height: 342px;
      border: 2px solid #353431;
      cursor: pointer;
    }
    &-card:hover {
      box-shadow: 5px 5px 0px #363636;

      background-color: #ffa217;
    }
    &-card:hover > div > h3 {
      color: #fff;
    }
    &-card:hover > div > p {
      color: #fff;
    }

    &-image {
      width: 100%;
      height: 247px;
      border-bottom: 2px solid #353431;
      object-fit: cover;
    }

    &-text {
      padding: 20px 15px;
    }

    &-title {
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 140%;
      color: #353431;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    &-subtitle {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      color: #6a6862;
    }
  }
}

@media (max-width: 425px) {
  .cards {
    &__items {
      &-card {
        width: 100%;
      }
    }
  }
}
</style>
