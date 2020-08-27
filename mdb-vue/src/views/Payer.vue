<template>
  <b-container fluid>
    <div>
      <b-card header="Vérification de l'adresse de livraison" class="cardModifAdresse">
        <blockquote class="blockquote mb-0">
          <p>
            Votre
            <b>adresse de livraison</b> actuelle est :
            <b>{{adresseActuelle}}</b>
          </p>
          <p>Vous pouvez mettre à jour votre adresse ci-dessous</p>
          <b-row>
            <b-col sm="3">Nouvelle adresse : {{text}}</b-col>
            <b-col sm="6">
              <b-form-input v-model="text" class="inputAdresse"></b-form-input>
            </b-col>
            <b-col sm="3">
              <b-button variant="success" @click="miseAjour">Mettre à jour</b-button>
            </b-col>
          </b-row>
        </blockquote>
      </b-card>

      <h3>Coût total : Votre Panier : {{this.panierElements[0].montant_tot}} €</h3>
      <table class="tbl" width="100%">
        <tr class="tr">
          <th class="th" width="54%">
            <h3>Nom</h3>
          </th>
          <th class="th" width="23%">
            <h3>Prix</h3>
          </th>
          <th class="th" width="23%">
            <h3>Quantité</h3>
          </th>
        </tr>
        <tr v-for="produit in panierElements[0].produits" v-bind:key="produit.id">
          <th class="th" width="54%">
            <h6>{{ produit.nom }}</h6>
          </th>
          <th class="th" width="23%">
            <h6>{{ produit.prix }} €</h6>
          </th>
          <th class="th" width="23%">
            <h6>{{ produit.pani_prod.quantite }}</h6>
          </th>
        </tr>
      </table>
      <b-button variant="danger" @click="payer">Payer</b-button>
    </div>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import UsersDataService from "../services/UsersDataService";
import PaniProdDataService from "../services/PaniProdDataService";
//import axios from "axios";

export default {
  data() {
    return {
      fields: ["Nom", "Prix", "Quantité"],
      dataStore: null,
      adresseActuelle: "",
      text: "",
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
    this.adresseActuelle = this.$store.state.allData.data.adresse;

    /*
        axios
      .get(
        `http://localhost:8080/api/pani_prod/${this.dataStore.data.panierId}`
      )
    */

    PaniProdDataService.getAllProduitFromPanier(this.dataStore.data.panierId)
      .then((res) => {
        console.log(res);
        this.panierElements = res.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    miseAjour() {
      var dataForm = { adresse: this.text };
      console.log(dataForm);
      console.log(this.dataStore.data.id);
      this.adresseActuelle = this.text;
      this.updateAdresse(this.text);

      UsersDataService.updateUser(this.dataStore.data.id, dataForm)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
    ...mapActions(["updateAdresse"]),

    payer() {
      alert("Vous avez payé");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.th {
  text-align: left;
}

.cardModifAdresse {
  margin-top: 1%;
  margin-bottom: 1%;
  font-size: 25px;
}
</style>
