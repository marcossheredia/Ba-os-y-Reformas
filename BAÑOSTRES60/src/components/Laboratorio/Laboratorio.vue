<script setup>
import imgTraccion1 from '@/assets/imagenes/nuestrasinstalaciones/Laboratorio/_S0A7398.webp'
import imgTraccion2 from '@/assets/imagenes/nuestrasinstalaciones/Laboratorio/_S0A7401.webp'
import imgMetal1    from '@/assets/imagenes/nuestrasinstalaciones/Laboratorio/_S0A7384.webp'
import imgMetal2    from '@/assets/imagenes/nuestrasinstalaciones/Laboratorio/_S0A7391.webp'
</script>


<template>
  <v-container class="py-6 contenedor-centrado">
    <v-row justify="center" class="mb-8 text-center">
      <v-col cols="12">
        <h1 class="title">Laboratorio</h1>
        <v-divider class="mx-auto divider-naranja" :thickness="4" width="100" />
      </v-col>
    </v-row>

    <!-- Texto dentro de recuadro blanco expandido -->
    <v-row justify="center">
      <v-col cols="12" md="10">
        <p class="subtitle">
          Nuestro laboratorio está dotado de los medios necesarios para realizar
          ensayos en metales tanto <b>metalográfico</b> como de <b>tracción</b>,
          que verifica que se cumplen las condiciones necesarias para su uso en los diferentes proyectos.
          Garantizando así la <b>calidad</b> de nuestro trabajo.
        </p>
      </v-col>
    </v-row>

    <!-- Ensayos de Tracción -->
    <v-row align="center" class="mb-10" style="background-color: #f9f9f9;">
      <v-col cols="12" class="text-center mb-6">
        <h2 class="section-title">Ensayo de Tracción</h2>
      </v-col>
      <v-col class="d-flex justify-center" cols="12" md="6">
        <v-img :src="imgTraccion1" class="image" height="350" width="100%" cover />
      </v-col>
      <v-col class="d-flex justify-center" cols="12" md="6">
        <v-img :src="imgTraccion2" class="image" height="350" width="100%" cover />
      </v-col>
    </v-row>

    <!-- Ensayos Metalográficos -->
    <v-row align="center" class="mb-12" style="background-color: #f9f9f9;">
      <v-col cols="12" class="text-center mb-6">
        <h2 class="section-title">Ensayo Metalográfico</h2>
      </v-col>
      <v-col class="d-flex justify-center" cols="12" md="6">
        <v-img :src="imgMetal1" class="image" height="350" width="100%" cover />
      </v-col>
      <v-col class="d-flex justify-center" cols="12" md="6">
        <v-img :src="imgMetal2" class="image" height="350" width="100%" cover />
      </v-col>
    </v-row>

    <!-- Sección contacto -->
    <section class="consulta-section">
      <div class="consulta-container">
        <h3 class="consulta-title mb-4">¿Tienes alguna consulta?</h3>
        <router-link to="/contacto">
          <button class="contact-button">Contáctanos</button>
        </router-link>
      </div>
    </section>
  </v-container>
</template>

<style scoped>
.title {
  font-family: 'Poppins', sans-serif;
  font-size: 2.7rem;
  font-weight: bold;
}

.subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: justify;
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
}

.contenedor-centrado {
  max-width: 1800px;
  margin: 0 auto;
}

.divider-naranja {
  border-color: #F6911D !important;
  opacity: 1;
}

.image {
  border-radius: 12px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  max-width: 100%;
  object-fit: cover;
}

.consulta-section {
  padding: 3rem 1rem;
  text-align: center;
  border-radius: 8px;
}

.consulta-container {
  margin: 0 auto;
}

.consulta-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
}

.contact-button {
  font-size: 1rem;
  background-color: #808990;
  color: #fff;
  padding: 0.6rem 2rem;
  border: 2px solid #f6911d;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Segoe UI', Calibri, sans-serif;
}

.contact-button:hover {
  background-color: #6b7379;
  transform: scale(1.03);
}

@media (max-width: 768px) {
  .image {
    height: 250px !important;
    width: 90% !important;
    margin: 0 auto;
  }

  .subtitle {
    text-align: center !important;
    padding: 1.5rem;
  }

  .title {
    font-size: 2rem;
  }

  .consulta-section {
    padding-bottom: 3rem;
  }
}
</style>
