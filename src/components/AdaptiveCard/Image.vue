<template>
  <div :class="classes">
    <img :src="imageSrc" :alt="altText || 'No alt text'"/>
  </div>
</template>

<script setup lang="ts">
  import { computed, defineProps, inject } from 'vue'
  import { parseTemplateLiteralToString } from '@/utils'
  import { ImageSize, ImageStyle } from "@/types/types"
  import { ACBaseComponent } from "@/types/interfaces";

  interface IImage extends ACBaseComponent {
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
    typeof props.size === 'string' ? `image-${props.size?.toLowerCase()}` : '',
    typeof props.imgStyle === 'string' ? `image-${ props.imgStyle?.toLowerCase()}` : ''
  ])
</script>

<style lang="scss" scoped>
  @import '../../styles/variables';

  .image {
    img {
      display: block;
      width: 80px;
      height: 80px;
    }
    &-person {
      border-radius: 50%;
      overflow: hidden;
    }
    &-small img {
      width: 40px;
      height: 40px;
    }
  }

</style>
