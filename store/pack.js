import { defineStore } from "pinia";

export const usePackStore = defineStore("packStore", () => {
  // Environment Variables
  const runtimeConfig = useRuntimeConfig();

  // Auth data
  const basicAuth = {
    Authorization: `Basic ${runtimeConfig.public.basicAuth}`,
  };

  // State
  const packs = ref();

  // Actions
  async function getPacks() {
    await $fetch("/packs", {
      headers: basicAuth,
      method: "GET",
      baseURL: runtimeConfig.public.apiBase,
    }).then(function (response) {
      packs.value = response;
    });
  }

  return { packs, getPacks };
});
