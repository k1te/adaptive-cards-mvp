<template>
<div :class="['column-set', `column-style-${style}`]">
  <column v-for="(column, index) in columns" :key="column.type + index" :items="column.items" :data="data"/>
</div>
</template>

<script>
  import Column from './Column'

  export default {
    name: 'ColumnSet',
    components: {
      Column
    },
    props: {
      style: String,
      bleed: Boolean,
      columns: Array,
      data: Object
    }
  }
</script>

<style scoped>
  .column-set {
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    flex: 0 0 auto;
    padding: 10px;
    margin: -10px -10px 4px;

  }
  .column-style-accent {
    background-color: #D7E7FA;
  }
</style>
