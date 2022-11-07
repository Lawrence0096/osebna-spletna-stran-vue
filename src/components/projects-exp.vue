

<script>
export default {
  name: "Projects-exp",
  components: {},
  directives: {},
  methods: {},
};
</script>

<template>
  <div class="exp-container">
    <div class="middle-container">
      <h1 class="test">Projekti</h1>
      <div class="project-container">
        <div class="project-text">
            <b>Praktični izdelek za diplomsko delo</b>
            <p>Za diplomsko delo sem ustvaril preprosto statično stran za namišljeno podjetje Argus. Spletna stran večinoma vsebuje HTML in CSS. Z JavaScriptom sem na spletni strani ustvaril navigacijo, preprosti kalkulator, zemljevid in prikazovalnik PDF-jev s pomočjo zunanje knjižnice.</p>
            <p>Do spletne strani lahko dostopate <a href="https://lawrence0096.github.io/Spletna-stran-za-organizacijo-Argus/page1.html">tukaj</a></p>
        </div>
        <div class="project-pic"></div>
      </div>

     <div class="project-container">
        <div class="project-text">
          <b>Aplikacija za podporo uporabnikom</b>
          <p>Moj prvi projekt v angularju je bila preprosta spletna aplikacija, ki je bila namenjena za izboljšanje tehnične podpore. Uporabnik je videl najbolj ključne informacije stranke in različne statuse. Če se je pri stranki zgodila kakšna težava, je uporabnik videl določene informacije obarvane s specifično barvo. Informacije so se posodabljale vsakih petih minut. Ko je uporabnik videl določene probleme, je lahko to informacijo nazaj poslal na strežnik.</p>
        </div>
        <div class="project-pic-2"></div>
      </div>

      <div class="project-container">
        <div class="project-text">
          <b>Aplikacija za prikazovanje vozil po Evropi</b>
          <p>Moj drugi projekt v angularju, je bila bolj kompleksna aplikacija, kjer se uporabljala knjižnica Leaflet za prikazovanje lokacije posameznih vozil po Evropi. Uporabnik je lahko videl, kje se vozilo nahaja, ter pridobil specifične informacije o tistem vozilu, hkrati pa je v listi vozil lahko poiskal specifično vozilo, za katerega je imel interes, lahko je pa tudi sortiral listo vozil po določenih parametrih. Uporabnik je lahko tudi pošiljal določena sporočila tem vozilom, videl kakšne temperature so v tem vozilu in ustvarjal določena poročila za vozila. Uporabnik je lahko v aplikaciji tudi izbiral med tremi različnimi jeziki. Aplikacija je bila tudi prirejena za mobilno različico.</p>
        </div>
        <div class="project-pic-3"></div>
      </div>

      <div class="project-container-2">
       
        <div class="project-pic-4"></div>-
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.exp-container {
  display: flex;
  gap: 50px;
  justify-content: center;
}

.project-container {
    margin-top: 0px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.project-container-2 {
    margin-top: 0px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.project-text {
    width: 100%;
    line-height: 1.5;
    text-align: justify;
    font-family: "Nunito Sans", sans-serif;
    font-size: 20px;
}
.test p[data-v-be49dd14] {
    line-height: 1.5;
    text-align: justify;
    font-family: "Nunito Sans", sans-serif;
    font-size: 20px;
}

a{
  color: #1975ff;
  text-decoration: none;
}


.project-pic {
    height: 682px;
    width: 100%;
    background-size: cover;
    background-image: url(../assets/imgs/webpic2.png);

}


/*background-image: url(../assets/imgs/project-1.1.png);*/

.project-pic-2 {
    height: 500px;
    width: 100%;
    background-image: url(../assets/imgs/project-1.1.png);
    background-size: cover;
}
.project-pic-3 {
    height: 445px;
    width: 100%;
    background-image: url(../assets/imgs/webpic3.png);
    background-size: cover;
}
.project-pic-4 {
    height: 486px;
    width: 35%;
    background-image: url(../assets/imgs/webpic1.png);
    background-size: cover;
    align-self: center;
}

.test {
  font-family: "Roboto", sans-serif;
  font-size: 30px;
}

.middle-container {
  width: 80%;
}
</style>