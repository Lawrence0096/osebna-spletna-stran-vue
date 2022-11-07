

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
      <template #title>Izobrazba</template>
      <template  #content>
        <div style="line-height: 1.5; font-size: 16px;">
          <p style="margin-top: -5px">• Medijski tehnik</p>
          <p>• Inženir informatike</p>
        </div>
        
      </template>
    </Card>
    <Card style="margin-top: 0px">
      <template #title>Izkušnje</template>
      <template #content>
        <div style="line-height: 1.5; font-size: 14px; ">
          <p style="margin-top: -5px">• Delo v foto studiju (FotoPeter s.p.) 05/2014 do 09/2014</p>
            <p>• Delo za grafično podjetje (Nejamedia s.p.) 04/2015 do 10/2015</p>
            <p>• Pomoč pri organizaciji prireditev (Drago Mackošek s.p.) 2015-2020</p>
            <p>• Občasno oblikovanje grafičnih podob (Drago Mackošeks.p.) 2015-2020</p>
            <p>• Delo na radiju (Radio Štarjerski val d.o.o.) 04/2019 do 08/ 2019</p>
            <p>• Popravljanje računalnikov (INVOICE d.o.o.) 01/2021 do 03 2021.</p>

        </div>
            
      </template>
    </Card>
    <Card style="margin-top: 0px">
      <template #title>Izkušnje</template>
      <template #content>
        <div style="line-height: 1.5; font-size: 14px; ">
          <b>Znanja</b> 
            <p>• HTML, CSS, JavaScript (TypeScript)</p>
            <p>• Ogrodje Angular</p>
            <p>• Poznavanje ogrodja Vue in React (prevsem Vue)</p>
            <p>• Delanje z REST klici</p>
            <p>• Delo z gitom in gitlabom/githubom</p>
            <p>• Ustvarjanje UI/UX rešitev</p>
            <p>• Delanje z Adobe Suitom (Photoshop, Illustrator, Premiere, Audition, XD)</p>
            <p>• Računalniška podpora</p>
            <p>• Delo z Mac, Windows ali Linux operacijskim sistemom</p>
          </div>
          <div>
            <br>
           <b>Zanimanja</b> 
            <p>• Sistemska administracija</p>

            <p>• CMS (Content Management System)</p>
            <p>• Delo z wordpressom</p>
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