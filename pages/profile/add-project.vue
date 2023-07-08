<script setup>
// Environment Variables
const runtimeConfig = useRuntimeConfig();

// Router parameters
const router = useRouter();

// Image loading
let imageFile = ref(null);
let imageUrl = ref("/img/static/profile/add-project/placeholder.png");
let arrImageUrl = ref([]);

const onImageChange = (event) => {
  imageFile.value = event.target.files[0];

  const reader = new FileReader();

  reader.onload = (event) => {
    arrImageUrl.value.push(event.target.result);
  };
  reader.readAsDataURL(imageFile.value);
};

// Functions
function postAsset(asset) {
  asset.user_id = localStorage.userId;

  $fetch("/products/add", {
    method: "POST",
    baseURL: runtimeConfig.public.apiBase,
    body: asset,
  }).then(function () {
    asset.name = "";
    asset.price = "";
    asset.developer = "";
    asset.images = [];
    asset.description = "";
    asset.keyword = "";
    asset.category_id = "";
    router.push("/profile/projects");
  });
}

const asset = reactive({
  name: "",
  price: "",
  developer: "",
  images: arrImageUrl.value,
  pack: "",
  keyword: "",
  category_id: "",
  user_id: localStorage.userId,
});

// Computed
const areAllFiledsFilled = computed(() => {
  if (
    asset.name !== "" &&
    asset.price !== "" &&
    asset.developer !== "" &&
    asset.pack !== "" &&
    asset.category_id !== ""
  ) {
    return true;
  } else {
    return false;
  }
});

useHead({
  title: "Piccon | Add Project",
});
</script>

<template>
  <div class="projects">
    <div class="container">
      <div class="projects__wrapper">
        <div class="projects__sidebar">
          <div class="projects__images">
            <h3 class="projects__images-title">
              {{ $t("static.addProject.imagesTitle") }}
            </h3>
            <p class="projects__images-description">
              {{ $t("static.addProject.imagesDescription") }}
            </p>
            <!-- <div class="projects__images-upload" v-if="arrImageUrl.length < 5"> -->
            <div
              class="projects__images-upload"
              v-if="arrImageUrl.length < 1"
            >
              <label for="projects__images-file">
                <img
                  class="projects__images-placeholder"
                  :src="imageUrl"
                />
              </label>

              <input
                id="projects__images-file"
                type="file"
                accept="image/png, image/jpeg"
                @change="onImageChange"
              />
            </div>
            <img
              class="projects__images-uploaded"
              :src="item"
              v-for="item in arrImageUrl"
            />
          </div>
        </div>
        <div class="projects__content">
          <h2 class="projects__title">{{ $t("static.addProject.title") }}</h2>
          <UiInputMain
            class="projects__input"
            theme="primary"
            :placeholder="$t('static.addProject.placeholders[0]')"
            type="text"
            v-model="asset.name"
          />
          <UiInputMain
            class="projects__input"
            theme="primary"
            :placeholder="$t('static.addProject.placeholders[1]')"
            type="number"
            v-model="asset.price"
          />
          <UiInputMain
            class="projects__input"
            theme="primary"
            :placeholder="$t('static.addProject.placeholders[2]')"
            type="text"
            v-model="asset.developer"
          />
          <UiInputMain
            class="projects__input"
            theme="primary"
            :placeholder="$t('static.addProject.placeholders[3]')"
            type="text"
            v-model="asset.pack"
          />
          <UiInputMain
            class="projects__input"
            theme="primary"
            :placeholder="$t('static.addProject.placeholders[4]')"
            type="text"
            v-model="asset.keyword"
          />
          <div class="projects__select">
            <select
              class="projects__select-wrapper"
              name="projects__select"
              id="projects__select"
              v-model="asset.category_id"
            >
              <option value="1">
                {{ $t("static.addProject.categoriesSelect[0]") }}
              </option>
              <option value="2">
                {{ $t("static.addProject.categoriesSelect[1]") }}
              </option>
              <option value="3">
                {{ $t("static.addProject.categoriesSelect[2]") }}
              </option>
            </select>
            <Icon
              class="projects__select-icon"
              name="SortSwitcherArrowDown"
              size="20"
            />
          </div>

          <UiButtonMain
            theme="primary"
            :title="$t('static.addProject.button')"
            width="100%"
            :class="{
              disabled: !areAllFiledsFilled,
            }"
            @click="postAsset(asset)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  &__wrapper {
    display: flex;
    margin-top: 50px;
    margin-bottom: 80px;
  }

  &__sidebar {
    width: 322px;
  }

  &__images {
    background: #ffffff;
    border: 1.5px solid #353431;
    border-radius: 5px;
    padding: 20px;

    &-title {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 4px;
    }
    &-description {
      width: 70%;
      font-weight: 400;
      font-size: 12px;
      line-height: 120%;
      margin-bottom: 15px;
    }

    &-placeholder {
      width: 282px;
      height: 185px;
      border-radius: 5px;
      object-fit: contain;
      cursor: pointer;
      margin-bottom: 10px;
    }

    &-upload > input {
      display: none;
    }

    &-uploaded {
      width: 282px;
      height: 185px;
      border-radius: 20px;
      object-fit: cover;
      margin-bottom: 10px;

      display: flex;
      flex-direction: column;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    width: 538px;
    margin-left: 52px;
  }

  &__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #404145;
    margin-bottom: 40px;
  }

  &__subtitle {
    font-weight: 600;
    font-size: 16px;
    line-height: 135%;
    color: #404145;
    margin: 12px 0;
  }

  &__input {
    margin-bottom: 15px;
  }

  &__label {
    font-size: 12px;
    line-height: 120%;
    margin-bottom: 40px;
  }

  &__select {
    position: relative;
    margin-bottom: 15px;

    &-wrapper {
      font-family: "Manrope";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #95979d;
      background-color: #fff;
      border: 2px solid #e6e6e5;
      border-radius: 5px;
      cursor: pointer;
      padding: 15px 20px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;

      width: 100%;

      appearance: none;
    }

    &-wrapper::placeholder {
      color: #95979d;
    }
    &-wrapper:hover {
      border: 2px solid #ffa217;
    }
    &-wrapper:focus {
      border: 2px solid #ffa217;
    }

    &-icon {
      position: absolute;
      right: 10px;
      top: 20px;

      pointer-events: none;
    }
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

@media (max-width: 425px) {
  .projects {
    &__wrapper {
      flex-direction: column;
    }

    &__sidebar {
      width: 100%;
      text-align: center;
      margin-bottom: 30px;
    }

    &__images-description {
      margin: 0 auto 30px;
    }

    &__images-uploaded {
      margin: 0 auto 30px;
    }

    &__content {
      margin-left: 0;
      width: 100%;
    }

    &__usercard {
      width: 100%;
      margin-bottom: 50px;
    }
  }
}
</style>
