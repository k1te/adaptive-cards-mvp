<template>
  <div class="text-block">
    <p v-html="componentText"/>
  </div>
</template>

<script>
  import { parseMarkdown, parseTemplateLiteral } from '@/utils/index.ts'

  export default {
    name: 'TextBlock',
    inject: ['data'],
    props: {
      text: String,
      size: String,
      spacing: String
    },
    computed: {
      componentText() {
        return parseMarkdown(parseTemplateLiteral(this.text, this.data))
      }
    }
  }
</script>

<style scoped>
  .text-block {
    padding-bottom: 4px;
  }
</style>
