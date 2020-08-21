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
    isConnected: true,

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

    processeur: [
      {
        id: "1",
        image: {
          source: logo,
          alt: "logo",
        },
        nom: "Processeur Intel® Core™ i7-8700",
        prix: "3",
        stock: "333",
        description: "BONJOUR JE SUIS UN PROCESSEUR",
      },
      {
        id: "2",
        image: {
          source: logo,
          alt: "logo",
        },
        nom: "Processeur Intel® Core™ i7-9700T",
        prix: "3",
        stock: "333",
        description: "BONJOUR JE SUIS UN PROCESSEUR",
      },
      {
        id: "3",
        image: {
          source: logo,
          alt: "logo",
        },
        nom: "Processeur Intel® Core™ i7-10700K",
        prix: "3",
        stock: "333",
        description: "BONJOUR JE SUIS UN PROCESSEUR",
      },
    ],

    carteMeres: [
      {
        id: "1",
        nom: "carte mere 1",
        prix: "3",
        stock: "333",
        description: "yes",
      },
      {
        id: "2",
        nom: "carte mere 2",
        prix: "3",
        stock: "333",
        description: "yes",
      },
      {
        id: "3",
        nom: "carte mere 3",
        prix: "3",
        stock: "333",
        description: "yes",
      },
    ],

    memoires: [
      {
        id: "1",
        nom: "memoire ram 1",
        prix: "3",
        stock: "333",
        description: "yes",
      },
      {
        id: "2",
        nom: "memoire ram 2",
        prix: "3",
        stock: "333",
        description: "yes",
      },
      {
        id: "3",
        nom: "memoire ram 3",
        prix: "3",
        stock: "333",
        description: "yes",
      },
    ],

    typePeriph: [
      {
        id: "1",
        nom: "Moniteur",
      },
      {
        id: "2",
        nom: "Clavier",
      },
      {
        id: "3",
        nom: "Souris",
      },
    ],

    moniteurs: [
      {
        id: "1",
        nom: "Proco 1",
        prix: "3",
        stock: "333",
        description: "yes",
      },
      {
        id: "2",
        nom: "Proco 2",
        prix: "3",
        stock: "333",
        description: "yes",
      },
      {
        id: "3",
        nom: "Proco 3",
        prix: "3",
        stock: "333",
        description: "yes",
      },
    ],

    claviers: [
      {
        id: "1",
        nom: "clavier 1",
        prix: "3",
        stock: "333",
        description: "yes",
      },
      {
        id: "2",
        nom: "clavier 2",
        prix: "3",
        stock: "333",
        description: "yes",
      },
      {
        id: "3",
        nom: "clavier 3",
        prix: "3",
        stock: "333",
        description: "yes",
      },
    ],

    souris: [
      {
        id: "1",
        nom: "souris 1",
        prix: "3",
        stock: "333",
        description: "yes",
      },
      {
        id: "2",
        nom: "souris 2",
        prix: "3",
        stock: "333",
        description: "yes",
      },
      {
        id: "3",
        nom: "souris 3",
        prix: "3",
        stock: "333",
        description: "yes",
      },
    ],

    typeAccessoires: [
      {
        id: "1",
        nom: "chaise",
      },
      {
        id: "2",
        nom: "filtre",
      },
      {
        id: "3",
        nom: "multiprise",
      },
    ],

    chaises: [
      {
        id: "1",
        nom: "chaise 1",
        prix: "3",
        stock: "333",
        description: "yes",
      },
      {
        id: "2",
        nom: "chaise 2",
        prix: "3",
        stock: "333",
        description: "yes",
      },
      {
        id: "3",
        nom: "chaise 3",
        prix: "3",
        stock: "333",
        description: "yes",
      },
    ],

    filtres: [
      {
        id: "1",
        nom: "filtre 1",
        prix: "3",
        stock: "333",
        description: "yes",
      },
      {
        id: "2",
        nom: "filtre 2",
        prix: "3",
        stock: "333",
        description: "yes",
      },
      {
        id: "3",
        nom: "filtre 3",
        prix: "3",
        stock: "333",
        description: "yes",
      },
    ],

    multiprises: [
      {
        id: "1",
        nom: "multiprise 1",
        prix: "3",
        stock: "333",
        description: "yes",
      },
      {
        id: "2",
        nom: "multiprise 2",
        prix: "3",
        stock: "333",
        description: "yes",
      },
      {
        id: "3",
        nom: "multiprise 3",
        prix: "3",
        stock: "333",
        description: "yes",
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
