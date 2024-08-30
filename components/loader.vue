<template>
  <div>
    <div class="wrapper">
        <div class="loader"></div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '~/store/store';

const store = useStore()
</script>

<style lang="scss" scoped>
/* HTML: <div class="loader"></div> */
.loader {
  height: 30px;
  aspect-ratio: 2;
  background:
    radial-gradient(farthest-side,#000 15%,#0000 18%)0 0/50% 100%,
    radial-gradient(50% 100% at 50% 160%,#fff 95%,#0000) 0 0   /50% 50%,
    radial-gradient(50% 100% at 50% -60%,#fff 95%,#0000) 0 100%/50% 50%;
  background-repeat: repeat-x;
  -webkit-mask: radial-gradient(50% 100%,#000 95%,#0000) 0 100%/50% 0% repeat-x;
  animation: l3 1s infinite alternate ease-in;
}
@keyframes l3 {
  0%,
  70% {-webkit-mask-size:50% 100%}
  85% {-webkit-mask-size:50% 0}
  100% {-webkit-mask-size:50% 100%}
}
.wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #4675ff;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
