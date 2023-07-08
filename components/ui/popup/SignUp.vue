<script setup>
// Stores
import { usePopupStore } from "@/store/popup";
const popupStore = usePopupStore();

// Props
const props = defineProps({
  show: Boolean,
});

// Emits
const emit = defineEmits(["close", "to-sign-in"]);

// Environment Variables
const runtimeConfig = useRuntimeConfig();

// Auth data
const basicAuth = {
  Authorization: `Basic ${runtimeConfig.public.basicAuth}`,
};

// I18n
const { t } = useI18n();
const errorMsg = computed(() => {
  return t("popupSignUp.error");
});

// Functions
function signupUser(user) {
  $fetch("/auth/signup", {
    headers: basicAuth,
    method: "POST",
    baseURL: runtimeConfig.public.apiBase,
    body: user,
  }).then(function (response) {
    // response.user_adding = true - user successfully registered
    // response.user_adding = false - user already exists
    if (response.user_adding === true) {
      showPopupSignIn();
    } else if (response.user_adding === false) {
      errorMessage.value = errorMsg;
    }
  });
}

function showPopupSignIn() {
  popupStore.popupSignUp = false;
  popupStore.popupSignIn = true;
}

// Computed
const areAllFiledsFilled = computed(() => {
  if (
    user.image !== "" &&
    user.name !== "" &&
    user.surname !== "" &&
    user.description !== "" &&
    user.email !== "" &&
    user.password !== "" &&
    user.password_repeat !== "" &&
    user.password === user.password_repeat &&
    user.privacy == true
  ) {
    return true;
  } else {
    return false;
  }
});

// Image loading
const inputFile = ref(null);
let imageFile = ref(null);
let imageUrl = ref("/img/static/signup/placeholder.png");

const onImageChange = (event) => {
  inputFile.value = "";
  imageFile.value = event.target.files[0];

  const reader = new FileReader();

  reader.onload = (event) => {
    imageUrl.value = event.target.result;
    user.image = event.target.result;
  };
  reader.readAsDataURL(imageFile.value);
};

function deleteImage() {
  user.image = "";
  inputFile.value = "";
  imageFile.value = null;
  imageUrl.value = "/img/static/signup/placeholder.png";
}

// Variables
const user = reactive({
  image: "",
  name: "",
  surname: "",
  description: "",
  email: "",
  password: "",
  password_repeat: "",
  privacy: false,
});
let errorMessage = ref("");
</script>

<template>
  <div
    v-if="show"
    class="modal__overlay"
  >
    <div class="modal">
      <div class="modal__form">
        <h2 class="modal__title">{{ $t("popupSignUp.title") }}</h2>
        <p class="modal__description">
          {{ $t("popupSignUp.description") }}
          <span
            class="modal__description-span"
            @click="emit('to-sign-in')"
          >
            {{ $t("popupSignUp.link") }}
          </span>
        </p>

        <div class="modal__photo-wrapper">
          <img
            class="modal__photo-placeholder"
            :src="imageUrl"
          />
          <label
            class="modal__file-label"
            for="modal__file-upload"
          >
            {{ $t("popupSignUp.buttonPhotoAdd") }}
          </label>
          <input
            class="modal__file-input"
            id="modal__file-upload"
            type="file"
            ref="inputFile"
            @change="onImageChange"
          />

          <UiButtonMain
            class="modal__delete-button"
            theme="error"
            :title="$t('popupSignUp.buttonPhotoDelete')"
            width="110px"
            border-radius=""
            padding="0"
            height="36px"
            v-if="imageFile"
            @click="deleteImage"
          />
        </div>

        <div class="modal__input-wrapper">
          <UiInputMain
            class="modal__input"
            type="text"
            theme="primary"
            :placeholder="$t('popupSignUp.placeholders[0]')"
            v-model="user.name"
          />
          <UiInputMain
            class="modal__input"
            type="text"
            theme="primary"
            :placeholder="$t('popupSignUp.placeholders[1]')"
            v-model="user.surname"
          />
        </div>
        <UiInputMain
          class="modal__input"
          type="text"
          theme="primary"
          :placeholder="$t('popupSignUp.placeholders[2]')"
          v-model="user.description"
        />
        <UiInputMain
          class="modal__input"
          type="email"
          theme="primary"
          :placeholder="$t('popupSignUp.placeholders[3]')"
          v-model="user.email"
        />

        <UiInputMain
          class="modal__input"
          type="password"
          theme="primary"
          :placeholder="$t('popupSignUp.placeholders[4]')"
          v-model="user.password"
        />
        <UiInputMain
          class="modal__input"
          type="password"
          theme="primary"
          :placeholder="$t('popupSignUp.placeholders[5]')"
          v-model="user.password_repeat"
        />
        <div class="modal__checkbox-wrapper">
          <input
            class="modal__checkbox"
            type="checkbox"
            v-model="user.privacy"
          />
          <p class="modal__checkbox-label">{{ $t("popupSignUp.label") }}</p>
        </div>

        <UiButtonMain
          class="modal__button"
          theme="primary"
          width="100%"
          :title="$t('popupSignUp.buttonCreate')"
          :class="{
            disabled: !areAllFiledsFilled,
          }"
          @click="signupUser(user)"
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
  height: 815px;
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

  &__photo-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
  }

  &__photo-placeholder {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    object-fit: cover;
  }

  &__file-label {
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 120%;
    color: #353431;
    border: 2px solid #353431;
    border-radius: 5px;
    width: 160px;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }

  input[type="file"] {
    display: none;
  }

  &__input-wrapper {
    display: flex;
    gap: 12px;
  }

  &__input {
    width: 100%;
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

  &__error {
    color: #fd2222;
    margin-top: 10px;
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
