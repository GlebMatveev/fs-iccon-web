<script setup>
// Stores
import { usePopupStore } from "@/store/popup";
const popupStore = usePopupStore();

// Environment Variables
const runtimeConfig = useRuntimeConfig();

// Auth data
const basicAuth = {
  Authorization: `Basic ${runtimeConfig.public.basicAuth}`,
};

// Variables
const request = reactive({
  user_id: localStorage.userId,
  email: "",
  subject: "",
  description: "",
});

// Functions
function postRequest(request) {
  $fetch("/requests", {
    headers: basicAuth,
    method: "POST",
    baseURL: runtimeConfig.public.apiBase,
    body: request,
  }).then(function () {
    popupStore.popupSuccess = true;
    request.email = "";
    request.subject = "";
    request.description = "";
  });
}

// Computed
const areAllFiledsFilled = computed(() => {
  if (
    request.email !== "" &&
    request.subject !== "" &&
    request.description !== ""
  ) {
    return true;
  } else {
    return false;
  }
});
</script>

<template>
  <section class="form">
    <div class="container">
      <div class="form__wrapper">
        <h2 class="form__title">{{ $t("static.support.form.title") }}</h2>
        <UiInputMain
          class="form__input"
          :placeholder="$t('static.support.form.input1')"
          theme="primary"
          width="100%"
          v-model="request.email"
        />
        <UiInputMain
          class="form__input"
          :placeholder="$t('static.support.form.input2')"
          theme="primary"
          width="100%"
          v-model="request.subject"
        />
        <p class="form__label">
          {{ $t("static.support.form.description1") }}
        </p>
        <UiTextareaMain
          class="form__textarea"
          :placeholder="$t('static.support.form.textarea')"
          theme="primary"
          width="100%"
          rows="5"
          v-model="request.description"
        />
        <p class="form__label">
          {{ $t("static.support.form.description2") }}
        </p>
        <p class="form__label">
          {{ $t("static.support.form.description3") }}
        </p>
        <UiButtonMain
          :title="$t('static.support.form.button')"
          theme="primary"
          :class="{
            disabled: !areAllFiledsFilled,
          }"
          @click="postRequest(request)"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.form {
  padding: 70px 0;

  &__wrapper {
    width: 661px;
  }

  &__title {
    font-family: "Merriweather";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 140%;
    letter-spacing: -0.01em;
    color: #353431;
    margin-bottom: 20px;
  }

  &__input {
    margin-bottom: 15px;
  }

  &__textarea {
    margin-bottom: 15px;
  }

  &__label {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    color: #9d9b95;
    margin-bottom: 15px;
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

@media (max-width: 768px) {
  .form {
    &__wrapper {
      width: 100%;
    }
  }
}
</style>
