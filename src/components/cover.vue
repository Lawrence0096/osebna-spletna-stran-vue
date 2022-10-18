<template>
  <div class="header">
    <div class="header-picture">
     <div class="hp-text-container">
        <p id="n1">Pozdravljeni moje ime je:</p>
        <p id="n2">Lovro Mackošek</p>
        <p id="n3">Inženir Infromatike, medijski tehnik</p>
      </div>
    </div>
   <div class="personal-info">
     <img class='cv-img' src="../assets/imgs/3.jpg" alt='img' />
      <div style="width: 270px; line-height: 1;" class="text-container">
        <p>Inženir Infromatike, medijski tehnik</p>
        <p>IT engineer, Front-end web Developement, Multimedia designer</p>
        <p>Šentjur pri Celju</p>
        <p>lovro.mackosek@gmail.com</p>
        <p>070 346 952</p>
      </div>
  
    </div>
   <!-- <div class="about-me">
      <h1 id="h11">O meni</h1>
      <h2>MOJE OZADJE</h2>
      <p>
        Zanimam se za delo na področju računalništva, saj je računalništvo že
        dolga leta moja strast. Moje izobraževanje me je usposobilo za
        <b>delo v informacijskem sistemu</b> , s tem pa lahko vašemu podjetju
        nudim računalniško podporo in delo z različno programsko opremo. V času
        mojega izobraževanja sem se naučil: ustvarjati nove uporabnike (in jim
        dodeljevali pravice), dodajati in odstranjevati strojno opremo,
        ustvarjati varnostne kopije, posodabljati in instalirati programsko
        opremo, nadzorovati računalniški sistem, osnove upravljanja z omrežjem
        in odpravljanje napak.
      </p>
      <p id="push-p">
        Za moje diplomsko delo sem se poglobil v razvoj spletnih strani, kjer
        sem dobro spoznal računalniške jezike HTML, CSS in JavaScript in tako da
        se tudi zanimam za <b>razvoj prednjega dela spletnih strani</b>, čeprav
        raznorazna ogrodja kot so »react«, »vue.js«, so še vedno noviteta zame .
        Prav tako pa znam <b>ustvarjati multimedijsko vsebino</b> z aktualno
        programsko opremo in imam občutek za design.
      </p>
    </div>--> 
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
    background-size: contain;
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
    height: 236px;
    width: 210px;
    border-radius: 50%;
    margin-top: 30px;
}

    




</style>