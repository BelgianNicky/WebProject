<template>
	<div class="Catalogue">
		<h1 class="title">Catalogue</h1>

		<section class="menu">
			<CatalogueItem
				v-for="item in processeurs"
				:name="item.nom"
				:image="item.image"
				:price="item.price"
        :description="item.description"
				:key="item.name"
			/>
		</section>
	</div>
</template>

<script>
import CatalogueItem from "../components/CatalogueItem"
import { mapState } from "vuex"

export default {
	name: "Catalogue",
	components: {
    CatalogueItem
	},
	computed: {
		...mapState({
			storeName: "storeName",
			processeurs: "processeurs",
		})
	},
	methods: {}
}
</script>

<style scoped>
.title{
  margin: 30px;
  font-family:Verdana, Tahoma, sans-serif
}
.menu {
  margin-top: 100px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.description {
	max-width: 960px;
	font-size: 1.2rem;
	margin: 0 auto;
}
</style>