import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import logo from '@/assets/logo.png';
export default new Vuex.Store({
  state: {
    storeName: "MyBestComputer",
    
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

    typeComposants: [
      {
        id: "1",
        nom: "processeur",
      },
      {
        id: "2",
        nom: "carte mère",
      },
      {
        id: "3",
        nom: "mémoire",
      },
    ],

    processeurs: [
      {
        id: "1",
        image: {
					source: logo,
					alt: "logo"
				},
        nom: "Proco 1",
        prix: "3",
        stock: "333",
        description: "BONJOUR JE SUIS UN PROCESSEUR",
      },
      {
        id: "2",
        image: {
					source: logo,
					alt: "logo"
				},
        nom: "Proco 2",
        prix: "3",
        stock: "333",
        description: "BONJOUR JE SUIS UN PROCESSEUR",
      },
      {
        id: "3",
        image: {
					source: logo,
					alt: "logo"
				},
        nom: "Proco 3",
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
  },
  actions: {
  },
  modules: {
  }
})
