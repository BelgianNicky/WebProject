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
        <label for="name" class="grey-text">Votre nom</label>
        <input type="text" id="name" class="form-control" v-model="name" name="name" />
        <br />
        <label for="email" class="grey-text">Votre email</label>
        <input type="email" id="email" class="form-control" v-model="email" name="email" />
        <br />
        <label for="pwd" class="grey-text">Votre mot de passe</label>
        <input type="password" id="pwd" class="form-control" v-model="password" name="pwd" />
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
// import UsersDataService from "../services/UsersDataService";


export default {
  data: function(){ return {
    errors: [],
    name: null,
    email: null,
    password: null,
    confirmPwd: null,
    };
  },
  methods: {
    checkForm (e) {
      if (this.name && this.email && this.pwd === this.confirmPwd) {
        /*
        if(UsersDataService.create(users:{name:this.name, email:this.email, password:this.password})) {
          return true;
        }
        else{
          this.errors.push("Problème lors de la création du compte. Email déjà existant");
        }
        */
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Nom obligatoire");
      }
      if (!this.email) {
        this.errors.push('Email obligatoire');
      } 
      else if (!this.validEmail(this.email)) {
        this.errors.push('Email non valide');
      }
      if (this.pwd !== this.confirmPwd) {
        this.errors.push("Mots de passes différents");
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