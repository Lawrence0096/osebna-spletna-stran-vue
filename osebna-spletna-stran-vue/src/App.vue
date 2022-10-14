<script  lang="ts">
import { RouterLink, RouterView } from "vue-router";
//@ts-ignore
import Header from "./components/header.vue";
//@ts-ignore
import Cover from "./components/cover.vue";
import Resume from "./components/resume.vue";
import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';


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
    ProgressSpinner
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
<template>
  <div>

    <div v-if="!isScreenSizeMobile">
      <Header
        :headers="data"
        @clicked-show-detail="clickedShowDetailModal"
      ></Header>

      <Cover></Cover>

      <Button class="p-ripple purple" type="submit" label="Submit"/>
      <ProgressSpinner/>

            <Button label="Primary" />
      <Button label="Secondary" class="p-button-secondary" />
      <Button label="Success" class="p-button-success" />
      <Button label="Info" class="p-button-info" />
      <Button label="Warning" class="p-button-warning" />
      <Button label="Warning" class="p-button-help" />
      <Button label="Danger" class="p-button-danger" />
      <!--<a href="#sec-3">Section 3</a>-->

      <div class="resume-container">
        <Resume></Resume>
      </div>
  
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

<style scoped>

  .resume-container{
    height: 700px; 
    width: 100%;

  }
</style>

