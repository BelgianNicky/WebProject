<template>
  <b-container fluid>
    <div>
      <div v-for="el in produitElements" v-bind:key="el.id">
        <h6 class="produit">
          <b-img v-bind:src="el.image" fluid alt="Responsive image" class="img"></b-img>
          <b>Nom :</b>
          {{ el.nom }} |
          <b>Prix : {{el.prix}} € |</b>
          <b>Description :</b>
          {{ el.description }}
          <b-button
            v-if="isConnected"
            href="#"
            @click="addPanier($store.state.allData.data.panierId,el.id)"
            size="sm"
            variant="primary"
          >Ajouter au panier</b-button>
        </h6>
      </div>
    </div>
  </b-container>
</template>

<script>
import ProduitDataService from "../services/ProduitDataService";
import PaniProdDataService from "../services/PaniProdDataService";
import { mapState } from "vuex";
//import axios from "axios";

export default {
  name: "Produit",
  props: ["el"],
  data() {
    return {
      produitElements: [],
    };
  },
  methods: {
    addPanier(panierId, produitId) {
      this.dataForm = { panierId: panierId, produitId: produitId };

      /*
      axios
        .post("http://localhost:8080/api/pani_prod", this.dataForm)
*/
      PaniProdDataService.addProdToPanier(this.dataForm)
        .then((res) => {
          alert(res.data.message);
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
  created() {
    ProduitDataService.getProduitsFromType(this.$props.el)
      .then((res) => (this.produitElements = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.img {
  max-height: 100px;
}

.produit {
  float: left;
}
</style>
