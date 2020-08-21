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
        <label for="email" class="grey-text">Email</label>
        <input type="email" id="email" class="form-control" v-model="email" name="email" />
        <br />
        <label for="pwd" class="grey-text">Mot de passe</label>
        <input type="password" id="pwd" class="form-control" v-model="password" name="pwd" />
        <br />
        <div class="text-center mt-4">
          <button class="btn btn-unique" type="submit">Se connecter</button>
        </div>
      </form>
    </b-container>
  </div>
</template>

<script>
export default {
  data: function(){ return {
    errors: [],
    email: null,
    password: null,
    };
  },
  methods: {
    checkForm (e) {
        /*
        resp = UsersDataService.connnect(users:{email:this.email, password:this.password}) 
          if (resp.boolean) {
            stock dans store
          return true;
        }
        else{
          this.errors.push("Email ou password mauvais.");
        }
        */
      return e;
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