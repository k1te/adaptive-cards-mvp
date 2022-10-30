<template>
  <AdaptiveCard
    :template="template"
    :data="data"
  />
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import AdaptiveCard from '../components/AdaptiveCard'
  import EmployeeCardTemplate from '@/api/EmployeeCardTemplate.json'
  import EmployeeData from '@/api/EmployeeData.json'

  const template = reactive(EmployeeCardTemplate)
  const data = reactive(EmployeeData)
</script>
