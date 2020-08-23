<template>
  <b-container fluid>
    <div class="panier">
      <h1>Votre Panier : {{total}} €</h1>
      <h2>{{$store.state.allData.data}}</h2>
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
export default {
  name: "Panier",
  data() {
    return {
      total: 0,
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