<template>
  <div class="adaptive-card">
    <component
      v-for="(component, index) in template.body"
      :key="component.type + index"
      v-bind:is="component.type"
      :text="component.text"
      :facts="component.facts"
      :columns="component.columns"
      :styleType="component.style"
    />
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue'

  export default {
    name: 'AdaptiveCard',
    components: {
      ColumnSet: defineAsyncComponent(() => import('./ColumnSet.vue')),
      TextBlock: defineAsyncComponent(() => import('./TextBlock.vue')),
      FactSet: defineAsyncComponent(() => import('./FactSet.vue')),
      Image: defineAsyncComponent(() => import('./Image.vue'))
    },
    props: {
      template: Object,
      data: Object
    },
    provide() {
      return {
        data: this.data
      }
    }
  }
</script>

<style scoped>
  .adaptive-card {
    max-width: 400px;
    margin: 10px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    background-color: #fff;
  }
</style>
