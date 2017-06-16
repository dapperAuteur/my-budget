<template>
  <div class="transactions">
    <app-tranx
      v-for="transaction in transactions"
      :transaction="transaction"
      :key="transaction.id"></app-tranx>
  </div>
</template>

<script>
  import Transaction from './Transaction.vue';
  export default {
    data() {
      return {
        transactions: [{
          "id": 94,
          "name": "Muffin - Mix - Mango Sour Cherry",
          "value": "$22.40",
          "vendor": "Edgewire",
          "date": "2016-07-09",
          "type": 1
        }, {
          "id": 22,
          "name": "Muffin Batt - Ban Dream Zero",
          "value": "$84.16",
          "vendor": "Oodoo",
          "date": "2016-09-24",
          "type": 1
        }, {
          "id": 90,
          "name": "Yoghurt Tubes",
          "value": "$89.65",
          "vendor": "Zoomdog",
          "date": "2017-05-29",
          "type": 3
        }, {
          "id": 56,
          "name": "Red Snapper - Fresh, Whole",
          "value": "$66.69",
          "vendor": "Trudoo",
          "date": "2017-03-02",
          "type": 3
        }, {
          "id": 29,
          "name": "Red Cod Fillets - 225g",
          "value": "$51.62",
          "vendor": "Skajo",
          "date": "2016-11-21",
          "type": 3
        }]
      }
    },
    components: {
      appTranx: Transaction
    }
  }
</script>

<style>
</style>
