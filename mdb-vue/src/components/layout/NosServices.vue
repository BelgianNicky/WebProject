<template>
    <div class="container">
        <b-card
        title="Gamme de produits"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="Gamme_de_produits"
        class="mb"
        >
        <b-card-text>
            Découvrez notre gamme de services informatiques et les derniers accessoires multimédias conseillés par nos spécialistes
        </b-card-text>

        <b-button href="#" variant="primary">Catalogue</b-button>
        </b-card>
        <b-card
            title="PC sur mesure"
            img-src="https://picsum.photos/600/300/?image=25"
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
    margin-top: 40px;
    gap: 20px;
}
.text1 {
background: url(http://ecard.enter-media.org/upload/iblock/cf4/cf401a38b3c0190e91e68729a24795b6.jpg) repeat;
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
background-position: 50% 50%;
position: relative;
line-height:normal;
font-size:12rem;
background-color:#FFF;
}
.text1:after {
content: attr(data-text);
position: absolute;
text-shadow:4px 4px 0px #FFF, 
7px 7px 0px #877667;left: 0;
right:0;
margin-left:auto;
margin-right:auto;
z-index: -1;
line-height:normal;
font-size:12rem;
background-color:#FFF;
 
}
</style>