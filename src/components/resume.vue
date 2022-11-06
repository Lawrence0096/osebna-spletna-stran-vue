

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
          Zanimam se za delo v računalništvu, 
          hkrati pa imam tudi strast za ustvarjanje 
          interaktivnih multimedijskih vsebin. 
          Po izobrazbi sem inzenir informatike (6. stopnja) in medijski tehnik. 
          Moja zadnja zaposlitev je bila na področju programiranja, 
          kjer smo ustvarjali spletne aplikacije z ogrodjem Angular 
          (oglejte si opise mojih projektov).
           V preteklosti sem pa delal kot računalniški podpornik (informatik), 
           grafični oblikovalec in tehnik na radiju.
        </p>
        <p>
          Kot informatik pa sem predvsem bil tehnični podpornik v podjetju, 
          kjer sem predvsem pomagal uporabnikom, ter nameščal operacijski sisteme Windows 
          na novih računalnikih.  V času mojega izobraževanja sem se naučil ustvarjati nove 
          uporabnike (in jim dodeljevali pravice), dodajati in odstranjevati strojno opremo, 
          ustvarjati varnostne kopije, posodabljati in instalirati programsko opremo, 
          nadzorovati računalniški sistem, osnove upravljanja z omrežjem in odpravljanje napak.
        </p>
        <p>
          Kot medijski tenhik/grafični oblikovalec, 
          sem pa ustvarjal veliko različnih spletnih oglasov, 
          grafičnih podob. 
          Ko sem delal na radiju sem tudi ustvarjal različne promocijke videje, 
          ter pomagal ustvarjati radijske oglase.
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