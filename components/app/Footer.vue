<script setup>
// Stores
import { usePopupStore } from "@/store/popup";
import { useFilterStore } from "@/store/filter";
import { useProductStore } from "@/store/product";

const popupStore = usePopupStore();
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
  window.scrollTo(0, 0);
}

function clearFilterAndRouterPush() {
  filterStore.filters.categories = [];
  filterStore.filters.skip = 0;
  filterStore.filters.pack = "";
  productStore.getProducts();
  router.push("/catalog/");
  window.scrollTo(0, 0);
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__top-left">
          <NuxtLink
            class="footer__top-logo-link"
            to="/"
          >
            <img
              class="footer__top-logo"
              src="/img/static/logo.png"
              alt="Logo"
            />
          </NuxtLink>
          <p class="footer__top-left-text">Qarlygash Media Group</p>
          <p class="footer__top-left-text">
            Kazakhstan, Almaty city, Medeu district, Fonvizina street, house 10,
            050051
          </p>
          <UiButtonMain
            :title="$t('footer.button')"
            theme="secondary"
            @click="popupStore.popupSignUp = true"
          />
        </div>
        <div class="footer__top-right">
          <div class="footer__top-menu">
            <div class="footer__top-menu-column">
              <p class="footer__top-menu-title">
                {{ $t("footer.categories.title") }}
              </p>
              <ul class="footer__top-menu-list">
                <p
                  class="footer__top-menu-link"
                  @click="clearFilterAndRouterPush()"
                >
                  {{ $t("footer.categories.items[0]") }}
                </p>
                <li class="footer__top-menu-item">
                  <p
                    class="footer__top-menu-link"
                    @click="applyFilterAndRouterPush('1')"
                  >
                    {{ $t("footer.categories.items[1]") }}
                  </p>
                </li>
                <li class="footer__top-menu-item">
                  <p
                    class="footer__top-menu-link"
                    @click="applyFilterAndRouterPush('2')"
                  >
                    {{ $t("footer.categories.items[2]") }}
                  </p>
                </li>
                <li class="footer__top-menu-item">
                  <p
                    class="footer__top-menu-link"
                    @click="applyFilterAndRouterPush('3')"
                  >
                    {{ $t("footer.categories.items[3]") }}
                  </p>
                </li>
              </ul>
            </div>

            <div class="footer__top-menu-column">
              <p class="footer__top-menu-title">
                {{ $t("footer.links.title") }}
              </p>
              <ul class="footer__top-menu-list">
                <li class="footer__top-menu-item">
                  <NuxtLink
                    class="footer__top-menu-link"
                    to="/about"
                  >
                    {{ $t("footer.links.items[0]") }}
                  </NuxtLink>
                </li>
                <li class="footer__top-menu-item">
                  <NuxtLink
                    class="footer__top-menu-link"
                    to="/support"
                  >
                    {{ $t("footer.links.items[1]") }}
                  </NuxtLink>
                </li>
                <li class="footer__top-menu-item">
                  <NuxtLink
                    class="footer__top-menu-link"
                    to="/terms"
                  >
                    {{ $t("footer.links.items[2]") }}
                  </NuxtLink>
                </li>
                <li class="footer__top-menu-item">
                  <NuxtLink
                    class="footer__top-menu-link"
                    to="/cookie"
                  >
                    {{ $t("footer.links.items[3]") }}
                  </NuxtLink>
                </li>
                <li class="footer__top-menu-item">
                  <NuxtLink
                    class="footer__top-menu-link"
                    to="/privacy"
                  >
                    {{ $t("footer.links.items[4]") }}
                  </NuxtLink>
                </li>
                <li class="footer__top-menu-item">
                  <NuxtLink
                    class="footer__top-menu-link"
                    to="/faq"
                  >
                    {{ $t("footer.links.items[5]") }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <div class="footer__top-menu-column footer__top-signup">
              <p class="footer__top-signup-title">
                {{ $t("footer.signup.description") }}
              </p>
              <UiButtonMain
                :title="$t('footer.signup.button')"
                theme="primary"
                padding="10px 15px"
                @click="popupStore.popupSignUp = true"
              />
              <a
                class="footer__top-signup-email"
                href="mailto:info@iccon.introlink.ru"
              >
                info@iccon.introlink.ru
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__bottom-copyright">
          {{ $t("footer.copyright.text") }}
        </p>
        <div class="footer__bottom-right">
          <div class="footer__bottom-icons">
            <Icon
              name="FooterVisa"
              size="32"
            />
            <Icon
              name="FooterMasterCard"
              size="32"
            />
          </div>
          <NuxtLink
            to="/support"
            class="footer__bottom-feedback"
          >
            <Icon
              name="FooterFeedback"
              size="20"
            />
            <p class="footer__bottom-feedback-link">
              {{ $t("footer.copyright.link") }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &__top {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 70px 0 30px 0;

    &-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      &-text {
        max-width: 250px;
      }
    }

    &-menu {
      display: flex;
      gap: 100px;
      flex-wrap: wrap;

      &-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      &-title {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 140%;
        color: #000000;
        margin-bottom: 15px;
      }
      &-link {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        color: #000000;
        cursor: pointer;
      }
    }

    &-signup {
      display: flex;
      flex-direction: column;
    }
    &-signup-title {
      width: 198px;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 140%;
      color: #4f4e4a;
      margin-bottom: 15px;
    }
    &-signup-email {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;
      color: #4f4e4a;
      margin-top: 15px;
    }
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 15px 0 20px 0;
    border-top: 1px solid #e6e6e5;

    &-copyright {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      color: #9d9b95;
    }

    &-right {
      display: flex;
      gap: 40px;
      align-items: center;
    }

    &-icons {
      display: flex;
      gap: 20px;
    }
    &-feedback {
      display: flex;
      gap: 10px;
      align-items: center;

      &-link {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 135%;
        color: #6a6862;
      }
    }
  }
}

@media (max-width: 1024px) {
  .footer {
    &__top-left {
      gap: 30px;
      flex-direction: row;
      align-items: center;
      margin-bottom: 50px;
    }

    &__cards {
      flex-direction: column;
    }
  }
}

@media (max-width: 425px) {
  .footer {
    &__top {
      &-left {
        &-text {
          width: 100%;
        }
      }
    }
  }
}
</style>
