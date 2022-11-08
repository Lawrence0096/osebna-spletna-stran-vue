

<script>
import Card from "primevue/card";
export default {
  name: "MobileExp",
  components: {
    Card,
  },
  directives: {},
  methods: {},
};
</script>

<template>
  <div style="margin-top: 50px" class="exp-container">
    
    <Card style="margin-top: 0px">
      <template #title>{{ $t("message.educationHeader") }}</template>
      <template  #content>
        <div style="line-height: 1.5; font-size: 16px;">
          <p style="margin-top: -5px">{{ $t("message.multimediaTech") }}</p>
          <p>{{ $t("message.IT") }}</p>
        </div>
        
      </template>
    </Card>
    <Card style="margin-top: 0px">
      <template #title>{{ $t("message.exp") }}</template>
      <template #content>
        <div style="line-height: 1.5; font-size: 14px; ">
          <p style="margin-top: -5px">{{ $t("message.peter") }}</p>
            <p>{{ $t("message.neja") }}</p>
            <p>{{ $t("message.drago") }}</p>
            <p>{{ $t("message.drago2") }}</p>
            <p>{{ $t("message.radio") }}</p>
            <p>{{ $t("message.invoice") }}</p>
            <p>{{ $t("message.navteh") }}</p>
        </div>
            
      </template>
    </Card>
    <Card style="margin-top: 0px">
      <template #title>{{ $t("message.skillsInt") }}</template>
      <template #content>
        <div style="line-height: 1.5; font-size: 14px; ">
          <b>{{ $t("message.skills") }}</b> 
            <p>• HTML, CSS, JavaScript (TypeScript)</p>
            <p>{{ $t("message.angular") }}r</p>
            <p>{{ $t("message.vue") }}</p>
            <p>{{ $t("message.REST") }}</p>
            <p>{{ $t("message.git") }}</p>
            <p>{{ $t("message.UX") }}</p>
            <p>{{ $t("message.Adobe") }}</p>
            <p>{{ $t("message.CompSuppport") }}</p>
            <p>{{ $t("message.linux") }}</p>
          </div>
          <div style="font-size: 14px">
            <br>
            <b>{{ $t("message.interests") }}</b> 
            <p>{{ $t("message.sys") }}</p>

            <p>{{ $t("message.cms") }}</p>
            <p>{{ $t("message.wordpress") }}</p>
        </div>
      </template>
    </Card>


  </div>
</template>

<style lang="scss" scoped>
.p-card {
  width: 90%;
  color: black;
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
  background: white;
}

#header {
  margin-left: 10px;
}

.exp-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  align-content: center;
  

}

.p-card .p-card-content {
    padding: 0rem 0!important;
}

.header {
font-family: Arial, Helvetica, sans-serif;
  padding: 0px;
  text-align: left;
  color: rgb(77, 75, 75);
  font-size: 16px;
}
body {
  margin: 0
}

p {
  
  font-family: "Nunito Sans", sans-serif;
}

</style>