<template>
  <header class="header">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">Réparation</router-link>|
      <router-link to="/about">Config</router-link>|
      <router-link to="/about">Catalogue</router-link>|
      <router-link to="/about">Se connecter</router-link>|
      <router-link to="/about">A propos</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}

.header a {
  color: #fff;
  padding-right: 5px;
}
</style>
