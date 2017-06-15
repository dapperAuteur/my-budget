import transactions from '../../data/transactionsData';
import budget from '../../data/budgetData';

const state = {
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
};

const mutations = {
  'SET_BUDGET' (state, bud) {
    state.budget = bud;
  },
  'SET_TRANSACTIONS' (state, transx) {
    state.transactions = transx;
  }
};

const actions = {
  initBudget: ({commit}) => {
    commit('SET_BUDGET', budget);
  },
  initTransactions: ({commit}) => {
    commit('SET_TRANSACTIONS', transactions);
  }
};
