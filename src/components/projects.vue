

<script>
import Card from "primevue/card";
export default {
  name: "Projects",
  components: {
    Card,
  },
  directives: {},
  methods: {},
};
</script>

<template>
  <div class="exp-container">
    <Card style="margin-top: 100px">
      <template #header> </template>
      <template #title>Znanja in zanimanja</template>
      <template #content>
        <div class="text-container">
          <div>
           <b>Znanja</b> 
            <p data-v-ca268c73="">• HTML, CSS, JavaScript</p>
            <p data-v-ca268c73="">• Ogrodje Angular</p>
            <p>• Poznavanje ogrodja Vue in React (prevsem Vue)</p>
            <p>• Delanje z REST klici</p>
            <p>• Delo z gitom in gitlabom/githubom</p>
            <p>• Ustvarjanje UI/UX rešitev</p>
            <p>• Delanje z Adobe Suitom (Photoshop, Illustrator, Premiere, Audition, XD)</p>
            <p>• Računalniška podpora</p>
            <p>• Delo z Mac, Windows ali Linux operacijskim sistemom</p>
          </div>
          <div>
           <b>Zanimanja</b> 
            <p data-v-ca268c73="">• Sistemska administracija</p>

            <p data-v-ca268c73="">• CMS (Content Management System)</p>
            <p>• Delo z wordpressom</p>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
.p-card {
  width: 1070px;
  background: white;
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
  color: black;
}

.p-card-title {
    color: #2196F3!important;
}

#header {
  margin-left: 10px;
  color: #2196F3!important;
}

#title {
  color: #2196F3!important;
}

.exp-container {
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
}

.header {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0px;
  text-align: left;

  font-size: 16px;
}
body {
  margin: 0;
}

.text-container{
  line-height: 1.5;
  gap: 40px;
  display: flex;
}

p {
  font-size: 18px;
  font-family: "Nunito Sans", sans-serif;
}
</style>