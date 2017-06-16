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
  'SET_ENTERTAINMENT_BUDGET' (state, entBud) {
    state.entertainmentBudget = entBud;
  },
  'SET_FOOD_BUDGET' (state, foodBud) {
    state.foodBudget = foodBud;
  },
  'SET_TOOL_BUDGET' (state, toolBud) {
    state.toolBudget = toolBud;
  },
  'SET_TRANSACTIONS' (state, transx) {
    state.transactions = transx;
  }
};

const actions = {
  initBudget: ({commit}) => {
    commit('SET_BUDGET', budget);
  },
  initEntertainmentBudget: ({commit}) => {
    entBudget = budget[0];
    commit('SET_ENTERTAINMENT_BUDGET', entBudget);
  },
  initFoodBudget: ({commit}) => {
    foodBudget = budget[1];
    commit('SET_FOOD_BUDGET', foodBudget);
  },
  initToolBudget: ({commit}) => {
    toolBudget = budget[2];
    commit('SET_TOOL_BUDGET', toolBudget);
  },
  initTransactions: ({commit}) => {
    commit('SET_TRANSACTIONS', transactions);
  }
};

const getters = {
  budget: state => {
    return state.budget;
  },
  entertainmentBudget: state => {
    return state.budget[0];
  },
  foodBudget: state => {
    return state.budget[1];
  },
  toolBudget: state => {
    return state.budget[2];
  },
  transactions: state => {
    return state.transactions;
  },

};

export default {
  state,
  mutations,
  actions,
  getters
}
