<template>
  <div>
    <p>{{el.id}}</p>
  </div>
</template>


<script>
// import TypeDataService from "../services/TypeDataService";

export default {
  name: "Config1",
  props: ["el"],
  data() {
    return {
      typeElements: [],
      myEl: this.el,
    };
  },

  /*
  created() {
    TypeDataService.getCategorie(myEl)
      .then((res) => (this.typeElements = res.data))
      .catch((err) => console.log(err));
  },
  */
};
</script>