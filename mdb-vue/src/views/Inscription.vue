<template>
  <div class="w-50 mx-auto">
    <b-container fluid>
      <form id="register" @submit="checkForm" action="" novalidate="true">
        <!-- method="post" --->
        <br />

        <p class="h4 text-center mb-4">Inscription</p>
            <p v-if="errors.length">
              <b>Problème lors de l'inscription:</b>
                <ul>
                  <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
          </p>
        <label for="username" class="grey-text">Votre nom d'utilisateur</label>
        <input type="text" id="username" class="form-control" v-model="username" name="username" />
        <br />
        <label for="full_name" class="grey-text">Votre nom et prénom</label>
        <input type="text" id="full_name" class="form-control" v-model="full_name" name="full_name" />
        <br />
        <label for="adresse" class="grey-text">Votre adresse de livraison</label>
        <input type="adresse" id="adresse" class="form-control" v-model="adresse" name="adresse" />
        <br />
        <label for="ville" class="grey-text">Votre ville</label>
        <input type="ville" id="ville" class="form-control" v-model="ville" name="ville" />
        <br>
        <label for="code_postal" class="grey-text">code postal</label>
        <input type="code_postal" id="code_postal" class="form-control" v-model="code_postal" name="code_postal" />
        <br />
        <label for="email" class="grey-text">Votre email</label>
        <input type="email" id="email" class="form-control" v-model="email" name="email" />
        <br />
        <br />
        <label for="pwd" class="grey-text">Votre mot de passe</label>
        <input type="password" id="pwd" class="form-control" v-model="pwd" name="pwd" />
        <br />
        <label for="confirmPwd" class="grey-text">Confirmez votre mot de passe</label>
        <input
          type="password"
          id="confirmPwd"
          class="form-control"
          v-model="confirmPwd"
          name="confirmPwd"
        />
        <div class="text-center mt-4">
          <button class="btn btn-unique" type="submit">S'inscrire !</button>
        </div>
      </form>

    </b-container>
  </div>
</template>

<script>
import UsersDataService from "../services/UsersDataService";


export default {
  data: function(){ return {
    errors: [],
    username: null,
    full_name: null,
    adresse: null,
    ville: null,
    code_postal: null,
    email: null,
    pwd: null,
    confirmPwd: null,
    resp: [],
    dataForm:{},
    };
  },
  methods: {
    checkForm (e) {

      this.errors = [];

      if (!this.username) {
        this.errors.push("Nom d'utilisateur obligatoire");
      }
      else if (!this.full_name) {
        this.errors.push("Nom complet obligatoire");
      }
      else if (!this.adresse) {
        this.errors.push("Adresse obligatoire");
      }
      else if (!this.ville) {
        this.errors.push("Ville obligatoire");
      }
      else if (!this.code_postal) {
        this.errors.push("Code postal obligatoire");
      }
      else if (!this.email) {
        this.errors.push('Email obligatoire');
      } 
      else if (!this.validEmail(this.email)) {
        this.errors.push('Email non valide');
      }
      else if (this.pwd !== this.confirmPwd) {
        this.errors.push("Mots de passes différents");
        console.log(this.pwd);
        console.log(this.confirmPwd);
      }

      else{

      this.dataForm = {username:this.username,full_name:this.full_name, adresse:this.adresse, ville:this.ville, code_postal:this.code_postal, email:this.email, password:this.pwd};
      UsersDataService.create(this.dataForm)
      .then(res => {
        this.resp = res.data
          if(this.resp.boolean){
            console.log('creation compte reussi');
            console.log(this.resp.boolean);
            console.log(this.resp);
          }
          if(!this.resp.boolean){
            console.log('creation compte raté');
            console.log(this.resp.boolean);
            console.log(this.resp.error);
            console.log(this.resp);    
          }
      })
      .catch((err) => console.log(err));
      }
      
      e.preventDefault();
    },
        validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

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