<template>
  <div class="column">
    <component v-for="(item, index) in items"
      :key="item.type + index"
      v-bind:is="item.type"
      v-bind="{ ...item, imgStyle: item.style }"
      :data="data"/>
  </div>
</template>

<script>
  import TextBlock from "@/components/AdaptiveCard/TextBlock"
  import Image from "@/components/AdaptiveCard/Image"

  export default {
    name: 'Column',
    components: {
      TextBlock,
      Image
    },
    props: {
      width: String,
      items: Array,
      data: Object
    }
  }
</script>

<style scoped>
  .column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    min-width: 0;
    padding: 0;
    margin: 0;
  }
  .column-auto {
    flex: 0 1 auto;
  }
  .column-stretch {
    flex: 1 1 50px;
  }
</style>
