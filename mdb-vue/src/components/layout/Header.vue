<template>
  <mdb-navbar expand="large" dark color="stylish">
    <mdb-navbar-brand href="https://mdbootstrap.com/">
      FixScreen
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item href="#" to="/" active>Accueil</mdb-nav-item>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink slot="toggle" waves-fixed>Réparation</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item to="/reparation">Smartphone</mdb-dropdown-item>
            <mdb-dropdown-item to="/reparation">Tablette</mdb-dropdown-item>
            <mdb-dropdown-item to="/reparation">Ordinateur Portable</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-nav-item href="#" to="/config">Config</mdb-nav-item>
        <mdb-nav-item href="#" to="/catalogue">Catalogue</mdb-nav-item>
      </mdb-navbar-nav>
      <mdb-navbar-nav right>
        <mdb-form-inline right>
          <mdb-input class="mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <mdb-btn outline="white" size="sm" class="my-0" type="submit">Search</mdb-btn>
        </mdb-form-inline> 
        <mdb-nav-item href="#" to="/inscription">Inscription</mdb-nav-item>
        <mdb-nav-item href="#" to="/connexion">Connexion</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbInput, mdbDropdownItem, mdbBtn,
   mdbFormInline } from 'mdbvue';
  export default {
    name: 'Header',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbDropdown,
      mdbDropdownMenu,
      mdbDropdownToggle,
      mdbDropdownItem,
      mdbInput,
      mdbBtn,
      mdbFormInline,
    }
  }
</script>

<style scoped></style>
