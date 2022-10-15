<script  lang="ts">
import { RouterLink, RouterView } from "vue-router";
//@ts-ignore
import Header from "./components/header.vue";
//@ts-ignore
import Cover from "./components/cover.vue";
import Resume from "./components/resume.vue";
import Exp from "./components/exp.vue";
import Button from "primevue/button";
import Projects from "./components/projects.vue";

export default {
  name: "app",
  methods: {
    buttonClick() {
      this.isScreenSizeMobile = !this.isScreenSizeMobile;
      console.log(this.isScreenSizeMobile);
    },

    clickedShowDetailModal(e: string) {
      console.log(e);
      const id = e;
      const yOffset = -70;
      const element = document.getElementById(id);
      const y =
        element!.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
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
    Exp,
    Projects,
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
      <div id="O meni" class="resume-container">
        <Resume></Resume>
      </div>
      <div id="Izobrazba in izkušnje" style="height: 4000px; width: 100%; background-color: black">
        <Exp></Exp>
      </div>
      <div id="Znanja in projekti" style="height: 3000px; width: 100%; background-color: #ffffff">
        <Projects></Projects>
      </div>
      <div
        id="Kontakt"
        style="height: 500px; width: 100%; background-color: blue"
      ></div>
      <div style="height: 50px; width: 100%; background-color: black"></div>
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth !important;
}

body {
  margin: 0;
}
.resume-container {
  height: 700px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

