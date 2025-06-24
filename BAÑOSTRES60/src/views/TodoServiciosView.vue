<template>
  <div class="todo-servicios-view">
    <TodoServicios />
  </div>
</template>

<script>
import { ref, defineComponent, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import TodoServicios from '../components/Servicios/TodoServicios.vue';

export default defineComponent({
  name: 'TodoServiciosView',
  components: {
    TodoServicios
  },
  setup() {
    // Variable para control del título de página
    const pageTitle = ref('Todos los Servicios Industriales | SSAB450');
    const route = useRoute();
    
    // Actualizar el título de la página
    document.title = pageTitle.value;

    // Manejar el scroll al ID después de que todo se monte
    nextTick(() => {
      if (route.hash) {
        const element = document.querySelector(route.hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 500); // Pequeño retraso para asegurar que todo está cargado
        }
      }
    });

    return {
      pageTitle
    };
  }
});
</script>

<style scoped>
.todo-servicios-view {
  background-color: #f9f9f9;
  min-height: 100vh;
}
</style>
