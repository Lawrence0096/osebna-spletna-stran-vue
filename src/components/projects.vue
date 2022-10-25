

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
      <template #title>Znanja</template>
      <template #content>
        <div class="text-container">
          <div>
            <p data-v-ca268c73="">• Delo za grafično podjetje (Nejamedia s.p.) 04/2015 do 10/2015</p>
            <p data-v-ca268c73="">• Delo za grafično podjetje (Nejamedia s.p.) 04/2015 do 10/2015</p>
          </div>
          <div>
            <p data-v-ca268c73="">• Delo za grafično podjetje (Nejamedia s.p.) 04/2015 do 10/2015</p>
            <p data-v-ca268c73="">• Delo za grafično podjetje (Nejamedia s.p.) 04/2015 do 10/2015</p>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
.p-card {
  width: 1261px;
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