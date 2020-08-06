<template>
  <mdb-card class="menu-item">
    <mdb-card-image :src="image.source" :alt="image.alt"></mdb-card-image>
    <mdb-card-body>
      <mdb-card-title>{{ name }}</mdb-card-title>
      <mdb-card-text> {{ description }}</mdb-card-text>
      <mdb-btn color="primary">Ajouter au panier</mdb-btn>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
	import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn } from 'mdbvue';
	export default {
		name: 'CatalogueItem',
		components: {
			mdbCard,
			mdbCardImage,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
			mdbBtn
        },
        props:{
            image: {
                type: Object,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            description: {
                type: String,
            }
        }
	}
</script>

<style scoped>
</style>