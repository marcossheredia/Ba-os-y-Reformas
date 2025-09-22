<script setup>
</script>

<template>
  <v-container class="py-6 contenedor-centrado">
    <v-row justify="center" class="mb-8 text-center">
      <v-col cols="12">
        <h1 class="title">Nuestra Misión</h1>
        <v-divider class="mx-auto divider-naranja" :thickness="4" width="100" />
      </v-col>
    </v-row>

    <!-- Columnas con textos resumidos -->
    <v-row class="mb-12" align="stretch">
      <v-col cols="12" md="4">
        <p class="subtitle">
          En <b>Bañostres60</b> nos especializamos en el <b>cambio de bañera por plato de ducha</b> 
          y en reformas integrales de baños. Pero nuestra verdadera misión no es solo instalar productos, 
          sino transformar espacios para que sean más cómodos, seguros y funcionales.
        </p>
      </v-col>

      <v-col cols="12" md="5">
        <p class="subtitle">
          Creemos que la calidad no se mide en el número de proyectos realizados, 
          sino en la <b>satisfacción de cada cliente</b>. Por eso, cada reforma que emprendemos la abordamos con un 
          <b>enfoque personalizado</b>, escuchando tus necesidades y adaptándonos a tu estilo de vida.
        </p>
      </v-col>

      <v-col cols="12" md="3">
        <p class="subtitle">
          Nuestro compromiso es contigo: ofrecerte baños modernos, seguros y duraderos.  
          Tu tranquilidad y confianza son nuestro mayor logro, porque para nosotros 
          <b>tu satisfacción es nuestra misión</b>.
        </p>
      </v-col>
    </v-row>

    <!-- Consulta / contacto -->
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
:host {
  --nav-bg: #0D3642;      /* azul oscuro corporativo */
  --accent: #00BCD4;      /* cian principal */
  --accent-2:#58B7AE;     /* verde-agua suave */
  --accent-dark:#0097A7;  /* cian más oscuro */
  --orange:#F6911D;       /* naranja destacado */
  --ink:#0b3340;          /* texto en bloques claros */
}

/* ====== TÍTULO PRINCIPAL ====== */
.title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  color: var(--nav-bg);
  margin-bottom: 0.5rem;
  text-align: center;
}

/* Línea decorativa naranja */
.divider-naranja {
  border-color: var(--orange) !important;
  opacity: 1;
  margin-top: 0.5rem;
}

/* ====== TEXTOS ====== */
.subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  text-align: left;
  background: #fdfdfd;
  padding: 1.5rem;
  border-radius: 14px;
  height: 100%;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  color: var(--ink);
  transition: transform .25s ease, box-shadow .25s ease;
}
.subtitle:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.08);
}

/* ====== CONTENEDOR ====== */
.contenedor-centrado {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* ====== SECCIÓN CONSULTA ====== */
.consulta-section {
  margin-top: 3rem;
  padding: 3rem 1rem;
  text-align: center;
  background: linear-gradient(135deg, var(--nav-bg), #134d5d);
  border-radius: 12px;
  color: #fff;
}
.consulta-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #fff;
}

/* Botón de contacto */
.contact-button {
  font-size: 1rem;
  background: var(--accent);
  color: #fff;
  padding: 0.7rem 2.2rem;
  border: 2px solid var(--orange);
  border-radius: 30px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Segoe UI', Calibri, sans-serif;
}
.contact-button:hover {
  background: var(--accent-dark);
  transform: scale(1.05);
}

/* ====== RESPONSIVE ====== */
@media (max-width: 960px){
  .subtitle { font-size: 1rem; padding: 1.2rem; }
  .consulta-title { font-size: 1.3rem; }
}
@media (max-width: 600px){
  .title { font-size: 2rem; }
}
</style>

