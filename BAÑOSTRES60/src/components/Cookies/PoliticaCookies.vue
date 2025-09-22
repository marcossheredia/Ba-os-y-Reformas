<template>
  <div class="politica-cookies">
    <h1>Política de Cookies</h1>
    <p>
      Este sitio web utiliza cookies para mejorar la experiencia del usuario. Al continuar navegando, aceptas el uso de cookies de acuerdo con esta política.
    </p>
    <h2>¿Qué son las cookies?</h2>
    <p>
      Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo al visitar una página web.
    </p>
    <h2>¿Qué tipo de cookies usamos?</h2>
    <ul>
      <li><strong>Cookies técnicas:</strong> necesarias para el funcionamiento básico del sitio.</li>
      <li><strong>Cookies analíticas:</strong> nos ayudan a entender cómo los usuarios interactúan con el sitio.</li>
    </ul>
    <h2>¿Cómo puedes controlar las cookies?</h2>
    <p>
      Puedes controlar o eliminar las cookies desde la configuración de tu navegador. Si las desactivas, algunas funciones del sitio pueden no estar disponibles.
    </p>
  </div>
</template>

<style scoped>
.politica-cookies {
  --primary: var(--color-primary, #00bcd4);
  --primary-dark: var(--color-primary-dark, #0097a7);

  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem 2.5rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  font-family: 'Poppins', sans-serif;
  line-height: 1.7;
  color: #333;
}

.politica-cookies h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-dark);
  margin-bottom: 1.5rem;
  position: relative;
}

.politica-cookies h1::after {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  background-color: var(--primary);
  margin: 0.8rem auto 0;
  border-radius: 2px;
}

.politica-cookies h2 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary);
  margin: 1.8rem 0 0.8rem;
}

.politica-cookies p {
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #444;
}

.politica-cookies ul {
  padding-left: 1.2rem;
  margin: 1rem 0;
}

.politica-cookies li {
  margin-bottom: 0.6rem;
  font-size: 1rem;
  color: #444;
}

.politica-cookies strong {
  color: var(--primary-dark);
}

/* Responsive */
@media (max-width: 768px) {
  .politica-cookies {
    padding: 1.5rem;
  }
  .politica-cookies h1 {
    font-size: 1.6rem;
  }
  .politica-cookies h2 {
    font-size: 1.2rem;
  }
}
</style>
