<template>
  <v-container class="py-6 contenedor-centrado">
    <!-- Título -->
    <v-row justify="center" class="mb-8 text-center">
      <v-col cols="12">
        <h1 class="title">Descubre nuestras Instalaciones</h1>
        <v-divider class="mx-auto divider-naranja" :thickness="4" width="100" />
      </v-col>
    </v-row>

    <!-- Descripción -->
    <v-row justify="center" class="mb-10">
      <v-col cols="12" md="10">
        <div class="descripcion-box">
          <p class="subtitle">
            Las instalaciones de <strong>SSAB</strong> están cuidadosamente diseñadas y configuradas para 
            <strong>rentabilizar los procesos de producción</strong>, ofreciendo un entorno 
            <strong>eficiente y adaptado</strong> que facilita la labor a nuestros operarios y garantiza resultados de calidad.
          </p>
        </div>
      </v-col>
    </v-row>

    <!-- Galería 2x2 -->
    <v-row justify="center">
      <v-col cols="12" md="10">
        <div class="galeria-box">
          <v-row justify="center" align="stretch" dense>
            <v-col cols="12" md="6" class="d-flex justify-center">
              <div class="imagen-wrapper">
                <img src="@/assets/imagenes/Nuestrasinstalaciones/planta/_S0A7364.webp" alt="Vista general de la planta industrial SSAB" class="imagen-instalacion" loading="lazy" />
              </div>
            </v-col>

            <v-col cols="12" md="6" class="d-flex justify-center">
              <div class="imagen-wrapper">
                <img src="@/assets/imagenes/Nuestrasinstalaciones/planta/_S0A7367.webp" alt="Entorno optimizado para producción en SSAB" class="imagen-instalacion" loading="lazy" />
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Sin lógica
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.contenedor-centrado {
  max-width: 1800px;
  margin-bottom: 5rem;
}

.title {
  font-family: 'Poppins', sans-serif;
  font-size: 2.7rem;
  font-weight: 700;
}

.subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
  margin: 0;
}

.divider-naranja {
  border-color: #F6911D !important;
  opacity: 1;
}

.descripcion-box,
.galeria-box {
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.imagen-wrapper {
  background-color: #ffffff;
  padding: 8px;
  border-radius: 12px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  width: 100%;
}

.imagen-wrapper:hover {
  transform: scale(1.02);
}

.imagen-instalacion {
  border-radius: 8px;
  width: 100%;
  height: 22rem;
  object-fit: cover;
  display: block;
}
</style>
