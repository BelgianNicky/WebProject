<template>
  <b-container fluid>
    <b-card
      :img-src="image.source"
      :img-alt="image.alt"
      :title="nom"
      class="catalogue-item"
      img-top
    >
      <b-card-text class="descriptionItem">{{ description }}</b-card-text>
      <b-card-text class="prixItem">{{ prix }} €</b-card-text>
      <b-button href="#" @click="addPanier" size="sm" variant="primary">Ajouter au panier</b-button>
    </b-card>
  </b-container>
</template>

<script>
import PanierDataService from "../services/PanierDataService";

export default {
  name: "CatalogueItem",
  components: {},
  props: {
    image: {
      type: Object,
      required: true,
    },
    nom: {
      type: String,
      required: true,
    },
    prix: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
  },
  data() {
    return {
      panier: {
        id: null,
        quantite: null,
        montant_tot: null,
      },
    };
  },
  methods: {
    addPanier() {
      PanierDataService.create()
        .then((response) => {
          console.log(response.data);
          //this.panier.id = response.data.id;
          //this.panier.quantite = response.data.quantite;
          //this.panier.montant_tot = response.data.montant_tot;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss">
p {
  font-size: 1em;
}
.catalogue-item {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}
.descriptionItem {
  margin: 0px;
  font-family: "Courier New", Courier, monospace;
  font-style: italic;
  font-size: 1px;
}
.prixItem {
  margin: 0px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1px;
}
</style>