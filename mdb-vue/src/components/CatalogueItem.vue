<template>
  <mdb-card class="menu-item">
    <mdb-card-image :src="image.source" :alt="image.alt" class="image-item"></mdb-card-image>
    <mdb-card-body>
      <mdb-card-title>{{ name }}</mdb-card-title>
      <mdb-card-text class="description-item"> {{ description }}</mdb-card-text>
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
.image-item{
	display: flex;
	flex-direction: row;
	justify-content: center;
    align-items: center;
}
.description-item{
    width: 200px;
    height: 50px;
}
</style>