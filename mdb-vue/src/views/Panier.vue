<template>
  <b-container fluid>
    <div class="panier">
      <h1>Votre Panier : {{panierPrix.montant_tot}} €</h1>
      <div v-for="x in panierElements" v-bind:key="x.id">{{x}}</div>
    </div>
    <div v-for="item in panierItems" v-bind:key="item.id" class="panierItem">
      <b-card :img-src="item.image.source" :img-alt="item.image.alt" :title="item.nom">
        <b-card-text class="descriptionItem">{{ item.description }}</b-card-text>
        <b-card-text class="prixItem">{{ item.prix }} €</b-card-text>
        <b-button href="#" @click="removePanier" size="sm" variant="primary">Retirer du panier</b-button>
      </b-card>
    </div>
  </b-container>
</template>

<script>
//import PanierDataService from "../services/PanierDataService";
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "Panier",
  data() {
    return {
      total: 0,
      isLoading: true,
      dataStore: null,
      panierPrix: [],
      panierElements: [],
    };
  },
  computed: {
    ...mapState({
      isConnected: "isConnected",
      allData: "allData",
    }),
  },
  mounted() {
    this.dataStore = this.$store.state.allData;

    axios
      .get(`http://localhost:8080/api/panier/${this.dataStore.data.panierId}`)
      .then((res) => {
        console.log(res);
        this.panierPrix = res.data;
      })
      .catch((err) => console.log(err));

    axios
      .get(
        `http://localhost:8080/api/pani_prod/${this.dataStore.data.panierId}`
      )
      .then((res) => {
        console.log(res);
        this.panierElements = res.data;
      })
      .catch((err) => console.log(err));
  },
  created() {
    //console.log(this.panierId);
    /*
    PanierDataService.get(this.panierId)
      .then((res) => (this.produitElements = res.data))
      .catch((err) => console.log(err));
      */
  },
};
</script>



<style scoped>
.card-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
}
</style>