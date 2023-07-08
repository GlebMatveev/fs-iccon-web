<script setup>
// Stores
import { useCartStore } from "@/store/cart";

const cartStore = useCartStore();

// Environment Variables
const runtimeConfig = useRuntimeConfig();

// Auth data
const basicAuth = {
  Authorization: `Basic ${runtimeConfig.public.basicAuth}`,
};

// Fetch
const { data: products } = await useFetch(
  runtimeConfig.public.apiBase + "/products/user/" + localStorage.userId,
  { headers: basicAuth }
);

const { data: users } = await useFetch(
  runtimeConfig.public.apiBase + "/users/" + localStorage.userId,
  { headers: basicAuth }
);
const user = users.value[0];

// Image placeholder
const imagePlaceholder = "/img/products/placeholder.jpg";
function replaceImgByDefault(e) {
  e.target.src = imagePlaceholder;
}

useHead({
  title: "Iccon | Projects",
});
</script>

<template>
  <section class="projects">
    <div class="container">
      <div class="projects__wrapper">
        <div class="projects__sidebar">
          <div class="projects__sidebar-avatar">
            <img class="projects__sidebar-image" />
            <div class="projects__sidebar-label"></div>
          </div>
          <h2 class="projects__sidebar-name">
            {{ user.name }} {{ user.surname }}
          </h2>
          <p class="projects__sidebar-description">
            {{ user.description }}
          </p>
        </div>
        <div class="projects__content">
          <img
            src="/img/static/projects/top-banner.png"
            alt=""
            class="projects__content-image"
          />
          <div class="projects__content-topbar">
            <h2 class="projects__content-title">
              {{ $t("static.projects.title") }}
            </h2>
            <UiButtonMain
              :title="$t('static.projects.buttonAdd')"
              theme="primary"
              to="/profile/add-project"
              v-if="products.length > 0"
            />
          </div>

          <div class="projects__content-cards">
            <UiCardProject
              v-for="item in products"
              :project="item"
              :currency="cartStore.currentCurrency"
              v-if="products.length > 0"
            />
            <div
              class="projects__content-noprojects"
              v-if="products.length <= 0"
            >
              <img
                class="projects__content-noprojects-image"
                src="/img/static/profile/projects/noprojects.png"
                alt=""
              />
              <p class="projects__content-noprojects-description">
                {{ $t("static.projects.noprojectsDescription") }}
              </p>
              <UiButtonMain
                class="projects__content-noprojects-button"
                theme="primary"
                :title="$t('static.projects.buttonAdd')"
                to="/profile/add-project"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  padding: 20px 0 70px 0;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__sidebar {
    width: 158px;

    &-image {
      width: 80px;
      height: 80px;
      border: 2px solid #353431;
      border-radius: 100px;
      object-fit: contain;
      margin-bottom: 20px;
    }
    &-name {
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 27px;
      color: #353431;
      margin-bottom: 5px;
    }
    &-description {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 135%;
      color: #9d9b95;
    }
  }

  &__content {
    width: 1022px;

    &-image {
      width: 1022px;
      height: 200px;
      border: 2px solid #353431;
      border-radius: 5px;
      object-fit: cover;
      margin-bottom: 25px;
    }

    &-topbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px;
    }

    &-title {
      font-style: normal;
      font-weight: 800;
      font-size: 32px;
      line-height: 44px;
      color: #404145;
    }

    &-items {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 15px;
    }
    &-item {
      width: 157px;
      height: 157px;

      border: 1.90338px solid #f3f3f3;
      border-radius: 4.75845px;
    }

    &-cards {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 140px;
      gap: 20px;
    }

    &-noprojects {
      height: 519px;
      width: 100%;
      text-align: center;

      &-image {
        width: 80px;
        height: 80px;
        margin-top: 100px;
        margin-bottom: 10px;
      }
      &-description {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 135%;
        color: #62646a;
        margin-bottom: 35px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .projects {
    &__sidebar {
      margin-bottom: 20px;
    }

    &__content {
      width: 100%;
      &-image {
        width: 100%;
      }
    }
  }
}
</style>
