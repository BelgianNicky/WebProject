<template>
  <b-container fluid>
    <div class="panier">
      <h1>Votre Panier : {{total}} €</h1>
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
import rtx2060 from "@/assets/rtx2060.jpg";
import chaise from "@/assets/chaise.jpg";
import multiprise from "@/assets/multiprise.jpg";

export default {
  name: "Panier",
  data() {
    return {
      total: 1000,
      panierItems: [
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
      ],
    };
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