<template>
  <div>
    <div v-for="el in typeElements" v-bind:key="el.id">
      <div role="tablist">
        <b-card no-body>
          <b-card
            v-bind:title="el.name"
            v-bind:img-src="el.image"
            img-alt="Image"
            img-left
            tag="article"
            class="mb-3 cardType"
          >
            <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
            <b-button
              block
              v-b-toggle="'accordion-' + el.name"
              variant="info"
              size="md"
              class="btn-default btnType"
            >Montrez les {{ el.name }}</b-button>
          </b-card>
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
.cardType {
  max-width: 100%;
}
</style>