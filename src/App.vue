<script  lang="ts">
//@ts-ignore
import NavBar from "./components/nav-bar.vue";
//@ts-ignore
import Cover from "./components/cover.vue";
import Resume from "./components/resume.vue";
import Exp from "./components/exp.vue";
import Button from "primevue/button";
import Projects from "./components/projects.vue";
import ProjectsExp from "./components/projects-exp.vue";
import MobileNavBar from "./components/mobile-nav-bar.vue";
import MobileCover from "./components/mobile-cover.vue";
import MobileExp from "./components/mobile-exp.vue";
import MobileProjectsExp from "./components/mobile-projects-exp.vue";

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

    clickedShowFullPanel(e: string) {
       this.visibleFull = true
    },

    showSpecifilMobileSection(e: any){
      this.visibleFull = false;
      console.log(e);
      const id = e;
      const yOffset = -50;
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
    NavBar,
    Cover,
    Resume,
    Button,
    Exp,
    Projects,
    ProjectsExp,
    MobileNavBar,
    MobileCover,
    MobileExp,
    MobileProjectsExp
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
        "Znanja",
        "Kontakt",
      ],
      isScreenSizeMobile: false,
      visibleFull: false,
      value1: "Off",
      value2: null,
      value3: null,
      options: ["Off", "On"],
      paymentOptions: [
        { name: "Option 1", value: 1 },
        { name: "Option 2", value: 2 },
        { name: "Option 3", value: 3 },
      ],
      justifyOptions: [
        { icon: "pi pi-align-left", value: "Left" },
        { icon: "pi pi-align-right", value: "Right" },
        { icon: "pi pi-align-center", value: "Center" },
        { icon: "pi pi-align-justify", value: "Justify" },
      ],
    };
  },
};
</script>


<template>
  <div>
    <div v-if="!isScreenSizeMobile">
      <NavBar
        :headers="data"
        @clicked-show-detail="clickedShowDetailModal"
      ></NavBar>
      <Cover></Cover>
      <div id="O meni" class="resume-container">
        <Resume></Resume>
      </div>
      <div
        id="Izobrazba in izkušnje"
        style="height: 1350px; width: 100%; background-color: rgb(217 217 217);"
      >
        <Exp></Exp>
        <Projects></Projects>
      </div>
      <div id="Znanja" style="width: 100%; background-color: #d0e2ff">
        <ProjectsExp></ProjectsExp>
        <br />
        <div class="test4">
          <h1>Grafični izdelki</h1>
          <div class="row">
            <div class="column">
              <img src="./assets/New folder/1.png" style="width: 100%" />
              <img src="./assets/New folder/2.jpg" style="width: 100%" />
              <img src="./assets/New folder/3.jpg" style="width: 100%" />
              <img src="./assets/New folder/13.jpg" style="width: 100%" />
            </div>
            <div class="column">
              <img src="./assets/New folder/4.jpg" style="width: 100%" />
              <img src="./assets/New folder/5.jpg" style="width: 100%" />
              <img src="./assets/New folder/6.jpg" style="width: 100%" />
              <img src="./assets/New folder/7.jpg" style="width: 100%" />
              <img src="./assets/New folder/12.jpg" style="width: 100%" />
            </div>
            <div class="column">
              <img src="./assets/New folder/8.jpg" style="width: 100%" />
              <img src="./assets/New folder/9.jpg" style="width: 100%" />
              <img src="./assets/New folder/10.jpg" style="width: 100%" />
              <img src="./assets/New folder/11.jpg" style="width: 100%" />
            </div>
          </div>
        </div>
      </div>
      <div style="height: 20px; width: 100%; background-color: #f0f5f9"></div>
      <div
        id="Kontakt"
        style="height: 160px; width: 100%; background-color: #f0f5f9"
        class="contact-container"

      >
        <p style="margin-top: -30px; font-weight: 500; font-size: 22px">
          Kontakt:
        </p>
        <p id="p2">Lovro Mackošek</p>
        <p id="p4">Telefon: 070 346 952</p>
        <p id="p5">Email: lovro.mackosek@gmail.com</p>

      </div>
   

      <div
        style="
          height: 50px;
          width: 100%;
          margin-top: -10px;
          display: flex;
          justify-content: center;
          background-color: black;
        "
      >
        <p style="color: white; font-size: 13px; margin-top: 20px;">© 2022 ustvaril Lovro Mackošek</p>
      </div>
    </div>

    <!--mobile sidenav-->
    <div v-if="isScreenSizeMobile">
      <MobileNavBar @clicked-show-detail="clickedShowFullPanel"></MobileNavBar>
      <Sidebar
        v-model:visible="visibleFull"
        :baseZIndex="10000"
        position="full"
      >
        <div class="mobile-navigation-bar">
          <span v-on:click="showSpecifilMobileSection(item)" style="margin-top: 20px" id="nav-title" v-for="item in data" :key="item">
            {{ item }}
          </span>
        </div>
      </Sidebar>
      <MobileCover></MobileCover>

      <div id="O meni" style="padding-bottom: 50px">
        <Resume></Resume>
      </div>


      <div id="Izobrazba in izkušnje" style="background-color: #d9d9d9; padding-top: 5px; padding-bottom: 40px; ">
        <MobileExp></MobileExp>
      </div>

      <MobileProjectsExp id="Znanja"></MobileProjectsExp>
      <div class="test4">
          <h1>Grafični izdelki</h1>
          <div class="row">
            <div class="column">
              <img src="./assets/New folder/1.png" style="width: 100%" />
              <img src="./assets/New folder/2.jpg" style="width: 100%" />
              <img src="./assets/New folder/3.jpg" style="width: 100%" />
              <img src="./assets/New folder/13.jpg" style="width: 100%" />
            </div>
            <div class="column">
              <img src="./assets/New folder/4.jpg" style="width: 100%" />
              <img src="./assets/New folder/5.jpg" style="width: 100%" />
              <img src="./assets/New folder/6.jpg" style="width: 100%" />
              <img src="./assets/New folder/7.jpg" style="width: 100%" />
              <img src="./assets/New folder/12.jpg" style="width: 100%" />
            </div>
            <div class="column">
              <img src="./assets/New folder/8.jpg" style="width: 100%" />
              <img src="./assets/New folder/9.jpg" style="width: 100%" />
              <img src="./assets/New folder/10.jpg" style="width: 100%" />
              <img src="./assets/New folder/11.jpg" style="width: 100%" />
            </div>
          </div>
        </div>
        <div
        id="Kontakt"
        style="height: 160px; width: 100%; padding-top:21px;"
        class="contact-container"
      >
        <p style="margin-top: -30px; font-weight: 500; font-size: 22px">
          Kontakt:
        </p>
        <p id="p2">Lovro Mackošek</p>
        <p id="p4">Telefon: 070 346 952</p>
        <p id="p5">Email: lovro.mackosek@gmail.com</p>
    
      </div>



      <div
        style="
          height: 50px;
          width: 100%;

          display: flex;
          justify-content: center;
          background-color: black;
        "
      >
        <p style="color: white">© 2022 ustvaril Lovro Mackošek1</p>
      </div>
    </div>
     <!--   <select v-model="$i18n.locale">
          <option v-for="locale in $i18n.availableLocales" :key="locale">
            {{ locale }}
          </option>
        </select>
        <p>{{ $t("message.hello") }}</p>

        <div>
          <h5 id="single">Single Selection</h5>
          <SelectButton aria-labelledby="single" />

          <h5 id="multiple">Multiple Selection</h5>
          <SelectButton
            optionLabel="name"
            multiple
            aria-labelledby="multiple"
          />

          <h5 id="custom">Custom Content</h5>
          <SelectButton
            optionLabel="value"
            dataKey="value"
            aria-labelledby="custom"
          >
            <template #option="slotProps">
              <i :class="slotProps.option.icon"></i>
            </template>
          </SelectButton>

          <div>
            <h5 id="single">Single Selection</h5>
            <SelectButton
              :unselectable="false"
              v-model="value1"
              :options="options"
              aria-labelledby="single"
            />

            <h5 id="multiple">Multiple Selection</h5>
            <SelectButton
              v-model="value2"
              :options="paymentOptions"
              optionLabel="name"
              multiple
              aria-labelledby="multiple"
            />

            <h5 id="custom">Custom Content</h5>
            <SelectButton
              v-model="value3"

              :options="justifyOptions"
              unselectable= true
              disabled=true
              optionLabel="value"
              dataKey="value"
              aria-labelledby="custom"
            >
              <template #option="slotProps">
                <i :class="slotProps.option.icon"></i>
              </template>
            </SelectButton>
          </div>
        </div> -->
 



  </div>

</template>

<style>
html {
  scroll-behavior: smooth !important;
}


.mobile-navigation-bar{
  display: flex;
  flex-direction: column;
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
  margin-top: 25px;
  text-align: center;
}

#nav-title:hover {
  color: rgb(0, 162, 255);
  cursor: pointer;
}


#Izobrazba in izkušnje{
  background: url(./assets/imgs/bg.jpg);
}

.contact-container {
  margin-top: 30px;
  line-height: 1;
  text-align: center;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
}

#p1 {
  margin-top: 20px;
}

body {
  margin: 0;
}
.resume-container {
  height: 650px;
  width: 100%;

  /* display: flex;
  align-items: center;
  justify-content: center;*/
  background: white;
}

.test4 {
  background-color: #d9d9d9;
  padding-bottom: 20px;
}

.test4 h1 {
  width: 80%;
  margin: 0 auto;
  padding-top: 30px;
  margin-bottom: 20px;
  font-family: "Roboto", sans-serif;
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
  width: 80%;
  margin: 0 auto;
}

.column {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  max-width: 50%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}
</style>






