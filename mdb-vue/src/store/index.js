import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import logo from "@/assets/logo.png";
import rtx2060 from "@/assets/rtx2060.jpg";
import chaise from "@/assets/chaise.jpg";
import multiprise from "@/assets/multiprise.jpg";

export default new Vuex.Store({
  state: {
    storeName: "Logistick",
    isConnected: false,

    catalogueItems: [
      {
        id: "1",
        nom: "chaise",
        image: {
          source: chaise,
          alt: "chaise",
        },
        prix: 120,
        inStock: true,
        quantity: 40,
        description: "Arozzi Enzo Gaming Chair Red",
      },
      {
        id: "2",
        nom: "rtx2060",
        image: {
          source: rtx2060,
          alt: "filtre",
        },
        prix: 10,
        inStock: false,
        quantity: 20,
        description: "Gigabyte Geforce RTX 2060 ",
      },
      {
        id: "3",
        nom: "multiprise",
        image: {
          source: multiprise,
          alt: "multiprise",
        },
        prix: 5,
        inStock: true,
        quantity: 10,
        description: "LOGON 4-WAY POWER STRIP: Black 1.5M",
      },
      {
        id: "1",
        nom: "chaise",
        image: {
          source: chaise,
          alt: "chaise",
        },
        prix: 120,
        inStock: true,
        quantity: 40,
        description: "Arozzi Enzo Gaming Chair Red",
      },
      {
        id: "1",
        nom: "chaise",
        image: {
          source: chaise,
          alt: "chaise",
        },
        prix: 120,
        inStock: true,
        quantity: 40,
        description: "Arozzi Enzo Gaming Chair Red",
      },
      {
        id: "1",
        nom: "chaise",
        image: {
          source: chaise,
          alt: "chaise",
        },
        prix: 120,
        inStock: true,
        quantity: 40,
        description: "Arozzi Enzo Gaming Chair Red",
      },
      {
        id: "3",
        nom: "multiprise",
        image: {
          source: multiprise,
          alt: "multiprise",
        },
        prix: 5,
        inStock: true,
        quantity: 10,
        description: "LOGON 4-WAY POWER STRIP: Black 1.5M",
      },
      {
        id: "3",
        nom: "multiprise",
        image: {
          source: multiprise,
          alt: "multiprise",
        },
        prix: 5,
        inStock: true,
        quantity: 10,
        description: "LOGON 4-WAY POWER STRIP: Black 1.5M",
      },
      {
        id: "3",
        nom: "multiprise",
        image: {
          source: multiprise,
          alt: "multiprise",
        },
        prix: 5,
        inStock: true,
        quantity: 10,
        description: "LOGON 4-WAY POWER STRIP: Black 1.5M",
      },
    ],

    categorie: [
      {
        id: "1",
        nom: "Composants PC",
      },
      {
        id: "2",
        nom: "Périphériques",
      },
      {
        id: "3",
        nom: "Accessoires",
      },
    ],

    type: [
      {
        id: "1",
        image: {
          source: logo,
          alt: "processeur",
        },
        nom: "processeur",
      },
      {
        id: "2",
        image: {
          source: logo,
          alt: "carte_mère",
        },
        nom: "carteMeres",
      },
      {
        id: "3",
        image: {
          source: logo,
          alt: "mémoire",
        },
        nom: "memoire",
      },
    ],
  },
  mutations: {
    //nom sera remplacé par ID (du type) pour accéder aux produits correspondant à un certain type
    UPDATE_CATALOGUE_ITEMS(state, id) {
      state.catalogueItems = state.$({ id });
    },
  },
  actions: {
    //nom sera remplacé par ID (du type) pour accéder aux produits correspondant à un certain type
    updateCatalogueItems({ commit }, id) {
      commit("UPDATE_CATALOGUE_ITEMS", id);
    },
  },
  modules: {},
});
