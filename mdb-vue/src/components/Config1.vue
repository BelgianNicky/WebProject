<template>
  <div>
    <div v-for="el in typeElements" v-bind:key="el.id">
      <div>
        <b-card :img-src="el.name" class="card" img-top>
          <span class="text">{{ el.name }}</span>
        </b-card>
      </div>
      <Config2 v-bind:el="el.id" />
    </div>
  </div>
</template>


<script>
import TypeDataService from "../services/TypeDataService";
import Config2 from "../components/Config2";

export default {
  name: "Config1",
  components: {
    Config2,
  },
  props: ["el"],
  data() {
    return {
      typeElements: [],
      Processeur: require("@/assets/5.png"),
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