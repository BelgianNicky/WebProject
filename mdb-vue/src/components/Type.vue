<template>
  <div>
    <b-card :img-src="image.source" :img-alt="image.alt" class="card" @click="updateCatalogueItems(id)" img-top>
      <span class="text">{{ nom }}</span>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  name: "Type",
  props:{
      id: {
        type: String,
        required: true
      },
      image: {
          type: Object,
          required: true
      },
      nom: {
          type: String,
          required: true
      }
  },
  components: {
  },
  methods:{
    ...mapActions(["updateCatalogueItems"])
  }
}
</script>

<style scoped>
.card{
  width: 100px;
  height: 125px;
  margin-left: auto;
  margin-right: auto;
}
.card-body{
  padding:0px;
}
</style>