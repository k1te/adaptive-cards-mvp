<template>
  <div :class="['column', `column-${width}`]">
    <component v-for="(item, index) in items"
      :key="item.type + index"
      v-bind:is="item.type"
      v-bind="{ ...item, imgStyle: item.style }"
      />
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue'

  export default {
    name: 'Column',
    components: {
      ColumnSet: defineAsyncComponent(() => import('./ColumnSet.vue')),
      TextBlock: defineAsyncComponent(() => import('./TextBlock.vue')),
      FactSet: defineAsyncComponent(() => import('./FactSet.vue')),
      Image: defineAsyncComponent(() => import('./Image.vue'))
    },
    props: {
      width: String,
      items: Array
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
