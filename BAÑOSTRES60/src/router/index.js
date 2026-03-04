import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('@/views/ContactoView.vue')
    },
    {
      path: '/aviso-legal-y-politicas',
      name: 'aviso-legal',
      component: () => import('../components/AvisoLegal/AvisoLegal.vue'),
    },
    {
      path: '/politica-de-cookies',
      name: 'PoliticaCookies',
      component: () => import('@/components/Cookies/PoliticaCookies.vue')
    },
    {
      path: '/sobre-nosotros',
      name: 'sobre-nosotros',
      component: () => import('../views/sobreNosotrosView.vue')
    },
    {
      path: '/mision',
      name: 'mision',
      component: () => import('../views/NuestraMisionView.vue')
    },
    {
      path: '/por-que',
      name: 'por-que-nosotros',
      component: () => import('../views/PorQueView.vue')
    },
    {
      path: '/grifos1',
      name: 'grifos1',
      component: () => import('../components/Grifos/Grifos1.vue'),
    },
    {
      path: '/grifos2',
      name: 'grifos2',
      component: () => import('../components/Grifos/Grifos2.vue'),
    },
    {
      path: '/grifos3',
      name: 'grifos3',
      component: () => import('../components/Grifos/Grifos3.vue'),
    },
    {
      path: '/platos1',
      name: 'platos1',
      component: () => import('../components/Platos/Platos1.vue'),
    },
    {
      path: '/mamparas1',
      name: 'mamparas1',
      component: () => import('../components/Mamparas/Mamparas1.vue'),
    },
    {
      path: '/mamparas2',
      name: 'mamparas2',
      component: () => import('../components/Mamparas/Mamparas2.vue'),
    },
    {
      path: '/mamparas3',
      name: 'mamparas3',
      component: () => import('../components/Mamparas/Mamparas3.vue'),
    },
    {
      path: '/mamparas4',
      name: 'mamparas4',
      component: () => import('../components/Mamparas/Mamparas4.vue'),
    },
    {
      path: '/mamparas5',
      name: 'mamparas5',
      component: () => import('../components/Mamparas/Mamparas5.vue'),
    },
    {
      path: '/espejos',
      name: 'espejos',
      component: () => import('../components/Espejos/Espejos1.vue'),
    }
  ],
})

export default router
