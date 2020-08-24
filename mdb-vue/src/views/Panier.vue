<template>
  <b-container fluid>
    <div class="panier">
      <h1>Votre Panier : {{panierElements[0].montant_tot}} €</h1>
      <b-button variant="info">Finaliser la commande</b-button>
    </div>
    <div class="center">
      <div v-for="produit in panierElements[0].produits" v-bind:key="produit.id" class="panierItem">
        <b-card
          :img-src="produit.image"
          :img-alt="produit.image.alt"
          :title="produit.nom"
          class="img"
        >
          <b-card-text class="descriptionItem">Description: {{ produit.description }}</b-card-text>
          <b-card-text class="prixItem">Prix: {{ produit.prix }} €</b-card-text>
          <b-card-text class="prixItem">Quantité: {{ produit.pani_prod.quantite }}</b-card-text>
          <b-button
            href="#"
            @click="removePanier(panierElements[0].id,produit.id)"
            size="sm"
            variant="primary"
          >Retirer du panier</b-button>
        </b-card>
      </div>
    </div>
  </b-container>
</template>

<script>
import PaniProdDataService from "../services/PaniProdDataService";
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "Panier",
  data() {
    return {
      total: 0,
      isLoading: true,
      dataStore: null,
      panierElements: [],
    };
  },
  methods: {
    removePanier(panierId, produitId) {
      /*
      this.dataForm = { panierId: panierId, produitId: produitId };
      console.log(this.dataForm);
      */

      /*
      axios
        .delete(
          `http://localhost:8080/api/pani_prod?panierId=${panierId}&produitId=${produitId}`
        )
        */

      PaniProdDataService.deleteProdFromPanier(panierId, produitId)
        .then((res) => {
          console.log("Objet enlevé du panier");
          alert(res.data.message);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    },
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
      .get(
        `http://localhost:8080/api/pani_prod/${this.dataStore.data.panierId}`
      )
      .then((res) => {
        console.log(res);
        this.panierElements = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>



<style scoped>
.center {
  margin: auto;
  width: 70%;
}

.card-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  width: 20%;
}

@media (min-width: 1600px) {
  .img {
    width: 45%;
    float: left;
    min-height: 450px;
    left: 5%;
  }
}
</style>