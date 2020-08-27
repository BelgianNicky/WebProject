<template>
    <div>
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
            <!-- Text slides with image -->
            <b-carousel-slide
            caption="Équipements Gaming dernier cri !"
            text="Profitez de nos offres exclusives, jusqu'à -50%"
            :img-src="require('@/assets/Carousel_5.jpg')"
            ></b-carousel-slide>

            <b-carousel-slide
            caption=""
            text=""
            :img-src="require('@/assets/Carousel_7.jpg')"
            ></b-carousel-slide>

            <b-carousel-slide
            caption="Offre Chaises gamings"
            text="2 chaises gaming achetées, 1 offerte"
            :img-src="require('@/assets/Carousel_6.jpg')"
            ></b-carousel-slide>
            
        </b-carousel>

        <p class="mt-4">
            Slide #: {{ slide }}<br>
            Sliding: {{ sliding }}
        </p>
    </div>
</template>

<script>

export default {
    name: "Carousel",
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
}
</script>