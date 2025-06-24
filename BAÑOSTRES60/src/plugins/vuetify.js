import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// 🔥 AÑADE ESTO para que los iconos mdi funcionen
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'



const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  // Configuración general
  defaults: {
    global: {
      ripple: true,
    },
    VBtn: {
      variant: 'flat',
    },
  },
  theme: {
    defaultTheme: 'ssabTheme',
    themes: {
      ssabTheme: {
        dark: false,
        colors: {
          primary: '#F6911D',
          secondary: '#808990',
          background: '#FFFFFF',
          surface: '#F9F9F9',
          error: '#B00020',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        }
      }
    }
  }
})

export default vuetify
