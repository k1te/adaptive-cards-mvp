<template>
  <section class="home">
    <h1>Adaptive Cards Templating MVP</h1>
    <article>
      <AdaptiveCard
        :template="template"
        :data="data"
      />
    </article>
  </section>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import AdaptiveCard from '../components/AdaptiveCard'
  import EmployeeCardTemplate from '@/api/EmployeeCardTemplate.json'
  import EmployeeData from '@/api/EmployeeData.json'

  const template = reactive(EmployeeCardTemplate)
  const data = reactive(EmployeeData)
</script>

<style lang="scss" scoped>
  @import '../styles/variables';

  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
