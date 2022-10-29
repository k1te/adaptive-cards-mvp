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
  .column-style-accent {
    background-color: #D7E7FA;
  }
</style>
