<template>
  <div class="w-50 mx-auto">
    <b-container fluid>
      <form id="register" @submit="checkForm" action="" novalidate="true">
        <!-- method="post" --->
        <br />

        <p class="h4 text-center mb-4">Se connecter</p>
            <p v-if="errors.length">
              <b>Problème lors de la connexion.</b>
                <ul>
                  <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
          </p>
        <label for="username" class="grey-text">Username</label>
        <input type="username" id="username" class="form-control" v-model="username" name="username" />
        <br />
        <label for="password" class="grey-text">Mot de passe</label>
        <input type="password" id="password" class="form-control" v-model="password" name="password" />
        <br />
        <div class="text-center mt-4">
          <button class="btn btn-unique" type="submit">Se connecter</button>
        </div>
      </form>
    </b-container>
  </div>
</template>

<script>
import UsersDataService from "../services/UsersDataService";
//import axios from "axios";
import {  mapActions } from "vuex";

export default {
  data: function(){ return {
    errors: [],
    username: null,
    password: null,
    co: false,
    };
  },
  methods: {
    checkForm (e) {

      /*
      axios
      .get(`http://localhost:8080/api/users?username=${this.username}&password=${this.password}`)

      */
      UsersDataService.testConnection(this.username, this.password)
      .then(res => {
        this.resp = res.data
          if(this.resp.boolean){
            //set id et password into store
            this.co = this.resp.boolean;
            this.updateIsConnected(this.resp.boolean);
            this.updateData(this.resp);
            alert("Vous êtes connecté");
          }
      if(!this.resp.boolean){
            alert("Username ou password erroné.");  
          }
      })
      .catch((err) => console.log(err));
      
      e.preventDefault();
    },
    ...mapActions(['updateIsConnected', 'updateData']) 
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  font-size: xx-large;
}

li {
  color: red;
}
.btn{
  color: white;
}
</style>