<template>
  <div class="navigation-bar">
    <span @click="showDetailModal(item)" id="nav-title" v-for="item in headers" :key="item">
      {{ item }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Nav-bar",
  props: {
    headers: String,
  },
  methods: {
    showDetailModal(product) {
        this.$emit('clicked-show-detail', product);
    },
  },
};
</script>

<style lang="css" scoped>
.headers {
  margin-left: 5px;
}

* {
  font-family: "Roboto", sans-serif;
}

.navigation-bar {
  position: fixed;
  z-index: 20;
  top: 0;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(19, 18, 18);
  font-family: "Nunito Sans", sans-serif;
  color: white;
  gap: 30px;
  font-size: 16px;
}

#nav-el:hover {
  cursor: pointer;
  color: rgb(0, 162, 255);
}

#nav-title:hover {
  color: rgb(0, 162, 255);
  cursor: pointer;
}
body {
  margin: 0
}
</style>