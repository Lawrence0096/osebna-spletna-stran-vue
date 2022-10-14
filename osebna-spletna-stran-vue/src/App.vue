<template>
  <div>

    <div v-if="!isScreenSizeMobile">
      <Header
        :headers="data"
        @clicked-show-detail="clickedShowDetailModal"
      ></Header>
      <Cover></Cover>
      <!--<a href="#sec-3">Section 3</a>-->

      <div class="resume-container">
        <Resume></Resume>
      </div>

      <Button>x</Button>

      <div style="height: 500px; width: 100%; background-color: green"></div>
      <div style="height: 500px; width: 100%; background-color: gray"></div>
      <div style="height: 500px; width: 100%; background-color: blue"></div>
      <div style="height: 500px; width: 100%; background-color: red"></div>
      <div style="height: 500px; width: 100%; background-color: green"></div>
      <div style="height: 500px; width: 100%; background-color: gray"></div>
      <div
        id="sec-3"
        style="height: 500px; width: 100%; background-color: blue"
      ></div>
    </div>
  </div>
</template>



<script  lang="ts">
import { RouterLink, RouterView } from "vue-router";
//@ts-ignore
import Header from "./components/header.vue";
//@ts-ignore
import Cover from "./components/cover.vue";
import Resume from "./components/resume.vue";
import Button from 'primevue/button';



export default {
  name: "app",
  methods: {
    buttonClick() {
      this.isScreenSizeMobile = !this.isScreenSizeMobile;
      console.log(this.isScreenSizeMobile);
    },
    clickedShowDetailModal(e: string) {
      console.log(e);
    },
    checkScreenSizeOnInit() {
      if (window.screen.width < 601) {
        this.isScreenSizeMobile = true;
      }

      if (window.screen.width > 601) {
        this.isScreenSizeMobile = false;
      }
    },
  },
  components: {
    Header,
    Cover,
    Resume,
    Button,
  },

  mounted() {
    this.checkScreenSizeOnInit();

    window.addEventListener("resize", () => {
      if (window.screen.width < 601) {
        this.isScreenSizeMobile = true;
      }

      if (window.screen.width > 601) {
        this.isScreenSizeMobile = false;
      }
    });
  },

  data() {
    return {
      data: [
        "O meni",
        "Izobrazba in izkušnje",
        "Znanja in projekti",
        "Kontakt",
      ],
      isScreenSizeMobile: false,
    };
  },
};
</script>


<style scoped>

  .resume-container{
    height: 700px; 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

  }
</style>

