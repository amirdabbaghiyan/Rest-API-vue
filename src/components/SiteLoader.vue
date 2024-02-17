<template>
    <div class="site-loader" :class="{'hide-loader' : load}">
        <div class="loader"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
let load = ref(false);

document.onreadystatechange = ()=>{
    if (document.readyState == "complete") {
      load.value = true;
    }
};
</script>

<style>
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
.site-loader {
    background-color: var(--primary-color);
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 1s;
}
.hide-loader {
    visibility: hidden;
    opacity: 0;
}
.loader {
    width: 40px;
    height: 40px;
    border: 2px solid var(--secondary-color);
    border-top: 2px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
</style>