<template>
  <b-card :img-src="image.source" :img-alt="image.alt" img-height="100px" :title="nom" class="catalogue-item"  img-top>
    <b-card-text class="descriptionItem"> {{ description }} </b-card-text>
    <b-card-text class="prixItem">{{ prix }} €</b-card-text>
    <b-button href="#" size="sm" variant="primary">Ajouter au panier</b-button>
  </b-card>
</template>

<script>
	export default {
		name: 'CatalogueItem',
		components: {
        },
    props:{
        image: {
            type: Object,
            required: true
        },
        nom: {
            type: String,
            required: true
        },
        prix: {
            type: Number,
            required: true
        },
        description: {
            type: String,
        }
    }
	}
</script>

<style lang="scss">
p{
  font-size:1em;
}
.catalogue-item{
  width: 170px;
  height: 320px;
  margin-left: auto;
  margin-right: auto;
}
li{
  display: inline-block;
  margin-left: 10px;
}
.descriptionItem{
  margin:0px;
  font-family:'Courier New', Courier, monospace;
  font-style: italic;
  font-size: 1px;
}
.prixItem{
  margin:0px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1px;
}
</style>