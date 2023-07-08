<script setup>
// Props
const props = defineProps({
  show: Boolean,
});

// Emits
const emit = defineEmits(["close"]);
</script>

<template>
  <div v-if="show" class="modal__overlay">
    <div class="modal">
      <div class="modal__form">
        <h2 class="modal__title">
          {{ $t("popupTransactionFailed.title") }}
        </h2>
        <p class="modal__description">
          {{ $t("popupTransactionFailed.description") }}
        </p>
        <UiButtonMain
          class="modal__button"
          theme="error"
          width="100%"
          :title="$t('popupTransactionFailed.button')"
          @click="emit('close')"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  width: 548px;
  height: 231px;
  margin-top: 10%;
  padding: 30px;
  background-color: #ffffff;
  border: 1.5px solid #353431;
  border-radius: 5px;

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 135%;
    color: #353431;
    margin-bottom: 10px;
  }

  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #9d9b95;
    margin-bottom: 30px;
  }

  &__button {
    width: 100%;
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
    z-index: 11;
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

@media (max-width: 425px) {
  .modal {
    width: 90%;
  }
}
</style>
