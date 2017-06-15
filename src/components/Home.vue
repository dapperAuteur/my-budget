<template>
  <div class="budget">
    <h3>Net Worth: {{ balance | currency }}</h3>
    <h3>Next Transaction: {{ newValue | currency }}</h3>
    <input v-on:keyup.enter="addValue" class="input is-success" type="text" v-model.number="newValue" />
    <button
      @click="addValue"
      >Add Value</button>
    <div class="columns">
      <div class="column">
        <app-ent-card></app-ent-card>
      </div>
      <div class="column">
        <app-food-card></app-food-card>
      </div>
      <div class="column">
        <app-tool-card></app-tool-card>
      </div>
    </div>
  </div>
</template>

<script>
  import store from './../store/store';
  import EntertainmentCard from './EntertainmentCard';
  import FoodCard from './FoodCard';
  import ToolCard from './ToolCard';
  export default {
    name: 'budget',
    data () {
      return {
        balance: 0,
        newValue: 0
      }
    },
    components: {
      appEntCard: EntertainmentCard,
      appFoodCard: FoodCard,
      appToolCard: ToolCard,
    },
    methods: {
      addValue(){
        console.log(this.newValue);
        this.balance += this.newValue;
      }
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
