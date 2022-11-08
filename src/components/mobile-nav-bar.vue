<template>
  <div class="navigation-bar">
    <div>
      <SelectButton
        class="select-lang"
        style="transform: scale(0.53)"
        :unselectable="false"
        v-model="$i18n.locale"
        :options="$i18n.availableLocales"
        aria-labelledby="single"
      />
    </div>
    <div>
      <Button
      style="margin-right: 10px"
      icon="pi pi-bars"
      @click="showDetailModal(true)"
    />
    </div>

   
  </div>
</template>
  
  <script>
import Button from "primevue/button";

export default {
  name: "Nav-bar",
  props: {
    headers: String,
  },
  methods: {
    showDetailModal(product) {
      this.$emit("clicked-show-detail", product);
    },
  },
  components: {
    Button,
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

h3 {
  font-family: "Times New Roman", Times, serif;
}

.navigation-bar {
  position: fixed;
  z-index: 20;
  top: 0;
  height: 52px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: right;
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

.p-button:enabled:hover {
  background: rgb(19, 18, 18);
  border-color: rgb(19, 18, 18);
}

#nav-title:hover {
  color: rgb(0, 162, 255);
  cursor: pointer;
}

.p-button {
  color: #ffffff;
  background: rgb(19, 18, 18);
  border: 1px solid rgb(19, 18, 18);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s,
    box-shadow 0.2s;
  border-radius: 3px;
}

.select-lang {
  z-index: 30;
  margin-top: -19px;
}

body {
  margin: 0;
}
</style>