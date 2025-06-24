<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Imagen por defecto para servicios sin imagen disponible
const defaultImage = '/src/assets/imagenes/usoGeneral/logo_SSAB450.png';
const defaultImage1 = '/src/assets/imagenes/usoGeneral/logo_SSAB450.png';
const defaultImage2 = '/src/assets/imagenes/usoGeneral/logo_SSAB450.png';

// Lista de servicios con toda la información
const servicios = ref([
  {
    id: 'brazing-en-horno',
    titulo: 'BRAZING EN HORNO',
    imagen: '/src/assets/imagenes/Brazing en horno/be5780da-fe19-46de-9fa3-9b84b69b4dc5.webp',
    alt: 'Brazing en horno para uniones metálicas de alta precisión',
    descripcion: 'El Brazing en horno es un proceso de soldadura por difusión que se realiza en un ambiente de horno a temperatura controlada. Esta técnica permite crear uniones de alta calidad y precisión entre diferentes metales, manteniendo la integridad estructural de los materiales. El proceso controla minuciosamente la temperatura y la atmósfera del horno para garantizar una fusión y difusión óptimas del material de aporte. Ideal para aplicaciones donde se requiere una unión resistente sin deformación térmica, especialmente en componentes pequeños o de geometría compleja.',
    categoria: 'brazing',
    posicionImagenes: 'derecha'
  },
  {
    id: 'brazing-por-induccion',
    titulo: 'BRAZING POR INDUCCIÓN',
    imagen: '/src/assets/imagenes/Brazing por inducción/Induction-Heating-Brazing-Machine-IGBT-Induction-Heater-Brazing-Welding-Machine-Jointing-Machine.webp',
    alt: 'Brazing por inducción mediante calentamiento localizado',
    descripcion: 'El Brazing por inducción es un método de soldadura avanzado que utiliza campos electromagnéticos para generar calor localizado en la pieza de trabajo. Este proceso permite un calentamiento rápido y preciso sin necesidad de contacto directo con la pieza, resultando en uniones de alta calidad con mínima distorsión térmica. La tecnología de inducción permite controlar con exactitud la zona de calentamiento, el tiempo y la temperatura aplicada, lo que resulta en uniones consistentes y de alta resistencia. Es especialmente útil para producción en serie y componentes con requerimientos específicos de calidad.',
    categoria: 'brazing',
    posicionImagenes: 'izquierda'
  },
  {
    id: 'brazing-por-antorcha',
    titulo: 'BRAZING POR ANTORCHA',
    imagen: defaultImage,
    alt: 'Brazing por antorcha para soldadura manual precisa',
    descripcion: 'El Brazing por antorcha es un método de soldadura fuerte donde se aplica calor directo mediante una llama controlada para fundir el material de aporte que fluye por capilaridad entre las piezas a unir. Este proceso versátil permite realizar uniones de alta resistencia en diversos materiales. La aplicación manual de calor ofrece flexibilidad para trabajos de reparación, fabricación a medida o proyectos donde el acceso con otros equipos es limitado. Nuestros técnicos especializados dominan esta técnica para asegurar uniones de calidad, controlando precisamente la temperatura para evitar sobrecalentamientos y garantizar la integridad de los materiales base.',
    categoria: 'brazing',
    posicionImagenes: 'derecha'
  },
  {
    id: 'soldadura-por-resistencia-de-puntos',
    titulo: 'SOLDADURA POR RESISTENCIA DE PUNTOS',
    imagen: '/src/assets/imagenes/Soldadura por resistencia/IMG_E4598.webp',
    alt: 'Soldadura por resistencia de puntos para unión de láminas metálicas',
    descripcion: 'La soldadura por resistencia de puntos es un proceso eficiente que une metales mediante el paso de corriente eléctrica a través de puntos específicos entre las piezas. El calor generado por la resistencia eléctrica funde localmente el metal, creando una soldadura sólida al enfriarse. Esta técnica es ideal para la unión de láminas metálicas en aplicaciones industriales donde se requiere rapidez y consistencia. Ofrecemos soldadura por puntos de alta precisión con equipos de última generación, garantizando uniones duraderas y fiables sin necesidad de materiales de aporte adicionales.',
    categoria: 'especializada',
    posicionImagenes: 'izquierda'
  },
  {
    id: 'mig-mag-manual',
    titulo: 'MIG-MAG MANUAL',
    imagen: '/src/assets/imagenes/Soldadura MIG MAG manual/IMG_5886-300x200.webp',
    alt: 'Soldadura MIG-MAG manual con operador especializado',
    descripcion: 'La soldadura MIG-MAG manual es un proceso versátil que utiliza un arco eléctrico entre un electrodo consumible y el metal base, protegido por un gas que evita la contaminación del cordón. Nuestros soldadores certificados dominan esta técnica para ofrecer uniones de alta calidad en diversos materiales y espesores. Esta modalidad permite ajustes precisos durante el proceso para adaptarse a diferentes condiciones y requerimientos específicos del proyecto. Ideal para trabajos que requieren flexibilidad, detalle y adaptación a geometrías complejas donde los sistemas automatizados no resultan prácticos.',
    categoria: 'MIG-MAG',
    posicionImagenes: 'derecha'
  },
  {
    id: 'mig-mag-robotizada',
    titulo: 'MIG-MAG ROBOTIZADA',
    imagen: '/src/assets/imagenes/Mig Mag robotizada/_S0A7345.webp',
    alt: 'Soldadura MIG-MAG robotizada para aplicaciones industriales',
    descripcion: 'La soldadura MIG-MAG robotizada representa la fusión perfecta entre precisión tecnológica y eficiencia industrial. Utilizamos robots de última generación programados para ejecutar cordones de soldadura con una consistencia y exactitud imposibles de lograr manualmente. Este sistema automatizado garantiza resultados idénticos en cada pieza, ideal para producciones en serie y componentes críticos. La programación avanzada permite optimizar parámetros como velocidad, penetración y aporte de material, reduciendo desperdicios y tiempos de producción. Nuestros sistemas robotizados están equipados con monitorización en tiempo real para asegurar la máxima calidad en cada soldadura.',
    categoria: 'MIG-MAG',
    posicionImagenes: 'izquierda'
  },
  {
    id: 'soldadura-electrica-por-electrodo',
    titulo: 'SOLDADURA ELÉCTRICA POR ELECTRODO',
    imagen: defaultImage,
    alt: 'Soldadura eléctrica por electrodo revestido',
    descripcion: 'La soldadura eléctrica por electrodo es un método tradicional y versátil que utiliza un electrodo consumible recubierto para crear el arco eléctrico y aportar material a la unión. Este proceso, también conocido como SMAW (Shielded Metal Arc Welding), destaca por su adaptabilidad a diferentes entornos de trabajo, incluso en condiciones adversas o exteriores. Nuestros soldadores certificados dominan la técnica para diversos materiales y posiciones, garantizando cordones resistentes y de alta calidad. Esta modalidad resulta especialmente útil en construcciones metálicas, reparaciones y trabajos donde la portabilidad del equipo es una ventaja.',
    categoria: 'soldadura',
    posicionImagenes: 'derecha'
  },
  {
    id: 'tig-arco-electrico-tungsteno',
    titulo: 'TIG (ARCO ELÉCTRICO TUNGSTENO)',
    imagen: '/src/assets/imagenes/Soldadura TIG/images (1).webp',
    alt: 'Soldadura TIG con electrodo de tungsteno',
    descripcion: 'La soldadura TIG (Tungsten Inert Gas) es un proceso de precisión que utiliza un electrodo de tungsteno no consumible y gas de protección para crear uniones de excepcional calidad. Esta técnica permite un control extraordinario sobre el cordón, resultando en soldaduras limpias, precisas y estéticamente superiores. Ideal para materiales como acero inoxidable, aluminio, titanio y metales especiales donde la integridad y apariencia son críticas. Nuestros técnicos especializados en TIG pueden realizar uniones de mínimo espesor con máxima resistencia, perfectas para aplicaciones en industria aeroespacial, alimentaria, química y sectores donde no se admiten defectos.',
    categoria: 'especializada',
    posicionImagenes: 'izquierda'
  },
  {
    id: 'soldadura-autogena',
    titulo: 'SOLDADURA AUTÓGENA',
    imagen: '/src/assets/imagenes/Soldadura autógena/DSC_0103-2-300x199.webp',
    alt: 'Soldadura autógena de precisión para componentes industriales',
    descripcion: 'La soldadura autógena utiliza la combustión de gases (típicamente oxígeno y acetileno) para generar una llama de alta temperatura que funde el propio metal base, creando una unión homogénea sin material de aporte adicional. Esta técnica tradicional ofrece un control preciso de la temperatura y es ideal para materiales de bajo punto de fusión o aplicaciones donde se requiere un acabado limpio y uniforme. Nuestros especialistas dominan esta técnica para soldar con precisión metales como acero, cobre y latón, garantizando uniones de alta calidad. Es particularmente útil para reparaciones de precisión y trabajos en espesores finos donde otras técnicas resultarían excesivas.',
    categoria: 'soldadura',
    posicionImagenes: 'derecha'
  }
]);

// Categorías de servicios para el filtro
const categorias = ref([
  { id: 'todos', nombre: 'Todos los servicios', icon: 'mdi-view-grid-outline' },
  { id: 'brazing', nombre: 'Brazing', icon: 'mdi-fire' },
  { id: 'soldadura', nombre: 'Soldadura tradicional', icon: 'mdi-hammer', useImage: false },
  { id: 'MIG-MAG', nombre: 'MIG-MAG', icon: 'mdi-robot' },
  { id: 'especializada', nombre: 'Procesos especializados', icon: 'mdi-tools' }
]);

// Obtener la ruta actual y el router
const route = useRoute();
const router = useRouter();

// SOLUCIÓN SIMPLIFICADA: Usar arrays simples y evitar reactividad compleja
const filtroActivo = ref('todos');
const serviciosFiltrados = ref([]);

// Control del panel lateral en móvil
const drawer = ref(false);

// Función para verificar si una categoría es válida
const esCategoriaValida = (categoria) => {
  if (!categoria) return false;
  if (categoria === 'todos') return true;
  return categorias.value.some(cat => cat.id === categoria);
};

// SOLUCIÓN CLAVE: Función simple para filtrar servicios
const filtrarServicios = () => {
  // Limpiar el array actual
  serviciosFiltrados.value = [];
  
  // Esperar un tick para asegurar que el DOM se actualice
  nextTick(() => {
    // Filtrar los servicios según la categoría activa
    if (filtroActivo.value === 'todos') {
      serviciosFiltrados.value = [...servicios.value];
    } else {
      serviciosFiltrados.value = servicios.value.filter(
        servicio => servicio.categoria === filtroActivo.value
      );
    }
    
    console.log(`Filtro aplicado: ${filtroActivo.value}, servicios: ${serviciosFiltrados.value.length}`);
  });
};

// Función para cambiar el filtro
const cambiarFiltro = async (categoriaId) => {
  console.log(`Cambiando filtro a: ${categoriaId}`);
  
  try {
    // Validar la categoría
    if (!esCategoriaValida(categoriaId)) {
      console.log(`Categoría ${categoriaId} no válida, usando 'todos'`);
      categoriaId = 'todos';
    }
    
    // Actualizar el filtro activo
    filtroActivo.value = categoriaId;
    
    // Aplicar el filtro
    filtrarServicios();
    
    // Actualizar la URL (sin query params si es 'todos')
    const query = categoriaId !== 'todos' ? { categoria: categoriaId } : {};
    
    // Actualizar la URL
    await router.push({ 
      path: route.path, 
      query,
      hash: route.hash 
    }).catch(err => {
      if (err.name !== 'NavigationDuplicated') {
        console.error('Error de navegación:', err);
      }
    });
  } catch (error) {
    console.error('Error al cambiar filtro:', error);
    filtroActivo.value = 'todos';
    filtrarServicios();
  }
};

// Inicialización al montar la página
onMounted(() => {
  try {
    // Leer categoría de la URL
    const categoriaURL = route.query.categoria;
    console.log('Categoría en URL al iniciar:', categoriaURL);
    
    // Aplicar filtro solo si la categoría es válida
    if (categoriaURL && esCategoriaValida(categoriaURL)) {
      console.log(`Aplicando filtro inicial: ${categoriaURL}`);
      filtroActivo.value = String(categoriaURL);
    } else {
      console.log('Usando filtro por defecto: todos');
      filtroActivo.value = 'todos';
      
      // Si había una categoría inválida en la URL, limpiarla
      if (categoriaURL) {
        router.replace({ 
          path: route.path,
          hash: route.hash 
        });
      }
    }
    
    // Aplicar el filtro inicial
    filtrarServicios();
    
    // Animaciones
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  } catch (error) {
    console.error('Error en la inicialización:', error);
    filtroActivo.value = 'todos';
    filtrarServicios();
  }
});

// Watch para actualizar el filtro cuando cambia la URL
watch(
  () => route.query.categoria,
  (nuevaCategoria) => {
    try {
      // Validar y aplicar la nueva categoría
      if (nuevaCategoria && esCategoriaValida(nuevaCategoria)) {
        console.log(`Actualizando filtro desde URL a: ${nuevaCategoria}`);
        filtroActivo.value = String(nuevaCategoria);
      } else {
        console.log('Categoría inválida o no especificada, usando todos');
        filtroActivo.value = 'todos';
      }
      
      // Aplicar el filtro
      filtrarServicios();
    } catch (error) {
      console.error('Error en el watcher de ruta:', error);
      filtroActivo.value = 'todos';
      filtrarServicios();
    }
  }
);
</script>

<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <!-- Contenido principal (ahora ocupa todo el ancho) -->
      <v-col cols="12" class="content-container pb-16">
        <v-container>
          <!-- Encabezado de la página -->
          <v-row>
            <v-col cols="12">
              <h1 class="text-h2 text-center mb-6 mt-8 font-weight-bold primary-text fade-in">
                Nuestros Servicios Industriales
              </h1>
              <v-divider class="mb-6"></v-divider>
              <p class="text-body-1 text-center mb-8 mx-auto max-width-text fade-in">
                En SSAB450 nos especializamos en soluciones de soldadura industrial avanzadas para diversos sectores. 
                Nuestro equipo de técnicos altamente cualificados y nuestras instalaciones de última generación 
                nos permiten ofrecer servicios de la más alta calidad adaptados a sus necesidades específicas.
              </p>
              
              <!-- NUEVO: Filtros horizontales -->
              <div class="filtros-container mb-8 fade-in">
                <h3 class="text-h6 text-center mb-4 font-weight-medium">Filtrar por categoría</h3>
                <div class="filtros-wrapper">
                  <v-btn
                    v-for="categoria in categorias"
                    :key="categoria.id"
                    :color="filtroActivo === categoria.id ? '#F6911D' : 'grey-lighten-4'"
                    :text-color="filtroActivo === categoria.id ? 'white' : 'grey-darken-3'"
                    :prepend-icon="!categoria.useImage ? categoria.icon : undefined"
                    class="filtro-btn mx-2 mb-2"
                    variant="elevated"
                    rounded="pill"
                    @click="cambiarFiltro(categoria.id)"
                    :aria-pressed="filtroActivo === categoria.id"
                    :aria-label="`Filtrar por ${categoria.nombre}`"
                  >
                    <template v-if="categoria.useImage" v-slot:prepend>
                      <v-img :src="categoria.icon" height="24" width="24" alt="Icono personalizado"></v-img>
                    </template>
                    {{ categoria.nombre }}
                  </v-btn>
                </div>
                
                <!-- Indicador de filtro activo -->
                <div class="text-center mt-4">
                  <v-chip 
                    color="#F6911D" 
                    text-color="white"
                    class="mx-auto"
                  >
                    Filtro activo: {{ filtroActivo }} ({{ serviciosFiltrados.length }} servicios)
                  </v-chip>
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- SOLUCIÓN CLAVE: Renderizado directo sin v-if/v-show que puedan causar problemas -->
          <template v-if="serviciosFiltrados.length > 0">
            <div v-for="(servicio, index) in serviciosFiltrados" :key="servicio.id" class="servicio-item">
              <!-- Ancla para navegación -->
              <div :id="servicio.id" class="service-anchor"></div>
              
              <v-row class="service-row my-12 fade-in" align="center">
                <!-- Texto del servicio -->
                <v-col 
                  cols="12" 
                  md="6" 
                  :order="servicio.posicionImagenes === 'izquierda' ? 'last' : 'first'" 
                  class="service-text py-8"
                >
                  <div class="service-content">
                    <h2 class="text-h4 mb-4 font-weight-bold">{{ servicio.titulo }}</h2>
                    <v-chip
                      :color="servicio.categoria === 'automatizada' ? '#42A5F5' : 
                             servicio.categoria === 'soldadura' ? '#66BB6A' :
                             servicio.categoria === 'brazing' ? '#AB47BC' : 
                             servicio.categoria === 'especializada' ? '#FFA726' : ''"
                      text-color="white"
                      class="mb-4"
                      size="small"
                    >
                      {{ servicio.categoria }}
                    </v-chip>
                    <p class="text-body-1 mb-6">{{ servicio.descripcion }}</p>
                    <v-btn
                      color="#F6911D"
                      variant="flat"
                      rounded="pill"
                      prepend-icon="mdi-information-outline"
                      class="mt-4"
                      size="large"
                      to="/contacto"
                    >
                      Solicitar información
                    </v-btn>
                  </div>
                </v-col>

                <!-- Galería de imágenes -->
                <v-col 
                  cols="12" 
                  md="6" 
                  :order="servicio.posicionImagenes === 'izquierda' ? 'first' : 'last'" 
                  class="service-gallery"
                >
                  <v-row>
                    <!-- Imagen principal más grande -->
                    <v-col cols="12">
                      <v-card
                        elevation="3"
                        class="gallery-card main-image"
                        rounded="lg"
                      >
                        <v-img
                          :src="servicio.imagen"
                          :alt="servicio.alt"
                          height="300"
                          cover
                          class="gallery-image"
                        >
                          <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                              <v-progress-circular indeterminate color="#F6911D"></v-progress-circular>
                            </v-row>
                          </template>
                        </v-img>
                      </v-card>
                    </v-col>

                    <!-- Dos imágenes más pequeñas abajo -->
                    <v-col cols="6">
                      <v-card
                        elevation="2"
                        class="gallery-card"
                        rounded="lg"
                      >
                        <v-img
                          :src="defaultImage1"
                          :alt="`Imagen adicional 1 de ${servicio.titulo}`"
                          height="180"
                          cover
                          class="gallery-image"
                          loading="lazy"
                        >
                          <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                              <v-progress-circular indeterminate color="#F6911D"></v-progress-circular>
                            </v-row>
                          </template>
                        </v-img>
                      </v-card>
                    </v-col>

                    <v-col cols="6">
                      <v-card
                        elevation="2"
                        class="gallery-card"
                        rounded="lg"
                      >
                        <v-img
                          :src="defaultImage2"
                          :alt="`Imagen adicional 2 de ${servicio.titulo}`"
                          height="180"
                          cover
                          class="gallery-image"
                          loading="lazy"
                        >
                          <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                              <v-progress-circular indeterminate color="#F6911D"></v-progress-circular>
                            </v-row>
                          </template>
                        </v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

              <v-divider v-if="index < serviciosFiltrados.length - 1"></v-divider>
            </div>
          </template>

          <!-- Mensaje cuando no hay servicios en la categoría seleccionada -->
          <v-row v-if="serviciosFiltrados.length === 0">
            <v-col cols="12" class="text-center py-12">
              <v-icon icon="mdi-alert-circle-outline" size="64" color="grey-lighten-1"></v-icon>
              <h3 class="text-h5 mt-4">No se encontraron servicios en esta categoría</h3>
              <p class="text-body-1 mt-2">Por favor, seleccione otra categoría de servicios</p>
              
              <!-- Botón para contactar -->
              <v-btn
                color="#F6911D"
                variant="flat"
                class="mt-6"
                to="/contacto"
                prepend-icon="mdi-information-outline"
              >
                Solicitar información
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* Variables de color */
:root {
  --primary-color: #F6911D;
  --secondary-color: #808990;
  --background-color: #F9F9F9;
  --text-color: #333333;
}

/* Estilos generales */
.primary-text {
  color: #F6911D;
}

/* Línea divisoria naranja */
.orange-divider {
  width: 60px;
  height: 3px;
  background-color: #F6911D;
  margin: 0 auto;
}

/* Resto de estilos */
.max-width-text {
  max-width: 800px;
}

.content-container {
  background-color: #f9f9f9;
  min-height: 100vh;
}

/* NUEVO: Estilos para los filtros horizontales */
.filtros-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.filtros-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.filtro-btn {
  transition: all 0.3s ease;
  min-width: 160px;
}

.filtro-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* SOLUCIÓN CLAVE: Asegurar que los servicios sean visibles */
.servicio-item {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}

/* Servicio individual */
.service-row {
  position: relative;
  display: flex !important;
  visibility: visible !important;
  opacity: 1 !important;
}

.service-anchor {
  position: relative;
  top: -120px; /* Aumentado el offset para compensar el header */
  visibility: hidden;
  display: block;
  height: 0;
}

.service-content {
  padding: 0 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-content h2, 
.service-content p {
  text-align: center;
}

.service-gallery {
  padding: 16px;
}

.gallery-card {
  overflow: hidden;
  transition: all 0.3s ease;
}

.gallery-card:hover {
  transform: translateY(-5px);
}

.gallery-image {
  transition: transform 0.6s ease-in-out;
}

.gallery-card:hover .gallery-image {
  transform: scale(1.05);
}

/* Animaciones */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: all 1s ease-out;
}

.fade-in.appear {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 960px) {
  .service-content {
    padding: 0;
  }
  
  .service-gallery, 
  .service-text {
    padding: 1rem 0 !important;
  }
  
  h1.text-h2 {
    font-size: 2rem !important;
  }
  
  .filtro-btn {
    min-width: 140px;
    font-size: 0.9rem;
  }
}

@media (max-width: 600px) {
  h2.text-h4 {
    font-size: 1.5rem !important;
  }
  
  .gallery-card.main-image {
    height: 200px !important;
  }
  
  .filtros-wrapper {
    flex-direction: column;
    align-items: center;
  }
  
  .filtro-btn {
    width: 100%;
    max-width: 280px;
  }
}
</style>