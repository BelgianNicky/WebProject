<template>
  <div class="container">
    <b-card-group deck>
      <b-card
        title="Grassmann"
        :img-src="require('@/assets/grassmann.jpg')"
        img-alt="Mathias"
        img-top
      >
        <b-card-text>Célèbre athlète dans le monde de l'eSport. Connu pour sa participation aux University eSport Masters</b-card-text>
      </b-card>

      <b-card
        title="Nicky Riat"
        :img-src="require('@/assets/bon_toutou.jpg')"
        img-alt="Nicky"
        img-top
      >
        <b-card-text>Doux</b-card-text>
      </b-card>

      <b-card
        title="Maximilien Lambert"
        :img-src="require('@/assets/maximilien.jpg')"
        img-alt="Maximilien"
        img-top
      >
        <b-card-text>Beau gosse des îles</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "Apropos",
};
</script>

<style scoped>
.container {
  margin-top: 40px;
}
</style>