

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
};
</script>

<template>
  <div class="main-container">
    <Button />
    <div>
        <div class="card-container flex">
            <div class="card primary-box p-ripple" v-ripple>Default</div>
            <div class="card styled-box-green p-ripple" v-ripple>Green</div>
            <div class="card styled-box-orange p-ripple" v-ripple>Orange</div>
            <div class="card styled-box-purple p-ripple" v-ripple>Purple</div>
        </div>
    </div>
    <div>
        <div class="card-container flex">
            <div class="card primary-box p-ripple" v-ripple>Default</div>
            <div class="card styled-box-green p-ripple" v-ripple>Green</div>
            <div class="card styled-box-orange p-ripple" v-ripple>Orange</div>
            <div class="card styled-box-purple p-ripple" v-ripple>Purple</div>
        </div>
    </div>
    hello world
    
    hello
  </div>
</template>

<style lang="scss" scoped>
.p-ripple.purple .p-ink {
    background: rgba(256,39,176,.3);
}
.main-container {
  height: 500px;
  width: 700px;
  background: blue;
}

::v-deep(.card-container) {
    .card {
        width: 75px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
        user-select: none;
        padding: 0;
        background: #ffffff;
        padding: 2rem;
        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
        border-radius: 4px;
        margin-bottom: 2rem;

        &.primary-box {
            background-color: var(--primary-color);
            padding: 0;
            color: var(--primary-color-text);
        }

        &.styled-box-green {
            .p-ink {
                background: rgba(#4baf50, 0.3);
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

</style>