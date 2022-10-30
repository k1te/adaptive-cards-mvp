<template>
  <div :class="classes">
    <p v-html="componentText"/>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, inject, computed } from 'vue'
  import { parseMarkdown, parseTemplateLiteral } from '@/utils'
  import { TextBlockSize, Spacing } from "@/types/types";

  interface ITextBlock {
    text: string,
    size?: TextBlockSize,
    spacing?: Spacing
  }

  const props = defineProps<ITextBlock>()
  const data: object = inject('data', {})
  const componentText = computed(() => parseMarkdown(parseTemplateLiteral(props.text, data)))
  const classes = computed(() => [
    'text-block',
    props.size ? `text-size-${props.size}` : '',
    props.spacing ? `text-spacing-${props.spacing}` : ''
  ])
</script>

<style scoped>
  .text-block {
    padding-bottom: 4px;
  }
</style>
