<template>
  <div>
    <div v-for="el in typeElements" v-bind:key="el.id">
      <h6>{{el.name}}</h6>
    </div>
  </div>
</template>


<script>
import TypeDataService from "../services/TypeDataService";
//import axios from "axios";

export default {
  name: "Config1",
  props: ["el"],
  data() {
    return {
      typeElements: [],
    };
  },

  created() {
    console.log("in created type");
    console.log(this.$props.el);
    TypeDataService.getTypeFromCategorie(this.$props.el)
      .then((res) => (this.typeElements = res.data))
      .catch((err) => console.log(err));
  },
};
</script>