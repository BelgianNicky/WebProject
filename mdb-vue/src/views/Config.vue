<template>
  <div>
    <h1>Page Catalogue</h1>
    <div v-for="el in catElements" v-bind:key="el.id">
      <h1>{{el.name}}</h1>
      <Config1 v-bind:el="el.id" />
    </div>
  </div>
</template>

<script>
import CategorieDataService from "../services/CategorieDataService";
import Config1 from "../components/Config1";

export default {
  name: "Config",
  components: {
    Config1,
  },
  data() {
    return {
      catElements: [],
      typeElements: [],
    };
  },
  created() {
    // request des catégories all
    CategorieDataService.getAll()
      .then((res) => (this.catElements = res.data))
      .catch((err) => console.log(err));
  },
};
</script>