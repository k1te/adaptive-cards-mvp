<template>
  <div :class="classes">
    <img :src="imageSrc" :alt="altText || 'No alt text'"/>
  </div>
</template>

<script setup lang="ts">
  import { computed, defineProps, inject } from 'vue'
  import { parseTemplateLiteralToString } from '@/utils'
  import { ImageSize, ImageStyle } from "@/types/types"

  interface IImage {
    url: string,
    altText?: string,
    size?: ImageSize,
    imgStyle?: ImageStyle
  }

  const props = defineProps<IImage>()
  const data: object | null = inject('data', null)
  const imageSrc = computed(() => data ? data[parseTemplateLiteralToString(props.url)] : '')
  const classes = computed(() => [
    'image',
    props.size ? `image-${props.size?.toLowerCase()}` : '',
    props.imgStyle ? `image-${ props.imgStyle?.toLowerCase()}` : ''
  ])
</script>

<style scoped>
  .image img {
    display: block;
  }
  .image-person {
    border-radius: 50%;
    overflow: hidden;
  }
  .image-small img {
    width: 40px;
    height: 40px;
  }
</style>
