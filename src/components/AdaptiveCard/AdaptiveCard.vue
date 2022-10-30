<template>
  <div class="adaptive-card">
    <component
      v-for="(component, index) in template.body"
      :key="component.type + index"
      :is="ACComponents[component.type]"
      :text="component.text"
      :facts="component.facts"
      :columns="component.columns"
      :styleType="component.style"
    />
  </div>
</template>

<script setup lang="ts">
  import { defineProps, provide } from 'vue'
  import { ACComponents } from './DynamicComponents'

  interface IAdaptiveCard {
    template: object,
    data: object
  }

  const props = defineProps< IAdaptiveCard>()
  provide('data', props.data)
</script>

<style lang="scss" scoped>
  @import '../../styles/variables';

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
