<template>
  <header class="header">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">FixScreen</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#" to="/">Accueil</b-nav-item>
            <b-nav-item-dropdown href="#" to="/reparation" text="Réparation">
              <b-dropdown-item href="#">Smartphone</b-dropdown-item>
              <b-dropdown-item href="#">Tablette</b-dropdown-item>
              <b-dropdown-item href="#">Ordinateur Portable</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#" to="/config">Config</b-nav-item>
            <b-nav-item href="#" to="/catalogue">Catalogue</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="#" to="/inscription">Inscription</b-nav-item>
            <b-nav-item href="#" to="/connexion">Connexion</b-nav-item>

            <b-nav-item-dropdown right disabled=true>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped></style>
