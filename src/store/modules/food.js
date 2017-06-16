const state = {
  foodBudget: {},
  foodTransaction: {},
  foodTransactions: []
};

const mutations = {
  'SET_FOOD_BUDGET' (state, foodBud) {
    state.foodBudget = foodBud;
  },
  'SET_FOOD_TRANSACTIONS' (state, foodX) {
    state.foodTransactions = foodX;
  }
};

const actions = {
  buyFood: ({commit}, order) => {
    commit();
  },
  setFoodBudget: ({commit}) => {
    commit('SET_FOOD_BUDGET');
  },
  setFoodTransactions: ({commit}) => {
    commit('SET_FOOD_TRANSACTIONS');
  }
};
