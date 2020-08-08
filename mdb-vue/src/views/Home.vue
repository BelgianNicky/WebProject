<template>
  <div class="home">
    <div class="banner">
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
      
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "Home",
  computed:{
    ...mapState({
      storeName: "storeName"
    })
  }
};
</script>

<style scoped>

.banner{
    color: white;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: rgb(135, 174, 209);
    /*background-image: url(../assets/home_banner.png), url(../assets/home_banner.png);*/
    background-position: 100% 60%, 0% 60%;
    background-repeat: no-repeat;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: cursive;
}

body {
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

h1 {
  margin: 40px 0 0;
}
ul {
  margin: 40px 0 0;
  list-style-type: none;
  padding: 0;
	display: flex;
	flex-direction: column;
}
.space{
  margin:10px;
}
</style>