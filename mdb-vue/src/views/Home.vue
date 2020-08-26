<template>
  <b-container fluid>
    <div>
      <b-navbar class="b-navbar" toggleable="lg" type="light" variant="light">
        <b-navbar-brand>
          <img src="@/assets/logo.png" style="height:50px" />
          Logistick
        </b-navbar-brand>

        <b-nav>
          <b-nav-item href="#services" class="textItem">Nos services</b-nav-item>
          <b-nav-item href="#lieuhoraires" class="textItem">Lieu et horaires</b-nav-item>
          <b-nav-item href="#propos" class="textItem">À propos</b-nav-item>
          <b-nav-item href="#contact" class="textItem">Contact</b-nav-item>
        </b-nav>
      </b-navbar>

      <Carousel />

      <h2 id="services" class="titre-sections">Nos services</h2>
      <NosServices />

      <h2 id="services" class="titre-sections">Horaire et Lieu</h2>
      <span id="lieuhoraires" />
      <LieuHoraires />

      <h2 id="propos" class="titre-sections">À propos</h2>
      <Apropos />

      <h2 id="contact" class="titre-sections"></h2>
      <Contact />

      <h2 class="titre-sections"></h2>
      <!-- FOOTER A REMPLIR -->
    </div>
  </b-container>
</template>

<script>
import Carousel from "@/components/layout/Carousel";
import NosServices from "@/components/layout/NosServices";
import LieuHoraires from "@/components/layout/LieuHoraires";
import Apropos from "@/components/layout/Apropos";
import Contact from "@/components/layout/Contact";
import { mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState({
      storeName: "storeName",
    }),
  },
  components: {
    Carousel,
    NosServices,
    LieuHoraires,
    Apropos,
    Contact,
  },
  data() {
    return {
      banner_image: "@/assets/home_banner.png",
    };
  },
};
</script>

<style scoped>
.carousel {
  margin: auto;
  max-width: 900px;
  height: auto;
}
.b-navbar-brand {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}
.b-navbar {
  margin: auto;
  max-width: 900px !important;
}

/* Polices */
.textItem {
  font-size: 1rem;
  color: black;
}

.titre-sections {
  font-size: 3rem;
  color: black;
}
</style>