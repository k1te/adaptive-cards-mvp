<template>
  <AdaptiveCard
    :template="template"
    :data="data"
  />
</template>

<script>
  import AdaptiveCard from '../components/AdaptiveCard/index.ts'
  import EmployeeCardTemplate from '../api/EmployeeCardTemplate.json'
  import EmployeeData from '../api/EmployeeData.json'

  export default {
    name: 'Home',
    components: {
      AdaptiveCard
    },
    data() {
      return {
        template: EmployeeCardTemplate,
        data: EmployeeData
      }
    }
  }
</script>
