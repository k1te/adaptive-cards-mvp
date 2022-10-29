<template>
  <component v-for="(item, index) in items"
             :key="item.type + index"
             v-bind:is="item.type"
             v-bind="item"
            :data="data"/>
</template>

<script>
  import TextBlock from "@/components/AdaptiveCard/TextBlock";

  export default {
    name: 'Column',
    components: {
      TextBlock
    },
    props: {
      width: String,
      items: Array,
      data: Object
    }
  }
</script>

<style scoped>
</style>
