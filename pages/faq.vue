<script setup>
const { t } = useI18n();

const q1 = computed(() => {
  return t("static.faq.qaBlock.items[0].question");
});
const a1 = computed(() => {
  return t("static.faq.qaBlock.items[0].answer");
});
const q2 = computed(() => {
  return t("static.faq.qaBlock.items[1].question");
});
const a2 = computed(() => {
  return t("static.faq.qaBlock.items[1].answer");
});
const q3 = computed(() => {
  return t("static.faq.qaBlock.items[2].question");
});
const a3 = computed(() => {
  return t("static.faq.qaBlock.items[2].answer");
});
const q4 = computed(() => {
  return t("static.faq.qaBlock.items[3].question");
});
const a4 = computed(() => {
  return t("static.faq.qaBlock.items[3].answer");
});
const q5 = computed(() => {
  return t("static.faq.qaBlock.items[4].question");
});
const a5 = computed(() => {
  return t("static.faq.qaBlock.items[4].answer");
});
const q6 = computed(() => {
  return t("static.faq.qaBlock.items[5].question");
});
const a6 = computed(() => {
  return t("static.faq.qaBlock.items[5].answer");
});
const q7 = computed(() => {
  return t("static.faq.qaBlock.items[6].question");
});
const a7 = computed(() => {
  return t("static.faq.qaBlock.items[6].answer");
});

const qa = reactive([
  {
    question: q1,
    answer: a1,
    toggle: false,
  },
  {
    question: q2,
    answer: a2,
    toggle: false,
  },
  {
    question: q3,
    answer: a3,
    toggle: false,
  },
  {
    question: q4,
    answer: a4,
    toggle: false,
  },
  {
    question: q5,
    answer: a5,
    toggle: false,
  },
  {
    question: q6,
    answer: a6,
    toggle: false,
  },
  {
    question: q7,
    answer: a7,
    toggle: false,
  },
]);

useHead({
  title: "Piccon | FAQ",
});
</script>

<template>
  <AppFaqAdvantages />
  <section class="qa">
    <div class="container">
      <AppFaqQaBlock
        title="FAQ"
        :qa="qa"
      />
    </div>
  </section>
</template>
