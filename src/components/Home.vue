<template>
  <div class="budget">
    <h3>Net Worth: {{ balance | currency }}</h3>
    <h2>{{ totalBudget | currency }}</h2>
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
    <div>
      <h2>Transactions</h2>
      <app-transactions></app-transactions>
    </div>
  </div>
</template>

<script>
  import store from './../store/store';
  import EntertainmentCard from './EntertainmentCard';
  import FoodCard from './FoodCard';
  import ToolCard from './ToolCard';
  import Transactions from './Transactions';
  export default {
    name: 'budget',
    data () {
      return {
        balance: 0,
        budget: {},
        entBud: {},
        foodBud: {},
        toolBud: {},
        // totalBudget: this.entBud.budget + this.foodBud.budget + this.toolBud.budget,
        newValue: 0
      }
    },
    created(){
      this.budget = this.$store.getters.budget;
      this.entBud = this.budget[0].budget;
      this.foodBud = this.budget[1].budget;
      this.toolBud = this.budget[2].budget;
      this.totalBudget = this.entBud + this.foodBud + this.toolBud
    },
    components: {
      appEntCard: EntertainmentCard,
      appFoodCard: FoodCard,
      appToolCard: ToolCard,
      appTransactions: Transactions
    },
    computed: {
      tranx(){
        return this.$store.getters.transactions;
      }
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
