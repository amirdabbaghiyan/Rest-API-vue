<template>
  <div class="hero container">
    <picture>
      <source media="(max-width:600px)" srcset="../../assets/images/bg-hero-horizontal.png">
      
      <img src="../../assets/images/bg-hero-vertical.png" alt="rest api">
    </picture>
  </div>
</template>

<script setup>
import useTabTitle from '@/hooks/UseTabTitle';
useTabTitle('Home');
</script>

<style>
.hero img {
  object-fit: contain;
  max-height: 55vh;
}
</style>