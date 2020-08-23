<template>
  <div class="container">
    <b-card-group deck>
      <b-card
        title="Mathias Gassmann"
        :img-src="require('@/assets/mathias.png')"
        img-alt="Mathias"
        img-top
      >
        <b-card-text>Étudiant à l'EPHEC en Technologie de l'informatique. Gérant de <b>Logistick</b> et développeur web.</b-card-text>
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
        <b-card-text>Étudiant à l'EPHEC en Technologie de l'Informatique</b-card-text>
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