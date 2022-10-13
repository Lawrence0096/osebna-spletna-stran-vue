<script  lang="ts">
import { RouterLink, RouterView } from "vue-router";
//@ts-ignore
import Header from "./components/header.vue";
//@ts-ignore
import Cover from "./components/cover.vue"

export default {
  name: "app",
  methods: {
    clickedShowDetailModal(e: string){
      console.log(e);
    }
  },
  components: {
    Header,
    Cover
},
  data() {
    return {
      data: [
        "O meni",
        "Izobrazba in izkušnje",
        "Znanja in projekti",
        "Kontakt",
      ],
    };
  },
};
</script>
<template>
  <div>

    <Header
      :headers="data"
      @clicked-show-detail="clickedShowDetailModal"
    ></Header>
    <div style="height: 200px; width:100%;"></div>
    <Cover></Cover>

<a href="#sec-3">Section 3</a>

    <div style="height:500px; width:100%; background-color: red;"></div>
    <div style="height:500px; width:100%; background-color: green;"></div>
    <div style="height:500px; width:100%; background-color: gray;"></div>
    <div style="height:500px; width:100%; background-color: blue;"></div>
    <div style="height:500px; width:100%; background-color: red;"></div>
    <div style="height:500px; width:100%; background-color: green;"></div>
    <div style="height:500px; width:100%; background-color: gray;"></div>
    <div id="sec-3" style="height:500px; width:100%; background-color: blue;"></div>
  
  </div>
</template>

<style scoped>


</style>

