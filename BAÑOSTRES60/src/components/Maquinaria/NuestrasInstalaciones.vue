<template>
    <div>
    <v-container class="py-8">
      <v-row>
        <!-- Arriba izquierda: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src='src/assets/imagenes/Grifos/Gr 1/1.1.JPG'
            alt="Descripción de la imagen 1"
            height="300"
            contain
          ></v-img>
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
            src= 'src/assets/imagenes/Grifos/Gr 1/1.2.JPG'
            alt="Descripción de la imagen 2"
            height="300"
            contain
          ></v-img>
        </v-col>

        <!-- Abajo derecha: imagen -->
        <v-col cols="12" md="6">
          <v-img
            src= 'src/assets/imagenes/Grifos/Gr 1/1.3.JPG'
            alt="Descripción de la imagen 3"
            height="300"
            contain
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>

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
