<template>
  <div class="text-block">
    <h1>{{ componentText }}</h1>
  </div>
</template>

<script>
  import { parseTemplateLiteral } from '@/utils/index.ts'

  export default {
    name: 'TextBlock',
    props: {
      data: Object,
      text: String,
      size: String,
      spacing: String
    },
    computed: {
      componentText() {
        return parseTemplateLiteral(this.text, this.data)
      }
    }
  }
</script>

<style scoped>
</style>
