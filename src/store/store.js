import Vue from 'vue';
import Vuex from 'vuex';

import balance from './modules/balance';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    balance
  },
  state: {
    budget: {},
    entertainmentBudget: {},
    entertainmentTransaction: {},
    entertainmentTransactions: [],
    foodBudget: {},
    foodTransaction: {},
    foodTransactions: [],
    toolBudget: {},
    toolTransaction: {},
    toolTransactions: [],
    transaction: {},
    transactions: []
  }
});

export default store;
