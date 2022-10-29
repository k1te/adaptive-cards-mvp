<template>
  <ul class="fact-set">
    <li class="fact-set-item" v-for="(fact, index) in facts" :key="index">
      <Fact :data="data" :fact="fact" />
    </li>
  </ul>
</template>

<script>
  import Fact from './Fact'

  export default {
    name: 'FactSet',
    components: {
      Fact
    },
    props: {
      facts: Array,
      data: Object
    }
  }
</script>

<style scoped>
  .fact-set {
    padding: 0;
    list-style: none;
  }
</style>
