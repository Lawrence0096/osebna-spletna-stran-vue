

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
      <h1 class="test">{{ $t("message.projects") }}</h1>
      <div class="project-container">
        <div class="project-text">
            <b>{{ $t("message.practical") }}</b>
            <p>{{ $t("message.pro1") }}</p>
            <p>{{ $t("message.access") }} <a href="https://lawrence0096.github.io/Spletna-stran-za-organizacijo-Argus/"> {{ $t("message.here") }}</a></p>
        </div>
        <div class="project-pic"></div>
      </div>

     <div class="project-container">
        <div class="project-text">
          <b>{{ $t("message.support") }}</b>
          <p>{{ $t("message.pro2") }}</p>
        </div>
        <div class="project-pic-2"></div>
      </div>

      <div class="project-container">
        <div class="project-text">
          <b>{{ $t("message.europe") }}</b>
          <p>{{ $t("message.pro3") }}</p>
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
    box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 38%);
}


/*background-image: url(../assets/imgs/project-1.1.png);*/

.project-pic-2 {
    height: 500px;
    width: 100%;
    background-image: url(../assets/imgs/project-1.1.png);
    background-size: cover;
    box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 38%);
}
.project-pic-3 {
    height: 500px;
    width: 100%;
    background-image: url(../assets/imgs/webpic3.png);
    background-size: cover;
    box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 38%);
}
.project-pic-4 {
    height: 535px;
    width: 35%;
    background-image: url(../assets/imgs/webpic1.png);
    background-size: cover;
    align-self: center;
    box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 38%);
}

.test {
  font-family: "Roboto", sans-serif;
  font-size: 30px;
}

.middle-container {
  width: 80%;
}
</style>