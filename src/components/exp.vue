

<script>
import Card from "primevue/card";
export default {
  name: "Exp",
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
      <template #title>{{ $t("message.educationHeader") }}</template>
      <template  #content>
        <div style="line-height: 1.5; font-size: 20px;">
          <p style="margin-top: -5px">{{ $t("message.multimediaTech") }}</p>
          <p>{{ $t("message.IT") }}</p>
        </div>
        
      </template>
    </Card>
    <Card style="margin-top: 100px">
      <template #title>{{ $t("message.exp") }}</template>
      <template #content>
        <div style="line-height: 1.5; font-size: 18px; ">
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

  </div>

  
  
</template>

<style lang="scss" scoped>
.p-card {
  width: 500px;
  color: black;
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
  background: white;
}


.p-card .p-card-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #2196F3;
}

/*#2196F3*/ 

#header {
  margin-left: 10px;
}

.exp-container {
  display: flex;
  gap: 60px;
  justify-content: center;

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