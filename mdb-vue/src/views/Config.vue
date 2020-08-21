<template>
  <div class="config">
    <h1>Page Config</h1>
    <div v-for="el in catElements" v-bind:key="el.id">{{el.name}}</div>
    <div>---------------</div>
    <div v-for="el in typeElements" v-bind:key="el.id">{{el.name}}</div>
  </div>
</template>

<script>
import CategorieDataService from "../services/CategorieDataService";
import TypeDataService from "../services/TypeDataService";
//import axios from "axios";

export default {
  data() {
    return {
      catElements: [],
      typeElements: [],
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
    TypeDataService.getAll()
      .then((res) => (this.typeElements = res.data))
      .catch((err) => console.log(err));
  },
};
</script>