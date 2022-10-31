<template>
  <div :class="classes">
    <p v-html="componentText"/>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, inject, computed } from 'vue'
  import { parseMarkdown, parseTemplateLiteral } from '@/utils'
  import { TextBlockSize, Spacing } from "@/types/types";
  import { ACBaseComponent } from "@/types/interfaces"

  interface ITextBlock extends ACBaseComponent {
    text: string,
    size?: TextBlockSize,
    spacing?: Spacing
  }

  const props = defineProps<ITextBlock>()
  const data: object = inject('data', {})
  const componentText = computed(() => parseMarkdown(parseTemplateLiteral(props.text, data)))
  const classes = computed(() => [
    'text-block',
    typeof props.size === 'string' ? `text-size-${props.size.toLocaleLowerCase()}` : '',
    typeof props.spacing === 'string' ? `text-spacing-${props.spacing.toLocaleLowerCase()}` : ''
  ])
</script>

<style lang="scss" scoped>
  @import '../../styles/variables';

  .text {
    &-block {
      padding-bottom: $padding-sm;
    }
    &-size {
      &-small {
        font-size: 0.8em;
      }
      &-default {
        font-size: 1em;
      }
      &-medium {
        font-size: 1.2em;
      }
      &-large {
        font-size: 1.5em;
      }
      &-extralarge {
        font-size: 2.0em;
      }
    }
  }
</style>
