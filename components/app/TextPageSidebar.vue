<template>
  <ul class="links">
    <li class="links__item">
      <NuxtLink class="links__item-link" to="/terms">
        {{ $t("textPageSidebar.buttons[0]") }}
      </NuxtLink>
    </li>
    <li class="links__item">
      <NuxtLink class="links__item-link" to="/cookie">
        {{ $t("textPageSidebar.buttons[1]") }}
      </NuxtLink>
    </li>
    <li class="links__item">
      <NuxtLink class="links__item-link" to="/privacy">
        {{ $t("textPageSidebar.buttons[2]") }}
      </NuxtLink>
    </li>
    <li class="links__item">
      <NuxtLink class="links__item-link" to="/support">
        {{ $t("textPageSidebar.buttons[3]") }}
      </NuxtLink>
    </li>
    <li class="links__item">
      <NuxtLink class="links__item-link" to="/faq">
        {{ $t("textPageSidebar.buttons[4]") }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;
  gap: 15px;

  &__item {
    &-link {
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 120%;
      color: #000000;
      padding: 13px 19px;
      border: 2px solid #353431;
      border-radius: 5px;
      display: inline-block;
    }
  }
}

.router-link-active {
  background-color: #ffa217;
  color: #fff;
}

@media (max-width: 425px) {
  .links {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
