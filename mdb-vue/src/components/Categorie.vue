<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle="'accordion-' + id" variant="info" class="bouton"> {{ categorie }}</b-button>
      </b-card-header>
      <b-collapse :id="'accordion-' + id" accordion="my-accordion" role="tabpanel">
        <b-card-body class="type">
          <Type
            v-for="item in type"
            :image="item.image"
            :nom="item.nom"
            :id="item.id"
            :key="item.nom"
          />
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<!-- FAIRE UNE REQUËTE A LA BDD SUR CHAQUE "ID" DE CATEGORIE POUR RECUPERER LES TYPES DE PRODUITS DE CHAQUE CATEGORIES, ET ITERER SUR CHAQUE CATEGORIE-->
<script>
import Type from "../components/Type"
import { mapState } from "vuex"
  export default {
    props:{
        id:{
            type: String,
            required: true
        },
        categorie:{
            type: String,
            required: true
        }

    },
    components:{
        Type
    },
    computed: {
      ...mapState({
        type: "type",
      })
    }
  }
</script>

<style scoped>
.bouton{
    width:400px;
    height:50px;
}
.type{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>