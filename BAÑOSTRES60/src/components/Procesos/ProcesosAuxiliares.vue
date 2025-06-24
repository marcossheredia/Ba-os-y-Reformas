<template>
  <v-container class="py-6 contenedor-centrado">
    <v-row justify="center" class="mb-8 text-center">
      <v-col cols="12">
        <h1 class="title">Procesos Auxiliares y Logística</h1>
        <v-divider class="mx-auto divider-naranja" :thickness="4" width="100" />
      </v-col>
    </v-row>

    <!-- TRANSFORMACIONES METALÚRGICAS -->
    <v-row class="mb-8">
      <v-col cols="12">
        <div class="bloque">
          <h2 class="section-title">Transformaciones Metalúrgicas</h2>
          <ul class="custom-list">
            <li>Corte de precisión en diferentes materiales</li>
            <li>Plegado profesional con maquinaria avanzada</li>
          </ul>
          <div class="galeria">
            <img src="/src/assets/imagenes/Procesos Auxiliares/Tranformacion Metalurgica/descarga.jpg" alt="Transformación 1" loading="lazy" />
            <img src="/src/assets/imagenes/Procesos Auxiliares/Tranformacion Metalurgica/descarga.jpg" alt="Transformación 2" loading="lazy" />
            <img src="/src/assets/imagenes/Procesos Auxiliares/Tranformacion Metalurgica/descarga.jpg" alt="Transformación 3" loading="lazy" />
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- TRATAMIENTO DE SUPERFICIES -->
    <v-row class="mb-8">
      <v-col cols="12">
        <div class="bloque">
          <h2 class="section-title">Tratamiento de Superficies</h2>
          <ul class="custom-list">
            <li>Pasivado para protección contra la corrosión</li>
            <li>Pintura especializada según requisitos del proyecto</li>
            <li>Cincado para aumentar la durabilidad</li>
          </ul>
          <div class="galeria">
            <img src="/src/assets/imagenes/Procesos Auxiliares/Tratamiento de superficies/descarga (2).jpg" alt="Tratamiento 1" loading="lazy" />
            <img src="/src/assets/imagenes/Procesos Auxiliares/Tratamiento de superficies/descarga (2).jpg" alt="Tratamiento 2" loading="lazy" />
            <img src="/src/assets/imagenes/Procesos Auxiliares/Tratamiento de superficies/descarga (2).jpg" alt="Tratamiento 3" loading="lazy" />
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- MODULACIÓN -->
    <v-row class="mb-8">
      <v-col cols="12">
        <div class="bloque">
          <h2 class="section-title">Modulación</h2>
          <p class="texto-completo">
            Diseñamos y ejecutamos contenedores, bateas y soluciones modulares adaptadas a las necesidades específicas de cada proyecto.
          </p>
          <div class="galeria">
            <img src="/src/assets/imagenes/Procesos Auxiliares/Modulacion/descarga.jpg" alt="Modulación 1" loading="lazy" />
            <img src="/src/assets/imagenes/Procesos Auxiliares/Modulacion/descarga.jpg" alt="Modulación 2" loading="lazy" />
            <img src="/src/assets/imagenes/Procesos Auxiliares/Modulacion/descarga.jpg" alt="Modulación 3" loading="lazy" />
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- LOGÍSTICA -->
    <v-row class="mb-8">
      <v-col cols="12">
        <div class="bloque">
          <h2 class="section-title">Logística</h2>
          <p class="texto-completo">
            Contamos con medios propios para el transporte y distribución, y colaboramos con plataformas logísticas para entregas eficientes.
          </p>
          <div class="galeria">
            <img src="/src/assets/imagenes/Procesos Auxiliares/Logistica/descarga (2).jpg" alt="Logística 1" loading="lazy" />
            <img src="/src/assets/imagenes/Procesos Auxiliares/Logistica/descarga (2).jpg" alt="Logística 2" loading="lazy" />
            <img src="/src/assets/imagenes/Procesos Auxiliares/Logistica/descarga (2).jpg" alt="Logística 3" loading="lazy" />
          </div>
        </div>
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

.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.contenedor-centrado {
  max-width: 1800px;
  margin: 0 auto;
}

.divider-naranja {
  border-color: #F6911D !important;
  opacity: 1;
}

.bloque {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  text-align: center;  /* Añadido */
}

.custom-list {
  list-style-type: none;  /* Cambiado de disc a none */
  padding-left: 0;  /* Cambiado de 1.5rem a 0 */
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: center;  /* Añadido */
}

p {
  text-align: center;
  margin: 0 auto;
}

.texto-completo {
  max-width: 100%;
  padding: 0 1rem;
  font-size: 1.1rem;
  line-height: 1.7;
  font-family: 'Poppins', sans-serif;
}

.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.galeria img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
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
  .title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .galeria img {
    height: 200px;
  }
}
</style>
