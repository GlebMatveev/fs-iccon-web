import { defineStore } from "pinia";

export const usePopupStore = defineStore("popupStore", () => {
  // Popup
  const popupSignIn = ref(false);
  const popupSignUp = ref(false);
  const popupSuccess = ref(false);
  const popupTransactionFailed = ref(false);

  return {
    popupSignIn,
    popupSignUp,
    popupSuccess,
    popupTransactionFailed,
  };
});
