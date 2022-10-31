<template>
  <div :class="['column', `column-${width}`]">
    <component v-for="(item, index) in items"
      :key="item.type + index"
      v-bind:is="ACComponents[item.type]"
      v-bind="{ ...item, imgStyle: item.style }"
      />
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'
  import { ACComponents } from '../DynamicComponents'
  import { Width } from "@/types/types"
  import { ACComponent } from "@/types/interfaces"

  defineProps<{
    width?: Width,
    items: ACComponent[]
  }>()
</script>

<style lang="scss" scoped>
  @import '../../styles/variables';

  .column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    min-width: 0;
    padding: 0;
    margin: 0;
    &-auto {
      flex: 0 1 auto;
    }
    &-stretch {
      flex: 1 1 50px;
    }
  }
</style>
