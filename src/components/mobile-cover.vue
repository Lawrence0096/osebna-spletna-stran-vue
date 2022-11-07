<template>
  <div class="header">
    <div class="personal-info">
      <div style="width: 270px;  line-height: 1" class="text-container">
        <img class='cv-img' src="../assets/imgs/3.jpg" alt='img' />
        <h2>Lovro Mackošek</h2>
        <p>Inženir Infromatike, medijski tehnik</p>
        <p>IT engineer, front-end developer, kreator multimedijskih vsebin</p>
        <p>Šentjur pri Celju</p>
        <p>lovro.mackosek@gmail.com</p>
        <p>070 346 952</p>
      </div>
    </div>
  </div>
</template>
    
    <script>
export default {
  name: "MobileCover",
  methods: {},
};
</script>
    
  <style lang="css" scoped>
.header {
  display: flex;
  height: 500px;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-image: url(../assets/imgs/1.jpg);
}
.text-container {
  margin-top: 10px;
  font-family: "Roboto", sans-serif;
  background: rgb(219, 219, 219);
  align-items: center;
  text-align: center;
  padding: 10px;
}

.header-picture {
  background-image: url(../assets/imgs/2581470.jpg);
  background-size: cover;
  display: flex;
  align-items: flex-end;
}
X
.personal-info {
  width: 90%;
  background-color: #60696f;;
  color: white;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}
body {
  margin: 0;
}

.hp-text-container {
  margin-bottom: 20px;
  line-height: 1.5;
}

#n3 {
  font-family: "Righteous", cursive;
  font-size: 15px;
  margin: 0px;
}

#n2 {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  margin: 0px;
}

#n1 {
  font-family: "Lato", sans-serif;
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  margin: 0px;
}

#n1,
#n2,
#n3 {
  margin-left: 265px;
}

.cv-img {
  height: 236px;
  width: 210px;
  border-radius: 50%;
  margin-top: 30px;
}

.cv-img {
    height: 179px;
    width: 159px;
    border-radius: 50%;
    margin-top: 30px;
}

</style>