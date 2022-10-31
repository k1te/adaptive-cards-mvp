<template>
  <div class="adaptive-card">
    <component
      v-for="(component, index) in card"
      :key="component.type + index"
      :is="ACComponents[component.type]"
      :text="component.text"
      :facts="component.facts"
      :columns="component.columns"
      :styleType="component.style"
      :bleed="component.bleed"
    />
  </div>
</template>

<script setup lang="ts">
  import { computed, defineProps, provide } from 'vue'
  import { ACComponents } from './DynamicComponents'
  import { ACTemplate } from "@/types/interfaces"

  interface IAdaptiveCard {
    template: ACTemplate,
    data: object
  }

  const props = defineProps< IAdaptiveCard>()
  const card = computed(() => props.template?.body || [])
  provide('data', props.data)
</script>

<style lang="scss" scoped>
  @import '../styles/variables';

  .adaptive-card {
    min-width: 400px;
    max-width: 600px;
    overflow: hidden;
    margin: $padding;
    padding: $padding;
    box-shadow: $shadow-thin;
    background-color: $white;
  }
</style>
