<template>
  <div :class="classes">
    <img :src="componentText" :alt="altText"/>
  </div>
</template>

<script>
  import { parseTemplateLiteralToString } from '@/utils/index.ts'

  export default {
    name: 'Image',
    props: {
      data: Object,
      url: String,
      altText: String,
      size: String,
      imgStyle: String
    },
    computed: {
      componentText() {
        return this.data[parseTemplateLiteralToString(this.url)]
      },
      classes() {
        return ['image', `image-${this.size && this.size.toLowerCase()}`, `image-${this.imgStyle && this.imgStyle.toLowerCase()}`]
      }
    }
  }
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
