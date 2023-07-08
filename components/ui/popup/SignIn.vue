<script setup>
// Stores
import { usePopupStore } from "@/store/popup";
const popupStore = usePopupStore();

// Props
const props = defineProps({
  show: Boolean,
});

// Emits
const emit = defineEmits(["close", "to-sign-up"]);

// Environment Variables
const runtimeConfig = useRuntimeConfig();

// Auth data
const basicAuth = {
  Authorization: `Basic ${runtimeConfig.public.basicAuth}`,
};

// Router parameters
const router = useRouter();

// States
const useStateToRouteAfterAuth = useState("stateToRouteAfterAuth");

// I18n
const { t } = useI18n();
const errorMsg1 = computed(() => {
  return t("popupSignIn.errors[0]");
});
const errorMsg2 = computed(() => {
  return t("popupSignIn.errors[1]");
});

// Variables
const user = reactive({
  email: "",
  password: "",
});
let errorMessage = ref("");

// Functions
function loginUser(user) {
  $fetch("/auth/signin", {
    headers: basicAuth,
    method: "POST",
    baseURL: runtimeConfig.public.apiBase,
    body: user,
  }).then(function (response) {
    // user_auth = 0 - user is not found
    // user_auth = 1 - wrong password
    // user_auth = 2 - user found
    if (response.user_auth === 0) {
      //
      errorMessage.value = errorMsg1;
    } else if (response.user_auth === 1) {
      //
      errorMessage.value = errorMsg2;
    } else if (response.user_auth === 2) {
      //
      localStorage.setItem("userId", response.user_id);
      localStorage.setItem("userToken", response.user_token);
      user.email = "";
      user.password = "";
      closePopupSignIn();
      router.push(useStateToRouteAfterAuth.value);
    }
  });
}

function closePopupSignIn() {
  popupStore.popupSignIn = false;
}

// Computed
const areAllFiledsFilled = computed(() => {
  if (user.email !== "" && user.password !== "") {
    return true;
  } else {
    return false;
  }
});
</script>

<template>
  <div
    v-if="show"
    class="modal__overlay"
  >
    <div class="modal">
      <div class="modal__form">
        <h2 class="modal__title">{{ $t("popupSignIn.title") }}</h2>
        <p class="modal__description">
          {{ $t("popupSignIn.description") }}
          <span
            class="modal__description-span"
            @click="emit('to-sign-up')"
          >
            {{ $t("popupSignIn.link") }}
          </span>
        </p>

        <UiInputMain
          class="modal__input"
          type="text"
          theme="primary"
          :placeholder="$t('popupSignIn.placeholders[0]')"
          v-model="user.email"
        />
        <UiInputMain
          class="modal__input"
          type="password"
          theme="primary"
          :placeholder="$t('popupSignIn.placeholders[1]')"
          v-model="user.password"
        />

        <UiButtonMain
          class="modal__button"
          theme="primary"
          width="100%"
          :title="$t('popupSignIn.button')"
          :class="{
            disabled: !areAllFiledsFilled,
          }"
          @click="loginUser(user)"
        />

        <p class="modal__error">{{ errorMessage }}</p>
      </div>
    </div>

    <Icon
      class="modal__close-button"
      @click="emit('close')"
      name="PopupClose"
      size="40"
    />
  </div>
</template>

<style lang="scss" scoped>
.modal {
  background-color: #fff;
  width: 548px;
  height: 416px;
  padding: 30px;
  background: #ffffff;
  border: 1.5px solid #353431;
  border-radius: 5px;
  margin-top: 5%;

  &__form {
    display: flex;
    flex-direction: column;
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

  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #313235;
    margin-bottom: 30px;
  }
  &__description-span {
    color: #ffa217;
    cursor: pointer;
  }

  &__input {
    margin-bottom: 12px;
  }

  &__checkbox-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }

  &__checkbox {
    margin-right: 14px;
    cursor: pointer;
  }

  &__checkbox-label {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }

  &__button {
    margin-bottom: 10px;
  }

  &__error {
    font-size: 14px;
    color: #fd2222;
  }

  &__overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(6px);
    z-index: 5;
  }

  &__close-button {
    margin: 7% 0 0 -60px;
    cursor: pointer;
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

@media (max-width: 425px) {
  .modal {
    width: 90%;

    &__overlay {
      left: -20px;
    }
  }
}
</style>
