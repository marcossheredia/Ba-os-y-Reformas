<template>
  <v-container class="py-6 contenedor-centrado">
    <v-row justify="center" class="mb-8 text-center">
      <v-col cols="12">
        <h1 class="title">¿Por qué SSAB450?</h1>
        <v-divider class="mx-auto divider-naranja" :thickness="4" width="100" />
      </v-col>
    </v-row>

    <!-- Primer párrafo descriptivo -->
    <v-row class="mb-10 mb-mobile" justify="center">
      <v-col cols="12" md="10">
        <p class="subtitle">
          En SSAB450 garantizamos la <b>calidad</b> de nuestros servicios, apoyada por nuestros más de <b>40 años de experiencia</b> en el sector y demostrada con el <b>100% de entrega en el tiempo acordado</b>.
        </p>
      </v-col>
    </v-row>

    <!-- Departamentos en tarjetas -->
    <v-row justify="center" class="mb-12 text-center">
        <v-col cols="12" md="10">
            <v-row class="mt-4" align="stretch" justify="center" dense>
            <v-col cols="12" sm="6" md="6" lg="2" class="h-100">
                <v-card class="departamento-card" elevation="3">
                <v-card-text class="departamento-contenido">
                    <v-icon size="48" color="primary">mdi-account-tie</v-icon>
                    <p class="departamento-nombre">Departamento Comercial</p>
                </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" sm="6" md="6" lg="2" class="h-100">
                <v-card class="departamento-card" elevation="3">
                <v-card-text class="departamento-contenido">
                    <v-icon size="48" color="primary">mdi-cogs</v-icon>
                    <p class="departamento-nombre">Departamento Técnico-Producción</p>
                </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" sm="6" md="6" lg="2" class="h-100">
                <v-card class="departamento-card" elevation="3">
                <v-card-text class="departamento-contenido">
                    <v-icon size="48" color="primary">mdi-truck</v-icon>
                    <p class="departamento-nombre">Departamento Administración-Logístico</p>
                </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" sm="6" md="6" lg="2" class="h-100">
                <v-card class="departamento-card" elevation="3">
                <v-card-text class="departamento-contenido">
                    <v-icon size="48" color="primary">mdi-check-decagram</v-icon>
                    <p class="departamento-nombre">Departamento de Calidad</p>
                </v-card-text>
                </v-card>
            </v-col>
            </v-row>
        </v-col>
    </v-row>

    <!-- Diferenciación -->
    <v-row justify="center">
      <v-col cols="12" md="10">
        <p class="subtitle">
          <b>¿Dónde está la diferencia?</b><br /><br />
          En el mercado podrá encontrar empresas que integran la soldadura como uno más de sus procesos de fabricación. 
          Sin embargo, en SSAB450 hasta el nombre es específico y está unido indisolublemente a la soldadura. 
          Su acrónimo indica el punto de inflexión de los puntos de fusión de la <b>soldadura blanda y fuerte a 450º</b>, lo que está recogido en nuestro nombre industrial.
          <br /><br />
          Nuestra empresa es <b>original y única en el mercado</b> porque ofertamos exclusivamente procesos de soldadura, 
          no siendo solo una parte sino el todo. Cualquier oferta no será más que una <b>copia de nuestra idea de empresa</b>.
          <br /><br />
          También contamos con: 
        </p>
      </v-col>
    </v-row>
    
    <!-- Añadir sección de certificaciones -->
    <section class="certificacion-section mb-8">
      <div class="certificacion-items">
        <div class="certificacion-card">
          <img src="../../assets/imagenes/usoGeneral/ISO9001.2015.webp" alt="Certificado ISO 9001:2015" />
          <p class="certificacion-text">Certificado ISO 9001:2015</p>
        </div>

        <div class="certificacion-card">
          <img src="../../assets/imagenes/usoGeneral/fedeto.png" alt="Asociado a Fedeto" />
          <p class="certificacion-text">Asociados a Fedeto</p>
        </div>

        <div class="certificacion-card">
          <img src="../../assets/imagenes/usoGeneral/cesol.png" alt="Miembro Industrial de Cesol" />
          <p class="certificacion-text">Miembro Industrial de Cesol</p>
        </div>
      </div>
    </section>

    <!-- Sección contacto -->
    <section class="consulta-section">
      <div class="consulta-container">
        <h3 class="consulta-title mb-4">¿Trabajamos juntos?</h3>
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

.departamento-card {
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  height: 100%;
}

.departamento-contenido {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.departamento-nombre {
  font-weight: bold;
  font-size: 1rem;
  margin-top: 0.7rem;
  margin-bottom: 0;
}

.contenedor-centrado {
  max-width: 1800px;
  margin: 0 auto;
}

.divider-naranja {
  border-color: #F6911D !important;
  opacity: 1;
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

/* Estilos para certificaciones */
.certificacion-section {
  padding-top: 1rem;
}

.certificacion-items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem;
}

.certificacion-card {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 3rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  width: 22rem;
  height: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;
}

.certificacion-card:hover {
  transform: translateY(-5px);
}

.certificacion-card img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

.certificacion-card:nth-child(2) img {
  max-width: 120%;
}

.certificacion-text {
  margin-top: 1rem;
  font-weight: 500;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .consulta-section {
    padding-bottom: 3rem;
  }

  .departamento-card {
    aspect-ratio: 2.5 / 1;
    padding: 1rem;
  }

  .departamento-nombre {
    font-size: 0.9rem;
  }

  .mb-mobile {
    margin-bottom: 0rem !important;
  }
  
  /* Estilos específicos para certificaciones en móvil */
  .certificacion-card {
    width: 80%;
    height: 12rem;
  }

  .certificacion-text {
    font-size: 0.9rem;
  }

  .certificacion-card:nth-child(2) img {
    max-width: 130%;
  }
}
</style>
