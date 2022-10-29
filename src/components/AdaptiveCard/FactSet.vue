<template>
  <ul class="fact-set">
    <li class="fact-set-item" v-for="(fact, index) in facts" :key="index">
      <Fact :fact="fact" />
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
      facts: Array
    }
  }
</script>

<style scoped>
  .fact-set {
    padding: 0;
    list-style: none;
  }
</style>
