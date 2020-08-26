<template>
  <b-container fluid>
    <div>
      <h1>Finalisation de la commande</h1>
      <h3>
        Votre adresse actuelle est :
        <b>{{this.dataStore.data.adresse}}</b>
      </h3>
      <h3>Pour mettre à jour votre adresse, écrivez dans le champ ci dessous et appuier sur "Mettre à jour"</h3>
      <h3>
        <b-form-input v-model="text" class="inputAdresse"></b-form-input>
        <b-button variant="success">Mettre à jour</b-button>
      </h3>
    </div>
  </b-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      dataStore: null,
      text: "",
    };
  },
  computed: {
    ...mapState({
      isConnected: "isConnected",
      allData: "allData",
    }),
  },
  mounted() {
    this.dataStore = this.$store.state.allData;
  },
  methods: {
    miseAjour() {
      return true;
    },
  },
};
</script>

<style scoped>
.inputAdress {
  width: 50%;
}
</style>
