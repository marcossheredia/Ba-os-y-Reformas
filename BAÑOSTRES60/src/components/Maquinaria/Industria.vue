<template>
  <v-container class="py-6 contenedor-centrado">
    <!-- Título -->
    <v-row justify="center" class="mb-8 text-center">
      <v-col cols="12">
        <h1 class="title">Industria</h1>
        <v-divider class="mx-auto divider-naranja" :thickness="4" width="100" />
      </v-col>
    </v-row>

    <!-- Texto en recuadro blanco -->
    <v-row justify="center" class="mb-10">
      <v-col cols="12" md="10">
        <div class="texto-box">
          <p class="descripcion-industria">
            Para un mejor resultado en el <strong>diseño</strong>, <strong>fabricación</strong> y <strong>producción</strong> de nuestra
            actividad es <strong>esencial</strong> tener los medios adecuados para conseguir <strong>grandes resultados</strong>,
            más <strong>precisos</strong>, con <strong>calidad</strong>, de forma <strong>rápida</strong> y cumpliendo los
            <strong>tiempos</strong> establecidos por nuestros clientes.
          </p>
        </div>
      </v-col>
    </v-row>

    <!-- Imagen destacada -->
    <v-row justify="center">
      <v-col cols="12" md="12" class="text-center">
        <div class="imagen-wrapper">
          <img src="@/assets/imagenes/Mig-Mag2.0/_S0A7350.webp"
               alt="Robot de soldadura industrial MIG-MAG en plena operación"
               class="imagen-industria"
               loading="lazy" />
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
  margin: 0 auto;
  margin-bottom: 5rem;
}

.title {
  font-family: 'Poppins', sans-serif;
  font-size: 2.7rem;
  font-weight: bold;
}

.divider-naranja {
  border-color: #F6911D !important;
  opacity: 1;
}

.texto-box {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.descripcion-industria {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
  margin: 0;
}

.imagen-wrapper {
  background-color: #f5f5f5;
  border-radius: 12px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: block;
  width: 100%;
}

.imagen-industria {
  border-radius: 8px;
  width: 100%;
  height: 23rem;
  object-fit: cover;
  display: block;
}
</style>
