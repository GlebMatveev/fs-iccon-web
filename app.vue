<script setup>
// Pinia stores
import { useProductStore } from "@/store/product";
import { usePackStore } from "@/store/pack";
import { usePopupStore } from "@/store/popup";

const productStore = useProductStore();
const packStore = usePackStore();
const popupStore = usePopupStore();

// Nuxt states
const useStateToRouteAfterAuth = useState("stateToRouteAfterAuth", () => "");
const useStateSearchResultsVisibility = useState(
  "stateSearchResultsVisibility",
  () => false
);

// Hooks
onMounted(() => {
  productStore.getProducts();
  packStore.getPacks();
});

// Functions
function showPopupSignIn() {
  popupStore.popupSignIn = true;
  popupStore.popupSignUp = false;
}

function showPopupSignUp() {
  popupStore.popupSignIn = false;
  popupStore.popupSignUp = true;
}
</script>

<template>
  <div
    class="root"
    @click="useStateSearchResultsVisibility = false"
  >
    <AppHeader />

    <main class="main">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </main>

    <AppFooter />

    <!-- POPUP -->
    <UiPopupSignIn
      :show="popupStore.popupSignIn"
      @close="popupStore.popupSignIn = false"
      @to-sign-up="showPopupSignUp()"
    />
    <UiPopupSignUp
      :show="popupStore.popupSignUp"
      @close="popupStore.popupSignUp = false"
      @to-sign-in="showPopupSignIn()"
    />
    <UiPopupSuccess
      :show="popupStore.popupSuccess"
      @close="popupStore.popupSuccess = false"
    />
    <UiPopupTransactionFailed
      :show="popupStore.popupTransactionFailed"
      @close="popupStore.popupTransactionFailed = false"
    />
  </div>
</template>

<style lang="scss">
.main {
  flex-grow: 1;
  min-height: 700px;
}
</style>
