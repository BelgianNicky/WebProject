<template>
  <div>
    <b-navbar class="b-navbar" toggleable="lg" type="light" variant="light">
      <b-navbar-brand>
        <img src="@/assets/logo.png" style="height:50px">
        Logistick
      </b-navbar-brand>

        <b-nav>
          <b-nav-item class="textItem">Nos services</b-nav-item>
          <b-nav-item class="textItem">Lieu et horaires</b-nav-item>
          <b-nav-item class="textItem">À propos</b-nav-item>
          <b-nav-item class="textItem">Contacts</b-nav-item>
        </b-nav>
    </b-navbar>

    <Carousel/>

    <h2 class="titre-sections"> Nos services </h2>
    <NosServices/>

    <h2 class="titre-sections"> Lieu et Horaires d'ouverture </h2>
    <LieuHoraires/>

    <!-- <div>
      <b-jumbotron bg-variant="warning" text-variant="dark" border-variant="dark">
        <template v-slot:header>Logistick</template>

        <template v-slot:lead>
          Votre magasin d'informatique près de chez vous, dans le Brabant-Wallon
        </template>

        <hr class="my-4">

        <p>
          Découvrez notre gamme de services informatiques et les derniers accessoires multimédias conseillés par nos spécialistes
        </p>
        <b-button variant="primary" href="#">Catalogue</b-button>
        <p>
          Vous trouverez également sur notre site tous les éléments et conseils permettant de créer un ordinateur sur mesure qui correspond à vos besoins et votre budget.
        </p>
        <b-button variant="success" href="#">Mon PC sur mesure</b-button>
      </b-jumbotron>
    </div>
    <div class="banner">
      <b-img :src
      <h1>Bienvenue chez {{ storeName }}</h1>
      <ul>
        Nos heures d'ouvertures sont :
        <span class="space"></span>
        <li>Lundi : 9h-12h | 13h30-17h</li>
        <li>Mardi : 9h-12h | 13h30-17h</li>
        <li>Mercredi : 9h-12h | 13h30-15h</li>
        <li>Jeudi : 9h-12h | 13h30-17h</li>
        <li>Vendredi : 9h-12h | 13h30-15h</li>
        <li>Samedi : 9h-13h</li>
      </ul>
    </div>
    <div class="container">  
    </div>-->
  </div>
</template>

<script>
import Carousel from "@/components/layout/Carousel"
import NosServices from "@/components/layout/NosServices"
import LieuHoraires from "@/components/layout/LieuHoraires"
import { mapState } from "vuex"
export default {
  name: "Home",
  computed:{
    ...mapState({
      storeName: "storeName"
    })
  },
  components: {
    Carousel,
    NosServices,
    LieuHoraires
  },
  data(){
    return {
      banner_image: "@/assets/home_banner.png",
    };
  },
};
</script>

<style scoped>
.carousel {
  margin:auto;
  width:900px;
  height:auto;
}
.b-navbar-brand{
	font-family: "Open Sans", Helvetica, Arial, sans-serif;
}
.b-navbar{
  margin:auto;
  width:900px !important;
}

/* Polices */
.textItem {
background: url(http://ecard.enter-media.org/upload/iblock/cf4/cf401a38b3c0190e91e68729a24795b6.jpg) repeat;
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
background-position: 50% 50%;
position: relative;
line-height:normal;
font-size:1rem;
background-color:#FFF;
}

.titre-sections {
margin-top:150px;
background: url(http://ecard.enter-media.org/upload/iblock/cf4/cf401a38b3c0190e91e68729a24795b6.jpg) repeat;
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
background-position: 50% 50%;
position: relative;
line-height:normal;
font-size:3rem;
background-color:#FFF;
}
</style>