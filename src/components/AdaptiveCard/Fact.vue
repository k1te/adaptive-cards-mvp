<template>
  <table class="fact">
    <tr v-for="(field, index) in fields" :key="index">
      <td class="title">{{ field[title] }}</td>
      <td class="value">{{ field[value] }}</td>
    </tr>
  </table>
</template>

<script>
  import { parseTemplateLiteralToString } from "@/utils/index.ts"

  export default {
    name: 'Fact',
    props: {
      facts: Array,
      data: Object,
      fact: Object
    },
    computed: {
      fields() {
        return this.data[parseTemplateLiteralToString(this.fact['$data'])]
      },
      title() {
        return parseTemplateLiteralToString(this.fact['title'])
      },
      value() {
        return parseTemplateLiteralToString(this.fact['value'])
      }
    }
  }
</script>

<style scoped>
  .title {
    font-weight: bold;
  }
  .value {
    padding: 0 10px;
  }
</style>
