<template>
  <div class="config">
    <h1>Page Config</h1>
    <div v-for="el in catElements" v-bind:key="el.id">{{el.name}}</div>
  </div>
</template>

<script>
import CategorieDataService from "../services/CategorieDataService";
//import axios from "axios";

export default {
  data() {
    return {
      catElements: [],
    };
  },
  created() {
    /*
    axios
      .get("http://localhost:8080/api/categorie/")
      .then((res) => (this.catElements = res.data))
      .catch((err) => console.log(err));
      */

    CategorieDataService.getAll()
      .then((res) => (this.catElements = res.data))
      .catch((err) => console.log(err));
  },
};
</script>