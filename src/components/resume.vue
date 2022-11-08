

<script>
import Ripple from "primevue/ripple";
import Button from "primevue/button/sfc";
export default {
  name: "Resume",
  components: {
    Button,
  },
  directives: {
    ripple: Ripple,
  },
  methods: {
    showGoToLink() {
      document.location =
        "https://drive.google.com/file/d/1fjhKuyvdQU-p4w-yv-6dQmLCBmPwF-1t/view";
    },
  },
};
</script>

<template>
  <div>
    <div class="text-container">
      <div class="test">
        <h1>{{ $t("message.about") }}</h1>
        <h2>{{ $t("message.back") }}</h2>
        <p>
          {{ $t("message.intPar1") }}
        </p>
        <p>
          {{ $t("message.intPar2") }}
        </p>
        <p>
          {{ $t("message.intPar3") }}
        </p>
      </div>
    </div>

    <div class="card-container flex">
      <Button @click="showGoToLink()">Dostop do CV-ja</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.p-ripple.purple .p-ink {
  background: rgba(256, 39, 176, 0.3);
}

.text-container {

  display: flex;
  justify-content: center;
}

::v-deep(.card-container) {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  .card {
    cursor: pointer;
    width: 85px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    user-select: none;
    padding: 0;
    background: #ffffff;
    padding: 1rem;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    margin-bottom: 2rem;

    &.primary-box {
      background-color: var(--primary-color);
      padding: 0;
      color: var(--primary-color-text);
    }

    &.styled-box-green {
      margin-top: 5px;
      background: #71aeda;
      .p-ink {
        background: rgba(#ffffff, 0.3);
      }
    }

    &.styled-box-orange {
      .p-ink {
        background: rgba(#ffc106, 0.3);
      }
    }

    &.styled-box-purple {
      .p-ink {
        background: rgba(#9c27b0, 0.3);
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

.test {
  width: 90%;
  margin-top: 30px;
}

.test h1 {
  font-family: "Roboto", sans-serif;
  font-size: 30px;
}

.test h2 {
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
}

.test p {
  line-height: 1.5;
  text-align: justify;
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
}

@media screen and (max-width: 600px) {  .test p {
    font-size: 14px;
  }
}

</style>