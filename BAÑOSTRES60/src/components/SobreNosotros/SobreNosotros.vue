<script setup>
import oficina from '@/assets/imagenes/sobreNosotros/bañoG.jpg'
import piezas from '@/assets/imagenes/sobreNosotros/bañoG2.jpg'
import vistaTaller from '@/assets/imagenes/sobreNosotros/bañoG3.jpg'
</script>

<template>
  <v-container class="py-6 contenedor-centrado">
    <v-row justify="center" class="mb-8 text-center">
      <v-col cols="12">
        <h1 class="title">Sobre Nosotros</h1>
        <v-divider class="mx-auto divider-naranja" :thickness="4" width="100" />
      </v-col>
    </v-row>

    <!-- Sección 1 -->
    <v-row align="center" class="mb-10 flex-wrap-reverse" style="background-color: #f9f9f9;">
      <v-col cols="12" md="7">
        <p class="subtitle">
          En <b>Bañostres60</b> creemos que un baño no es solo un espacio funcional, sino un lugar de confort y bienestar. 
          Tras una larga experiencia en el sector de las reformas, decidimos especializarnos en lo que fue nuestro origen: 
          <b>las reformas integrales de baños</b>. Hoy ofrecemos soluciones modernas y personalizadas, siempre con la máxima calidad 
          y atención al detalle.
        </p>
      </v-col>
      <v-col cols="12" md="5" class="text-center">
        <v-img :src="oficina" class="image" height="350" width="100%" cover />
      </v-col>
    </v-row>

    <!-- Sección 2 -->
    <v-row align="center" class="mb-10" style="background-color: #f9f9f9;">
      <v-col cols="12" md="5" class="text-center">
        <v-img :src="vistaTaller" class="image" height="350" width="100%" cover />
      </v-col>
      <v-col cols="12" md="7">
        <p class="subtitle" style="text-align: right;">
          Ofrecemos una amplia variedad de opciones: <b>platos de ducha de resina</b> en distintos colores, 
          duchas a ras de suelo, <b>grifería empotrada y termostática</b> con acabados de última tendencia, 
          así como mamparas, espejos, mobiliario a medida y accesorios exclusivos.  
          También integramos <b>WC inteligentes</b> y soluciones adaptadas a personas con movilidad reducida, 
          logrando baños seguros, accesibles y con estilo.
        </p>
      </v-col>
    </v-row>

    <!-- Sección 3 -->
    <v-row align="center" class="mb-12 flex-wrap-reverse last-section" style="background-color: #f9f9f9;">
      <v-col cols="12" md="7">
        <p class="subtitle">
          Nuestra misión es acompañarte en cada paso de la reforma: desde la elección de materiales hasta el diseño final, 
          aportando <b>asesoramiento profesional</b> y soluciones prácticas que se ajusten a tu presupuesto.  
          Gracias a nuestra experiencia y a un equipo especializado, nos hemos consolidado como una <b>empresa de referencia</b> 
          en el sector, ofreciendo siempre innovación, confianza y resultados que superan expectativas.
        </p>
      </v-col>
      <v-col cols="12" md="5" class="text-center">
        <v-img :src="piezas" class="image" height="350" width="100%" cover />
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
:host{
  --accent:#F6911D;      /* naranja corporativo */
  --ink:#23424a;         /* texto */
  --bg-light:#f9f9f9;    /* fondo bloques */
}

/* ====== TÍTULO ====== */
.title{
  font-family:'Poppins',sans-serif;
  font-size:2.7rem;
  font-weight:700;
  color:#0D3642;
  margin-bottom:.5rem;
}
.divider-naranja{
  border-color:var(--accent) !important;
  opacity:1;
  border-radius:2px;
}

/* ====== TEXTO ====== */
.subtitle{
  font-family:'Poppins',sans-serif;
  font-size:1.1rem;
  line-height:1.7;
  color:var(--ink);
  text-align:justify;
  background:var(--bg-light);
  padding:1.5rem;
  border-radius:14px;
  box-shadow:0 8px 20px rgba(0,0,0,.05);
  height:100%;
}

/* ====== IMÁGENES ====== */
.image{
  border-radius:14px;
  box-shadow:0 8px 20px rgba(0,0,0,.12);
  object-fit:cover;
  transition:transform .3s ease, box-shadow .3s ease;
}
.image:hover{
  transform:translateY(-4px);
  box-shadow:0 14px 32px rgba(0,0,0,.18);
}

/* ====== CONTENEDOR CENTRAL ====== */
.contenedor-centrado{
  max-width:1800px;
  margin:0 auto;
}

/* ====== SECCIÓN CONTACTO ====== */
.consulta-section{
  padding:3rem 1rem;
  text-align:center;
}
.consulta-title{
  font-family:'Poppins',sans-serif;
  font-size:1.4rem;
  font-weight:600;
  color:#0D3642;
  margin-bottom:1rem;
}
.contact-button{
  font-size:1rem;
  font-family:'Segoe UI',Calibri,sans-serif;
  background-color:#808990;
  color:#fff;
  padding:.6rem 2rem;
  border:2px solid var(--accent);
  border-radius:25px;
  font-weight:700;
  cursor:pointer;
  transition:all .3s ease;
}
.contact-button:hover{
  background-color:#6b7379;
  transform:scale(1.04);
}

/* ====== RESPONSIVE ====== */
@media(max-width:768px){
  .title{ font-size:2rem; }
  .subtitle{
    text-align:center !important;
    padding:1rem;
  }
  .image{
    height:240px !important;
    width:92% !important;
    margin:0 auto;
  }
  .last-section{ margin-bottom:0 !important; }
}
</style>
