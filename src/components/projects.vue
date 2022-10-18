

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
          <p style="margin-top: 0px">
            • Delo za grafično podjetje (Nejamedia s.p.) 04/2015 do 10/2015
          </p>
          <p>• Delo za grafično podjetje (Nejamedia s.p.) 04/2015 do 10/2015</p>
          <p>• Delo za grafično podjetje (Nejamedia s.p.) 04/2015 do 10/2015</p>
          <p>• Delo za grafično podjetje (Nejamedia s.p.) 04/2015 do 10/2015</p>
          <p>• Delo za grafično podjetje (Nejamedia s.p.) 04/2015 do 10/2015</p>
          <p>• Delo za grafično podjetje (Nejamedia s.p.) 04/2015 do 10/2015</p>
          <p>• Delo za grafično podjetje (Nejamedia s.p.) 04/2015 do 10/2015</p>
          <p>• Delo za grafično podjetje (Nejamedia s.p.) 04/2015 do 10/2015</p>
          <p>• Delo za grafično podjetje (Nejamedia s.p.) 04/2015 do 10/2015</p>
        </div>
      </template>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
.p-card {
  width: 1261px;
  background: #e9f1f1;
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
}

#header {
  margin-left: 10px;
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
  color: rgb(77, 75, 75);
  font-size: 16px;
}
body {
  margin: 0;
}

.text-container{
  line-height: 1.5;
}

p {
  font-size: 18px;
  font-family: "Nunito Sans", sans-serif;
}
</style>