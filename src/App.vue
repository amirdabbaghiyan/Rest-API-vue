<template>
  <SiteLoader/>
  
  <header id="header">
    <Header />
  </header>

  <main id="main">
    <router-view></router-view>
  </main>

  <footer id="footer">
    <Footer />
  </footer>
</template>

<script setup>
// components
import Header from './parts/Header';
import Footer from './parts/Footer';
import SiteLoader from './components/SiteLoader.vue';
</script>