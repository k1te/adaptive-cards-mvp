<template>
<div :class="classes">
  <column v-for="(column, index) in columns" :key="column.type + index" :items="column.items" :width="column.width"/>
</div>
</template>

<script setup lang="ts">
  import { computed, defineProps } from 'vue'
  import Column from './Column.vue'
  import { StyleType } from '@/types/types'

  interface IColumn {
    type: string,
    items: object[],
    width: string
  }

  interface IColumns {
    styleType?: StyleType,
    bleed?: boolean,
    columns: IColumn[]
  }

  const props = defineProps<IColumns>()
  const classes = computed(() => [
    'column-set',
    typeof props.styleType === 'string' ? `column-style-${props.styleType}` : '',
    props.bleed ? 'column-bleed' : ''
  ])
</script>

<style lang="scss" scoped>
  @import '../../styles/variables';

  .column-set {
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    flex: 0 0 auto;
    padding: $padding;
    margin: (-$padding) (-$padding) $padding-sm;
    gap: $padding;
  }
  .column-style-accent {
    background-color: $accent;
  }
</style>
