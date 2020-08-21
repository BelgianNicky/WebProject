<template>
  <div>
    <h1>Page Catalogue</h1>
    <div v-for="el in catElements" v-bind:key="el.id">
      <h4>{{el.name}}</h4>
      <Config1 v-bind:el="el" />
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