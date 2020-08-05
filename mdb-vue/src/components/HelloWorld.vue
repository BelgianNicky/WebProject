<template>
  <mdb-carousel
    :interval="8000"
    slide
    :items="items"
    controlls
  ></mdb-carousel>
</template>

<script>
  import { mdbCarousel } from "mdbvue";
  export default {
    name: "CarouselPage",
    components: {
      mdbCarousel
    },
    data() {
      return {
        items: [
          {
            img: true,
            src:
              "https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
          },
          {
            img: true,
            src:
              "https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
          },
          {
            img: true,
            src:
              "https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
          }
        ]
      };
    }
  };
</script>