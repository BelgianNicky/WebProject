<template>
  <b-container fluid>
    <div>
      <div v-for="el in typeElements" v-bind:key="el.id">
        <div role="tablist">
          <b-card no-body>
            <b-card
              v-bind:title="el.name"
              v-bind:img-src="el.image"
              img-alt="Image"
              img-left
              img-width="20%"
              img-height="30%"
              tag="article"
              class="cardType"
            >
              <b-card-text>
                <h5>Pour voir l'ensemble de nos {{el.name}}</h5>
              </b-card-text>
              <b-card-text>
                <h5>Cliquez sur le bouton ci-dessous!</h5>
              </b-card-text>
              <div class="fill">.</div>

              <b-button
                block
                v-b-toggle="'accordion-' + el.name"
                variant="info"
                size="md"
                bottom
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
  </b-container>
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
    TypeDataService.getTypeFromCategorie(this.$props.el)
      .then((res) => (this.typeElements = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.card-title {
  font-size: 40px;
}

.btnType {
  bottom: 0;
}

.fill {
  visibility: hidden;
}
</style>