

<script>
import Ripple from 'primevue/ripple';
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
    showGoToLink(){
        document.location= 'https://drive.google.com/file/d/1a6HYltlqUvov26j2TjpGgE1407c0qxGu/view';
    }
  },

};
</script>

<template>
  <div class="main-container">
    <div class="text-container">
        hello
    </div>
    <div>
        <div class="card-container flex">
            <div @click="showGoToLink()" class="card styled-box-green p-ripple" v-ripple>Green</div>
        </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.p-ripple.purple .p-ink {
    background: rgba(256,39,176,.3);
}
.main-container {
  height: 500px;
  width: 900px;
  background-color: rgb(187, 187, 243);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text-container{
        width: 500px;
        height: 300px;
        background: #2735b0;
    }

::v-deep(.card-container) {
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
        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
        border-radius: 4px;
        margin-bottom: 2rem;

        &.primary-box {
            background-color: var(--primary-color);
            padding: 0;
            color: var(--primary-color-text);
        }

        &.styled-box-green {
            margin-top: 5px;
            background: #9c27b0;
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


body {
  margin: 0
}
</style>