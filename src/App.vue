<script  lang="ts">
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
      value1: 'Off',
            value2: null,
            value3: null,
            options: ['Off', 'On'],
            paymentOptions: [
                {name: 'Option 1', value: 1},
                {name: 'Option 2', value: 2},
                {name: 'Option 3', value: 3}
            ],
            justifyOptions: [
                {icon: 'pi pi-align-left', value: 'Left'},
                {icon: 'pi pi-align-right', value: 'Right'},
                {icon: 'pi pi-align-center', value: 'Center'},
                {icon: 'pi pi-align-justify', value: 'Justify'}]
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
      <div
        id="Izobrazba in izkušnje"
        style="height: 450px; width: 100%; background-color: rgb(174 215 248);"
      >
        <Exp></Exp>
      </div>
      <div
        id="Znanja in projekti"
        style="height: 700px; width: 100%; background-color: rgb(174 215 248)"
      >
        <Projects></Projects>
      </div>
      <div
        id=""
        style="height: 700px; width: 100%; background-color: #e6dace"
      >
      </div>


      <div
        id="Kontakt"
        style="height: 500px; width: 100%; background-color: blue"
      >
      <select v-model="$i18n.locale">
    <option v-for="locale in $i18n.availableLocales" :key="locale">{{ locale }}</option>
  </select>
        <p>{{ $t("message.hello") }}</p>

        <div>
        <h5 id="single">Single Selection</h5>
        <SelectButton   aria-labelledby="single" />

        <h5 id="multiple">Multiple Selection</h5>
        <SelectButton  optionLabel="name" multiple aria-labelledby="multiple" />

        <h5 id="custom">Custom Content</h5>
        <SelectButton optionLabel="value" dataKey="value" aria-labelledby="custom">
            <template #option="slotProps">
                <i :class="slotProps.option.icon"></i>
            </template>
        </SelectButton>

        <div>
        <h5 id="single">Single Selection</h5>
        <SelectButton v-model="value1" :options="options" aria-labelledby="single" />

        <h5 id="multiple">Multiple Selection</h5>
        <SelectButton v-model="value2" :options="paymentOptions" optionLabel="name" multiple aria-labelledby="multiple" />

        <h5 id="custom">Custom Content</h5>
        <SelectButton v-model="value3" :options="justifyOptions" optionLabel="value" dataKey="value" aria-labelledby="custom">
            <template #option="slotProps">
                <i :class="slotProps.option.icon"></i>
            </template>
        </SelectButton>
    </div>
    </div>
      </div>
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
  height: 600px;
  width: 100%;

  /* display: flex;
  align-items: center;
  justify-content: center;*/
  background: #d1dee8;
}
</style>

