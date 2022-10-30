<template>
  <ul class="fact-set">
    <li class="fact-set-item" v-for="(fact, index) in facts" :key="index">
      <Fact :fact="fact" />
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { defineProps } from "vue";
  import Fact from './Fact.vue'
  import { IFact } from "./Fact.vue";

  defineProps<{
    facts: IFact[]
  }>()
</script>

<style lang="scss" scoped>
  .fact-set {
    padding: 0;
    margin: 0;
    list-style: none;
  }
</style>
