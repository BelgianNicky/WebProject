<template>
  <div>
    <div v-for="el in typeElements" v-bind:key="el.id">
      <div role="tablist">
        <b-card no-body>
          <b-card-header header-tag="header" class="type" role="tab">
            <b-button
              block
              v-b-toggle="'accordion-' + el.name"
              variant="info"
              size="md"
              class="btn-default btnType"
            >{{ el.name }}</b-button>
          </b-card-header>
          <b-collapse :id="'accordion-' + el.name" accordion="my-accordionType" role="tabpanel">
            <b-card-body class="type">
              <Produit v-bind:el="el.id" />
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </div>
</template>


<script>
import TypeDataService from "../services/TypeDataService";
import Produit from "../components/Produit";

export default {
  name: "Type",
  components: {
    Produit,
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

<style scoped>
</style>