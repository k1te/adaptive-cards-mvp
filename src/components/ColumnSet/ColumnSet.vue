<template>
<div :class="classes">
  <column v-for="(column, index) in columnsArray" :key="column.type + index" :items="column.items" :width="column.width"/>
</div>
</template>

<script setup lang="ts">
  import { computed, defineProps } from 'vue'
  import Column from './Column.vue'
  import { StyleType } from '@/types/types'
  import { IColumn } from "@/types/interfaces"

  export interface IColumns {
    styleType?: StyleType,
    bleed?: boolean,
    columns: IColumn[]
  }

  const props = defineProps<IColumns>()
  const columnsArray = computed(() => props.columns)
  const classes = computed(() => [
    'column-set',
    typeof props.styleType === 'string' ? `column-style-${props.styleType}` : '',
    props.bleed ? 'column-bleed' : ''
  ])
</script>

<style lang="scss" scoped>
  @import '../../styles/variables';

  .column {
    &-set {
      display: flex;
      justify-content: flex-start;
      box-sizing: border-box;
      flex: 0 0 auto;
      padding: $padding;
      margin-bottom: $padding-sm;
      gap: $padding;
    }
    &-bleed {
      margin: (-$padding) (-$padding) $padding-sm;
    }
    &-style {
      &-default {
        background-color: $white;
      }
      &-accent {
        background-color: $accent;
      }
      &-good {
        background-color: $green;
      }
      &-emphasis{
        background-color: $light-blue;
      }
      &-attention {
        background-color: $pink;
      }
      &-warning {
        background-color: $yellow;
      }
    }
  }
</style>
