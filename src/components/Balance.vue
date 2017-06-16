<template>
  <div class="card">
    <h1>{{ bud | currency }}</h1>
  </div>
</template>

<script>
export default {
  name: 'budget',
  props: ['bud'],
  data () {
    return {
      balance: 0,
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
