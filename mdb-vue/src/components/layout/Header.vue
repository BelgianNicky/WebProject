<template>
  <mdb-navbar expand="large" dark color="stylish">
    <mdb-navbar-brand href="https://mdbootstrap.com/">{{storeName}}</mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item href="#" to="/" active>Accueil</mdb-nav-item>
        <mdb-nav-item href="#" to="/catalogue">Catalogue</mdb-nav-item>
        <mdb-nav-item href="#" to="/panier" v-if="isConnected">Panier</mdb-nav-item>
      </mdb-navbar-nav>
      <mdb-navbar-nav right>
        <mdb-nav-item href="#" to="/inscription" v-if="!isConnected">Inscription</mdb-nav-item>
        <mdb-nav-item href="#" to="/connexion" v-if="!isConnected" @click="dc">Connexion</mdb-nav-item>
        <mdb-nav-item href="#" to="/" v-if="isConnected" @click="dc">Se déconnecter</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import { mapState, mapActions } from "vuex";
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
} from "mdbvue";
export default {
  name: "Header",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
  },
  methods: {
    dc() {
      this.updateIsConnected(false);
    },
    ...mapActions(["updateIsConnected"]),
  },
  computed: {
    ...mapState({
      storeName: "storeName",
      isConnected: "isConnected",
    }),
  },
};
</script>

<style scoped></style>
