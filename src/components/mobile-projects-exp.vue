

<script>
export default {
  name: "mobile-projects-exp",
  components: {},
  directives: {},
  methods: {},
};
</script>

<template>
  <div class="exp-container">
    <div class="middle-container">
      <h1 class="test">Projekti</h1>
      <div class="project-container">
        <div class="project-text">
            <P>© 2021 ustvaril Lovro Mackošek</P>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos distinctio praesentium blanditiis, voluptate dolores omnis adipisci? Nobis numquam ullam aspernatur aliquid nostrum eligendi laboriosam eum ipsum, ipsa iusto? A iste incidunt animi praesentium nulla suscipit ipsa deleniti. Ad esse voluptatum placeat voluptate illo earum expedita ipsum tenetur eveniet! Sapiente ut fuga dignissimos amet fugiat qui libero ea quo officia dolore sunt nam nesciunt temporibus eaque, deserunt repudiandae reiciendis fugit cum, quaerat eius aperiam! Vel iusto modi commodi voluptate ut cumque adipisci quidem consequatur aperiam omnis quas, nostrum alias enim illum itaque sapiente voluptatum nobis, est placeat illo recusandae, asperiores nulla.</p>

        </div>
        <div class="project-pic"></div>
      </div>

      <div class="project-container">
        <div class="project-text"></div>
        <div class="project-pic"></div>
      </div>

      <div class="project-container">
        <div class="project-text"></div>
        <div class="project-pic"></div>
      </div>

      <div class="project-container">
        <div class="project-text"></div>
        <div class="project-pic"></div>
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
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.project-text {
    width: 100%;
}

.project-pic {
    height: 200px;
    width: 100%;
    background-image: url(../assets/imgs/project-1.1.png);
}

.test {
  font-family: "Roboto", sans-serif;
  font-size: 30px;
}

.middle-container {
  width: 80%;
}
</style>