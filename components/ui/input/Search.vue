<script setup>
// Environment Variables
const runtimeConfig = useRuntimeConfig();

// States
const useStateSearchResultsVisibility = useState(
  "stateSearchResultsVisibility"
);

// Auth data
const basicAuth = {
  Authorization: `Basic ${runtimeConfig.public.basicAuth}`,
};

// Variables
const searchWord = ref("");
const searchResult = ref(null);
const searchLoader = ref(false);

// Functions
function searchProducts() {
  searchLoader.value = true;

  $fetch("/products/search", {
    headers: basicAuth,
    method: "POST",
    baseURL: runtimeConfig.public.apiBase,
    body: { word: searchWord.value },
  }).then(function (response) {
    searchResult.value = response;
    searchLoader.value = false;
  });
}

function startSearch() {
  searchProducts();
  useStateSearchResultsVisibility.value = true;
}

function stopSearch() {
  useStateSearchResultsVisibility.value = false;
  searchWord.value = "";
}
</script>

<template>
  <div class="search">
    <UiInputMain
      class="search__input"
      theme="search"
      width="100%"
      height="56px"
      border-radius="5px"
      :placeholder="$t('search.placeholder')"
      v-model="searchWord"
    />
    <UiButtonMain
      class="search__button"
      theme="search"
      width="56px"
      height="56px"
      padding="0"
      border-radius="0 5px 5px 0"
      icon-name="SearchZoom"
      icon-size="24"
      @click.stop="startSearch()"
      :loader="searchLoader"
      loader-path="/img/static/loader.gif"
    />
    <div
      class="search__result"
      v-if="searchResult && useStateSearchResultsVisibility"
    >
      <div
        v-if="searchResult && searchResult.length > 0"
        class="search__result-wrapper"
      >
        <NuxtLink
          class="search__result-item"
          v-if="searchResult"
          v-for="item in searchResult.slice(0, 10)"
          :to="`/catalog/${item.id}`"
          @click="stopSearch()"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <h2
        v-else
        class="search__result-notfound"
      >
        {{ $t("search.noresult") }}
      </h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  position: relative;

  &__button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0%, -50%);
  }

  &__result {
    position: absolute;
    top: 56px;
    width: 100%;
    min-height: 150px;
    background-color: #fff;

    border: 2px solid #f3f3f3;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    z-index: 13;

    &-wrapper {
      display: flex;
      flex-direction: column;
    }
    &-notfound {
      display: flex;
      justify-content: center;
    }

    &-item {
      color: #313235;
      padding: 10px 20px;
      cursor: pointer;
    }
    &-item:hover {
      background-color: #f3f3f3;
      color: #ffa217;
    }
  }
}
</style>
