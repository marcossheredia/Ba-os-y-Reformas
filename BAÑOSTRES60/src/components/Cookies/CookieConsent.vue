<script setup>
import { ref, onMounted } from 'vue';

const showBanner = ref(false);

onMounted(() => {
  const accepted = localStorage.getItem('cookieConsentAccepted');

  // Si NO ha aceptado aún, mostramos el banner
  if (!accepted || accepted !== 'true') {
    showBanner.value = true;
  }
});

const acceptCookies = () => {
  localStorage.setItem('cookieConsentAccepted', 'true');
  showBanner.value = false;
};
</script>

<template>
  <transition name="slide-up">
    <div v-if="showBanner" class="cookie-banner">
      <div class="cookie-container">
        <div class="cookie-text">
          Utilizamos cookies para mejorar tu experiencia en nuestro sitio. Al continuar navegando, aceptas nuestra
          <a href="/politica-de-cookies" target="_blank">política de cookies</a>.
        </div>
        <button class="cookie-button" @click="acceptCookies">Aceptar</button>
      </div>
    </div>
  </transition>
</template>



<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #1e1e1e;
  color: white;
  z-index: 9999;
  padding: 1rem 1.5rem;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.3);
}

.cookie-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.cookie-text {
  font-size: 0.95rem;
  line-height: 1.4;
}

.cookie-text a {
  color: #f6911d;
  text-decoration: underline;
}

.cookie-button {
  background-color: #f6911d;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cookie-button:hover {
  background-color: #d67600;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
