

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
        <div class="project-text">
          <P>© 2021 ustvaril Lovro Mackošek</P>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos distinctio praesentium blanditiis, voluptate dolores omnis adipisci? Nobis numquam ullam aspernatur aliquid nostrum eligendi laboriosam eum ipsum, ipsa iusto? A iste incidunt animi praesentium nulla suscipit ipsa deleniti. Ad esse voluptatum placeat voluptate illo earum expedita ipsum tenetur eveniet! Sapiente ut fuga dignissimos amet fugiat qui libero ea quo officia dolore sunt nam nesciunt temporibus eaque, deserunt repudiandae reiciendis fugit cum, quaerat eius aperiam! Vel iusto modi commodi voluptate ut cumque adipisci quidem consequatur aperiam omnis quas, nostrum alias enim illum itaque sapiente voluptatum nobis, est placeat illo recusandae, asperiores nulla.</p>

        </div>
        <div class="project-pic-2"></div>
      </div>

      <div class="project-container">
        <div class="project-text">
          <P>© 2021 ustvaril Lovro Mackošek</P>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos distinctio praesentium blanditiis, voluptate dolores omnis adipisci? Nobis numquam ullam aspernatur aliquid nostrum eligendi laboriosam eum ipsum, ipsa iusto? A iste incidunt animi praesentium nulla suscipit ipsa deleniti. Ad esse voluptatum placeat voluptate illo earum expedita ipsum tenetur eveniet! Sapiente ut fuga dignissimos amet fugiat qui libero ea quo officia dolore sunt nam nesciunt temporibus eaque, deserunt repudiandae reiciendis fugit cum, quaerat eius aperiam! Vel iusto modi commodi voluptate ut cumque adipisci quidem consequatur aperiam omnis quas, nostrum alias enim illum itaque sapiente voluptatum nobis, est placeat illo recusandae, asperiores nulla.</p>

        </div>
        <div class="project-pic-3"></div>
      </div>

      <div class="project-container">
        <div class="project-text">
          <P>© 2021 ustvaril Lovro Mackošek</P>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos distinctio praesentium blanditiis, voluptate dolores omnis adipisci? Nobis numquam ullam aspernatur aliquid nostrum eligendi laboriosam eum ipsum, ipsa iusto? A iste incidunt animi praesentium nulla suscipit ipsa deleniti. Ad esse voluptatum placeat voluptate illo earum expedita ipsum tenetur eveniet! Sapiente ut fuga dignissimos amet fugiat qui libero ea quo officia dolore sunt nam nesciunt temporibus eaque, deserunt repudiandae reiciendis fugit cum, quaerat eius aperiam! Vel iusto modi commodi voluptate ut cumque adipisci quidem consequatur aperiam omnis quas, nostrum alias enim illum itaque sapiente voluptatum nobis, est placeat illo recusandae, asperiores nulla.</p>

        </div>
        <div class="project-pic-4"></div>-
      </div>
      <div class="project-container">
        <div class="project-text">
          <P>© 2021 ustvaril Lovro Mackošek</P>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos distinctio praesentium blanditiis, voluptate dolores omnis adipisci? Nobis numquam ullam aspernatur aliquid nostrum eligendi laboriosam eum ipsum, ipsa iusto? A iste incidunt animi praesentium nulla suscipit ipsa deleniti. Ad esse voluptatum placeat voluptate illo earum expedita ipsum tenetur eveniet! Sapiente ut fuga dignissimos amet fugiat qui libero ea quo officia dolore sunt nam nesciunt temporibus eaque, deserunt repudiandae reiciendis fugit cum, quaerat eius aperiam! Vel iusto modi commodi voluptate ut cumque adipisci quidem consequatur aperiam omnis quas, nostrum alias enim illum itaque sapiente voluptatum nobis, est placeat illo recusandae, asperiores nulla.</p>

        </div>
     
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
  margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}


.project-text {
    width: 100%;
    line-height: 1.5;
    text-align: justify;
    font-family: "Nunito Sans", sans-serif;
    font-size: 15px;
}


.project-pic {
    height: 400px;
    width: 300px;
    background-image: url(../assets/imgs/webpic2-2.png);
    background-size: cover;
    align-self: center;
}


/*background-image: url(../assets/imgs/project-1.1.png);*/

.project-pic-2 {
    height: 200px;
    width: 100%;
    background-image: url(../assets/imgs/project-1.1.png);

}
.project-pic-3 {
    height: 400px;
    width: 257px;
    background-image: url(../assets/imgs/webpic4.png);
    background-size: cover;
    align-self: center;
}
.project-pic-4 {
    height: 400px;
    width: 257px;
    background-image: url(../assets/imgs/webpic1.png);
    background-size: cover;
    align-self: center;
}

.test {
  font-family: "Roboto", sans-serif;
  font-size: 30px;
}

.middle-container {
  width: 80%;
}
</style>