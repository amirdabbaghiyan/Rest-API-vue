<template>
  <a href='#' class="scroll-up btn-secondary icon-up" :class="[show ? '' : 'hide']"></a>
</template>

<script setup>
import { ref } from "vue";

let show = ref(false);

window.addEventListener('scroll',()=>{
  if (window.scrollY > 500){
    show.value = true;
  } else {
    show.value = false;
  }
});
</script>

<style>
.scroll-up {
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
  position: fixed;
  bottom: 4%;
  right: 2%;
  z-index: 99;
  font-size: 32px;
  color: #fff;
  transition-duration: var(--duration-time);
  backdrop-filter: blur(20px) saturate(1.7);
}
.hide {
  opacity: 0;
  visibility: hidden;
}

/* Responsive */
@media (max-width: 768px) {
  .scroll-up {
    transform: scale(0.8);
  }
}
</style>