<template>
  <div class="adaptive-card">
    <component
      v-for="(component, index) in template.body"
      :key="component.type + index"
      v-bind:is="component.type"
      :text="component.text"
      :facts="component.facts"
      :columns="component.columns"
      :style="component.style"
      :data="data"
    />
  </div>
</template>

<script>
  // TODO: Dynamic import
  import ColumnSet from "@/components/AdaptiveCard/ColumnSet";
  import TextBlock from "@/components/AdaptiveCard/TextBlock";
  import FactSet from "@/components/AdaptiveCard/FactSet";

  export default {
    name: 'AdaptiveCard',
    components: {
      ColumnSet,
      TextBlock,
      FactSet
    },
    props: {
      template: Object,
      // TODO: Move data to injection
      data: Object
    }
  }
</script>

<style scoped>
  .adaptive-card {
    max-width: 900px;
    margin: 10px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    background-color: #fff;
  }
</style>
