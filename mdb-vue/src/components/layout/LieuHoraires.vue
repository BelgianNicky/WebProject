<template>
    <div class="lh">
        <b-card
            overlay
            img-src="@/assets/banner_LH.jpg"
            img-alt="Card Image"
            text-variant="white"
            title="Image Overlay"
            sub-title="Subtitle"
        >
            <b-card-text>
                <ul>
                    Nos heures d'ouvertures sont :
                    <span class="space"></span>
                    <li>Lundi : 9h-12h | 13h30-17h</li>
                    <li>Mardi : 9h-12h | 13h30-17h</li>
                    <li>Mercredi : 9h-12h | 13h30-15h</li>
                    <li>Jeudi : 9h-12h | 13h30-17h</li>
                    <li>Vendredi : 9h-12h | 13h30-15h</li>
                    <li>Samedi : 9h-13h</li>
                </ul>
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

</style>