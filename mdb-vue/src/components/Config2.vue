<template>
  <div>
    <div v-for="el in produitElements" v-bind:key="el.id">
      <h6>{{el.nom}}</h6>
    </div>
  </div>
</template>


<script>
import ProduitDataService from "../services/ProduitDataService";

export default {
  name: "Config2",
  props: ["el"],
  data() {
    return {
      produitElements: [],
    };
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