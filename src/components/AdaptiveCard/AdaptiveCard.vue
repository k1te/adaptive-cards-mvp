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

<style scoped>
  .adaptive-card {
    max-width: 400px;
    margin: 10px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    background-color: #fff;
  }
</style>
