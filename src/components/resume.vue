

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
        "https://drive.google.com/file/d/1a6HYltlqUvov26j2TjpGgE1407c0qxGu/view";
    },
  },
};
</script>

<template>
  <div>
    <div class="text-container">
      <div class="test">
        <h1>O meni</h1>
        <h2>MOJE OZADJE</h2>
        <p>
          Zanimam se za delo na področju računalništva, saj je računalništvo že
          dolga leta moja strast. Moje izobraževanje me je usposobilo za
          <b>delo v informacijskem sistemu</b> , s tem pa lahko vašemu podjetju
          nudim računalniško podporo in delo z različno programsko opremo. V
          času mojega izobraževanja sem se naučil: ustvarjati nove uporabnike
          (in jim dodeljevali pravice), dodajati in odstranjevati strojno
          opremo, ustvarjati varnostne kopije, posodabljati in instalirati
          programsko opremo, nadzorovati računalniški sistem, osnove upravljanja
          z omrežjem in odpravljanje napak.
        </p>
        <p>
          Za moje diplomsko delo sem se poglobil v razvoj spletnih strani, kjer
          sem dobro spoznal računalniške jezike HTML, CSS in JavaScript in tako
          da se tudi zanimam za <b>razvoj prednjega dela spletnih strani</b>,
          čeprav raznorazna ogrodja kot so »react«, »vue.js«, so še vedno
          noviteta zame . Prav tako pa znam
          <b>ustvarjati multimedijsko vsebino</b> z aktualno programsko opremo
          in imam občutek za design.
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