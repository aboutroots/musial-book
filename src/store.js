import Vue from 'vue';
import Vuex from 'vuex';
import DataParser from './parser.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pages: [],
  },

  actions: {
    FETCH_BOOK_DATA({ commit }, inputData) {
      const parser = new DataParser(inputData);
      parser.compute();
      const pages = parser.pages;
      commit('SET_PAGES', pages);
    },
  },

  mutations: {
    SET_PAGES(state, payload) {
      state.pages = payload;
    },
  },
});
