<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar/Navbar.vue'
import Footer from './components/footer/footer.vue'
import CookieConsent from './components/Cookies/CookieConsent.vue';


</script>

<template>
  <v-app>
    <Navbar />
    <v-main>
      <RouterView />
    </v-main>
    <Footer></Footer>
    <CookieConsent />
  </v-app>
</template>

<style>
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
</style>
