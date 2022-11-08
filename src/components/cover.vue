<template>
  <div class="header">
    <div class="header-picture">
     <div class="hp-text-container">
        <p id="n1">{{ $t("message.hello") }}</p>
        <p id="n2">Lovro Mackošek</p>
        <p id="n3">{{ $t("message.education") }}</p>
      </div>
    </div>
   <div class="personal-info">
     <img class='cv-img' src="../assets/imgs/3.jpg" alt='img' />
      <div style="width: 270px; line-height: 1;" class="text-container">
        <p>{{ $t("message.education") }}</p>
        <p>{{ $t("message.location") }}</p>
        <p>lovro.mackosek@gmail.com</p>
        <p>070 346 952</p>
      </div>
  
    </div>
  
  </div>
</template>
  
  <script>



export default {
  name: "Cover",
  methods: {},
 
};
</script>
  
<style lang="css" scoped>
    .header {
    display: flex;
    height: 600px;
    margin-top: 80px;
    position: relative;

    }

    .header  div:nth-of-type(1) {flex-grow: 3;}    
    .header  div:nth-of-type(2) {flex-grow: 0.5;}



    .text-container{
      margin-top: 10px;
      font-family: "Roboto", sans-serif;
    }

    .header-picture {
    background-image: url(../assets/imgs/2581470.jpg);
    background-size: cover;
    
    display: flex;
    align-items: flex-end;
    }

    .personal-info {
    min-width: 300px!important;
    background-color: #40464b;
    color: white;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    }
    body {
  margin: 0
}

    .hp-text-container {
    margin-bottom: 20px;
    line-height: 1.5;
    }

    #n3 {
    font-family: "Righteous", cursive;
    font-size: 20px;
    margin: 0px;
    }

    #n2 {
    font-family: "Roboto", sans-serif;
    font-size: 70px;
    margin: 0px;
    }

    #n1 {
    font-family: "Lato", sans-serif;
    font-family: "Nunito Sans", sans-serif;
    font-size: 30px;
    margin: 0px;
    }

    #n1,
    #n2,
    #n3 {
    margin-left: 265px;
    }

    .cv-img{

    height: 183px;
    width: 167px;
    border-radius: 50%;
    margin-top: 30px;
}

    




</style>