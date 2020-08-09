<template>
    <div class="lh">
        <b-card
            overlay
            :img-src="require('@/assets/banner_LH.jpg')"
            img-alt="Card Image"
            text-variant="white"
        >
            <b-card-text class="lh_content">
                <b-card
                variant="success"
                title="Horaires d'ouverture"
                tag="horaires"
                style="max-width: 20rem;"
                class="textTitle"
                >
                    <b-card-text class="horaires">
                        <span>Du lundi au samedi</span>9h00-19h00
                        <span>Dimanche</span>Fermé
                    </b-card-text>
                </b-card>
                <b-card
                title="Adresse"
                tag="adresse"
                style="max-width: 20rem;"
                class="textTitle"

                >
                    <b-card-text class="adresse">
                        Venelle des merisiers 46<br>
                        1301 Bierges<br>
                        Belgique
                    </b-card-text>
                </b-card>
                <!-- <div class="horaires">
                    <h2 class="titre-sections"> Horaires d'ouverture </h2>
                    <p>
                        <span>Du lundi au samedi</span>9h00-19h00
                        <span>Dimanche</span>Fermé
                    </p>
                </div>
                <div class="adresse">
                    <h2 class="titre-sections"> Adresse </h2>
                    <p>
                        Venelle des merisiers 46<br>
                        1301 Bierges<br>
                        Belgique
                    </p>
                </div>-->
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
    name:"LieuHoraires"
}
</script>

<style scoped>
.card-card_title {
    font-size: 2rem !important;
}
.lh_content{
    display: inline-block;
    margin-top: 18%;
    margin-left:40%;
    width:600px;
    height:400px;
}
.titre-sections {
    color: black;
    font-size:4rem;
    font-family: cursive;
}
.adresse{
    display:inline-block;
    text-align: start;
    font-family: "Helvetica Neue",Arial,sans-serif;
    font-size:2rem;
}
.horaires{
    display:inline-block;
    text-align:start;    
    padding-left:10%;
    font-family: "Helvetica Neue",Arial,sans-serif;
    font-size:40px;
}
span{
    display:inline-block;
    width: 60%;
    text-align: start;
    justify-content: center;
}
.mb-1{
    display:inline-block;
    width:50%;
}
.mb-2{
    display:inline-block;
    width:50%;
    margin:30px;
}
.textTitle {
background: url(http://ecard.enter-media.org/upload/iblock/cf4/cf401a38b3c0190e91e68729a24795b6.jpg) repeat;
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
background-position: 50% 50%;
position: relative;
line-height:normal;
font-size:1rem;
background-color:#FFF;
margin:50px;
margin-left:70px;
}
</style>