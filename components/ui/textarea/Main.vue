<script setup>
// Props
const props = defineProps({
  modelValue: String,
  theme: String,
  rows: String,
  placeholder: String,
  width: String,
  height: String,
  borderRadius: String,
  padding: String,
});

// Emits
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <textarea
    class="input"
    :class="{
      'input--primary': props.theme === 'primary',
      'input--search': props.theme === 'search',
    }"
    :rows="props.rows"
    :placeholder="props.placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :style="`height: ${props.height}; width: ${props.width}; border-radius: ${props.borderRadius}; padding: ${props.padding};`"
  ></textarea>
</template>

<style lang="scss" scoped>
.input {
  padding: 15px 20px;

  &--primary {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #95979d;
    background-color: #fff;
    border: 2px solid #e6e6e5;
    border-radius: 5px;
  }
  &--primary::placeholder {
    color: #95979d;
  }
  &--primary:hover {
    border: 2px solid #ffa217;
  }
  &--primary:focus {
    border: 2px solid #ffa217;
  }

  &--search {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #4f4e4a;
    background-color: transparent;
    border: 2px solid #353431;
    border-radius: 5px;
  }
  &--search::placeholder {
    color: #9d9b95;
  }
  &--search:hover {
    border: 2px solid #ffa217;
  }
  &--search:focus {
    border: 2px solid #ffa217;
  }
}

.input:focus {
  outline: none;
}
</style>
