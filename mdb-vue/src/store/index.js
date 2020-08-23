import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    storeName: "Logistick",
    isConnected: false,
    idUser: "",
    idPanier: "",
    adresseUser: "",
    allData: null,
  },
  mutations: {
    //nom sera remplacé par ID (du type) pour accéder aux produits correspondant à un certain type
    UPDATE_CATALOGUE_ITEMS(state, id) {
      state.catalogueItems = state.$({ id });
    },
    UPDATE_ISCONNECTED(state, bool) {
      state.isConnected = bool;
    },
    UPDATE_DATA(state, allData) {
      state.allData = allData;
    },
  },
  actions: {
    //nom sera remplacé par ID (du type) pour accéder aux produits correspondant à un certain type
    updateCatalogueItems({ commit }, id) {
      commit("UPDATE_CATALOGUE_ITEMS", id);
    },
    updateIsConnected({ commit }, bool) {
      commit("UPDATE_ISCONNECTED", bool);
    },
    updateData({ commit }, allData) {
      commit("UPDATE_DATA", allData);
    },
  },
  modules: {},
});
