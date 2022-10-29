<template>
  <div class="text-block">
    <p>{{ componentText }}</p>
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
  .text-block {
    padding-bottom: 4px;
  }
</style>
