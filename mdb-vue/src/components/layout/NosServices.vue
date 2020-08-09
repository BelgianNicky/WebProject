<template>
    <div class="container">
        <b-card
        title="Gamme de produits"
        :img-src="require('@/assets/gamme_de_produits.png')"
        img-alt="Image"
        img-top
        tag="Gamme_de_produits"
        class="mb"
        id="gamme_produits"
        >
        <b-card-text>
            Découvrez notre gamme de services informatiques et les derniers accessoires multimédias conseillés par nos spécialistes
        </b-card-text>

        <b-button href="#" variant="primary">Catalogue</b-button>
        </b-card>
        <b-card
            title="PC sur mesure"
            :img-src="require('@/assets/pc_sur_mesure.png')"
            img-alt="Image"
            img-top
            tag="PC_Sur_Mesure"
            class="mb"
            >
            <b-card-text>
                Vous trouverez également sur notre site tous les éléments et conseils permettant de créer un ordinateur sur mesure qui correspond à vos besoins et votre budget.
            </b-card-text>

            <b-button href="#" variant="primary">Créez votre PC</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    name:"NosServices"
}
</script>

<style scoped>
.container{
    width:900px;
    display: grid;
	grid-template-columns: repeat(2,1fr);
    gap: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
}
#gamme_produits{
    padding-top:86px;
}
</style>