<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Entertainment Budget
        <figure class="image is-48x48">
          <img src="./../assets/entertainmentCard.png" alt="Image">
        </figure>
      </p>
      <a class="card-header-icon">
        <span class="icon">
          <i class="fa fa-angle-down"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        Entertainment Balance
        <app-balance :bud="bud"></app-balance>
        <h3>Last Transaction</h3>
        <button>Transaction List</button>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item">% To Date</a>
      <a class="card-footer-item">Compare To Previous</a>
      <a class="card-footer-item">+/- Annual Budget</a>
      <a class="card-footer-item">+/- Monthly Budget</a>
    </footer>
  </div>
</template>

<script>
  import Balance from './balance';
  export default {
    name: 'budget',
    data () {
      return {
        balance: 0,
        newValue: 0
      }
    },
    created(){
      this.bud = this.$store.getters.entertainmentBudget.budget;
    },
    components: {
      appBalance: Balance
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
