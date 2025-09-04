<script setup>
import ServOfrecidos from '@/components/Servicios/ServOfrecidos.vue';
import ServiciosIndustriales from '@/components/Servicios/ServiciosIndustriales.vue';
import { onMounted } from 'vue';

// Optimizar para SEO
onMounted(() => {
  // Actualizar el título de la página
  document.title = 'Servicios Industriales | Soldadura y Acero Inoxidable | SSAB450';
  
  // Agregar meta descripción para SEO
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Servicio profesional de soldadura industrial, soldadura MIG MAG robotizada, acero inoxidable, brazing y tratamiento de metales. Tecnología puntera y optimización de procesos industriales.');
  }
});
</script>

<template>

  <!-- Contenedor principal de la vista de servicios -->
  <v-sheet class="servicios-header py-8" color="#f5f5f5">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h1 class="text-h3 font-weight-bold position-relative d-inline-block">GRIFOS LAVABO</h1>
        </v-col>
        <v-col cols="12" md="10" lg="8">
          <p class="servicios-intro text-body-1">
            Grifos <strong>Grifos</strong>Grifos<strong>Grifos</strong>Grifos<strong>Grifos</strong>Grifos<strong>Grifos</strong>Grifos
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
  
    <v-container class="py-8">
      <v-row>
        <!-- Arriba izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src="src/assets/imagenes/Grifos/Gr 1/1.1.JPG"
            alt="Descripción de la imagen 1"
            height="300"
            contain
            class="cursor-pointer"
            @click="openImage('src/assets/imagenes/Grifos/Gr 1/1.1.JPG')"
          />
        </v-col>

        <!-- Arriba derecha: texto/información -->
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="pa-4 text-center">
            <h2>GRIFO 1.1.1 MODELO XZY</h2>
            <p>
              Grifo que suelta agua de mi casa.  
              Funciona de forma muy correcta levantas y sale agua.
            </p>
          </div>
        </v-col>

        <!-- Abajo izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src="src/assets/imagenes/Grifos/Gr 1/1.2.JPG"
            alt="Descripción de la imagen 2"
            height="300"
            contain
            class="cursor-pointer"
            @click="openImage('src/assets/imagenes/Grifos/Gr 1/1.2.JPG')"
          />
        </v-col>

        <!-- Abajo derecha: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src="src/assets/imagenes/Grifos/Gr 1/1.3.JPG"
            alt="Descripción de la imagen 3"
            height="300"
            contain
            class="cursor-pointer"
            @click="openImage('src/assets/imagenes/Grifos/Gr 1/1.3.JPG')"
          />
        </v-col>
      </v-row>
    </v-container>

      
    <v-container class="py-8">
      <v-row>
        <!-- Arriba izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src="src/assets/imagenes/Grifos/Gr 1/1.1.JPG"
            alt="Descripción de la imagen 1"
            height="300"
            contain
            class="cursor-pointer"
            @click="openImage('src/assets/imagenes/Grifos/Gr 1/1.1.JPG')"
          />
        </v-col>

        <!-- Arriba derecha: texto/información -->
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="pa-4 text-center">
            <h2>GRIFO 1.1.1 MODELO XZY</h2>
            <p>
              Grifo que suelta agua de mi casa.  
              Funciona de forma muy correcta levantas y sale agua.
            </p>
          </div>
        </v-col>

        <!-- Abajo izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src="src/assets/imagenes/Grifos/Gr 1/1.2.JPG"
            alt="Descripción de la imagen 2"
            height="300"
            contain
            class="cursor-pointer"
            @click="openImage('src/assets/imagenes/Grifos/Gr 1/1.2.JPG')"
          />
        </v-col>

        <!-- Abajo derecha: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src="src/assets/imagenes/Grifos/Gr 1/1.3.JPG"
            alt="Descripción de la imagen 3"
            height="300"
            contain
            class="cursor-pointer"
            @click="openImage('src/assets/imagenes/Grifos/Gr 1/1.3.JPG')"
          />
        </v-col>
      </v-row>
    </v-container>
    
</template>

<style scoped>
.hero-image-section {
  position: relative;
  background-color: #333; /* Color fallback si la imagen no carga */
}

/* Overlay para mejorar contraste si se añade texto después */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));
  z-index: 1;
}

.servicios-intro {
  line-height: 1.8;
  color: #555;
  margin: 1.5rem auto 0;
  text-align: center;
}

/* Línea decorativa bajo el título */
h1::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background-color: #F6911D;
}

/* Soporte para impresión */
@media print {
  .hero-image-section {
    display: none;
  }
}
</style>

<style scoped>
.hero-image-section {
  position: relative;
  background-color: #333; /* Color fallback si la imagen no carga */
}

/* Overlay para mejorar contraste si se añade texto después */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));
  z-index: 1;
}

.servicios-intro {
  line-height: 1.8;
  color: #555;
  margin: 1.5rem auto 0;
}

/* Línea decorativa bajo el título */
h1::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background-color: #F6911D;
}

/* Soporte para impresión */
@media print {
  .hero-image-section {
    display: none;
  }
}
</style>
