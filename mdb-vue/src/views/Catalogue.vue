<template>
  <b-container fluid>
    <div class="Catalogue">
      <h1 class="title">Notre Catalogue</h1>

      <div v-for="el in catElements" v-bind:key="el.id">
        <div role="tablist">
          <b-card no-body>
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                v-b-toggle="'accordion-' + el.id"
                variant="info"
                size="md"
                class="bouton"
                >{{ el.name }}</b-button
              >
            </b-card-header>
            <b-collapse
              :id="'accordion-' + el.id"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body class="type">
                <Type v-bind:el="el.id" />
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import CategorieDataService from "../services/CategorieDataService";
import Type from "../components/Type";

export default {
  name: "Catalogue",
  components: {
    Type,
  },
  data() {
    return {
      catElements: [],
    };
  },
  created() {
    // request de toutes les catégories à la db via api call
    CategorieDataService.getAll()
      .then((res) => (this.catElements = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.title {
  margin: 30px;
  font-family: Verdana, Tahoma, sans-serif;
}

.catalogueItems {
  padding-top: 50px;
  width: 60%;
  float: right;
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
  }
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
  }
}

.bouton {
  width: 100%;
  height: 30%;
}
/*
@media (max-width: 1599px) {
  .type {
    padding: 0%;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 1600px) {
  .type {
    display: inline;
    margin-left: auto;
    margin-right: auto;
    gap: 5px;
  }
}
*/
</style>
