<template>
  <table class="fact">
    <tr v-for="(field, index) in fields" :key="index">
      <td class="title"><strong>{{ field[title] }}</strong></td>
      <td class="value">{{ field[value] }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
  import { inject, defineProps, computed } from 'vue'
  import { parseTemplateLiteralToString } from "@/utils"

  export interface IFact {
    '$data': string,
    title: string,
    value: string
  }

  const props = defineProps<{
    fact: IFact
  }>()

  const data: object | null = inject('data', null)
  const fields = computed(() => data ? data[parseTemplateLiteralToString(props.fact['$data'])] : '')
  const title = computed(() => parseTemplateLiteralToString(props.fact['title']))
  const value = computed(() => parseTemplateLiteralToString(props.fact['value']))
</script>

<style lang="scss" scoped>
  @import '../../styles/variables';

  .value {
    padding: 0 $padding;
  }
</style>
