<template>
  <div class="budget">
    <h3>Balance: {{ balance }}</h3>
    <h3>New Value: {{ newValue }}</h3>
    <input v-on:keyup.enter="addValue" class="input is-success" type="text" v-model.number="newValue" />
    <button
      @click="addValue"
      >Add Value</button>
    <div class="columns">
      <div class="column">
        <h2>Entertainment</h2>
        <app-ent-card></app-ent-card>
      </div>
      <div class="column">
        <h2>Food</h2>
        <app-food-card></app-food-card>
      </div>
      <div class="column">
        <h2>Tools</h2>
        <app-tool-card></app-tool-card>
      </div>
    </div>
  </div>
</template>

<script>
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
