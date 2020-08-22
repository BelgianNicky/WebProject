<template>
  <div>
    <div v-for="el in produitElements" v-bind:key="el.id">
      <h6>
        {{el.nom}}
        <b-button
          v-if="isConnected"
          href="#"
          @click="addPanier"
          size="sm"
          variant="primary"
        >Ajouter au panier</b-button>
      </h6>
    </div>
  </div>
</template>


<script>
import ProduitDataService from "../services/ProduitDataService";
import { mapState } from "vuex";

export default {
  name: "Produit",
  props: ["el"],
  data() {
    return {
      produitElements: [],
    };
  },
  computed: {
    ...mapState({
      isConnected: "isConnected",
    }),
  },
  created() {
    console.log("in created produit");
    console.log(this.$props.el);

    ProduitDataService.getProduitsFromType(this.$props.el)
      .then((res) => (this.produitElements = res.data))
      .catch((err) => console.log(err));
  },
};
</script>