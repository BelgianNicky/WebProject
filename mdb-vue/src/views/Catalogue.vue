<template>
	<div class="Catalogue">
		<h1 class="title">Catalogue</h1>

		<section class="categories">
			<Categorie
				v-for="item in categorie"
				:categorie="item.nom"
				:id="item.id"
				:key="item.nom"
			/>

		</section>
		<section class="catalogueItems">
			<CatalogueItem
				v-for="item in catalogueItems"
				:nom="item.nom"
				:image="item.image"
				:prix="item.prix"
				:inStock="item.inStock"
				:quantity="item.quantity"
				:description="item.description"
				:key="item.nom"
			/>
		</section>
	</div>
</template>

<script>
import Categorie from "../components/Categorie"
import CatalogueItem from "../components/CatalogueItem"
import { mapState } from "vuex"

export default {
	name: "Catalogue",
	components: {
		CatalogueItem,
		Categorie
	},
	computed: {
		...mapState({
			storeName: "storeName",
			categorie: "categorie",
			catalogueItems: "catalogueItems",
		})
	},
	methods: {}
}
</script>

<style scoped>
.Catalogue{
	max-width: 1300px;
	margin: auto;
}
.title{
  margin: 30px;
  font-family:Verdana, Tahoma, sans-serif
}
.categories {
	margin-top: 100px;
	margin-left: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	float:left
}
.catalogueItems{
	width:30%;
	float:left;
	padding-top:100px;
	margin-left:100px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px 20px;

}
</style>