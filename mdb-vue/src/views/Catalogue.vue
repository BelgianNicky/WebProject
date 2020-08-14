<template>
  <b-container fluid>
    <div class="Catalogue">
      <h1 class="title">Catalogue</h1>

      <section class="categories">
        <Categorie v-for="item in categorie" :categorie="item.nom" :id="item.id" :key="item.nom" />
      </section>

      <section class="catalogueItems .container-fluid">
        <span class="sous-section">
          <CatalogueItem
            v-for="item in catalogueItems"
            :nom="item.nom"
            :image="item.image"
            :prix="item.prix"
            :inStock="item.inStock"
            :quantity="item.quantity"
            :description="item.description"
            :key="item.nom"
          />
        </span>
      </section>
    </div>
  </b-container>
</template>

<script>
import Categorie from "../components/Categorie";
import CatalogueItem from "../components/CatalogueItem";
import { mapState } from "vuex";

export default {
  name: "Catalogue",
  components: {
    CatalogueItem,
    Categorie,
  },
  computed: {
    ...mapState({
      storeName: "storeName",
      categorie: "categorie",
      catalogueItems: "catalogueItems",
    }),
  },
  methods: {},
};
</script>

<style scoped>
/*.Catalogue{
	max-width: 80%;
	margin: auto;
}*/
.title {
  margin: 30px;
  font-family: Verdana, Tahoma, sans-serif;
}

.catalogueItems {
  padding-top: 50px;
  width: 60%;
  float: right;
}

@media (min-width: 1600px) {
  .sous-section {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px 10px;
  }
  .categories {
    padding-top: 50px;
    width: 40%;
    float: left;
    padding-left: 5%;
    padding-right: 5%;
    /*display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: flex-start;*/
  }
}

@media (max-width: 1599px) {
  .sous-section {
    width: 90%;
  }
  .categories {
    padding-top: 50px;
    width: 40%;
    float: left;
    padding-left: 5%;
    padding-right: 5%;
    /*display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: flex-start;*/
  }
}
</style>