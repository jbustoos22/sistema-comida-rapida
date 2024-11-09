<template>
    <footer class="bg-dark text-light py-8">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <!-- Información del negocio -->
        <div>
          <h3 class="text-xl font-semibold mb-2 text-primary">Sobre Nosotros</h3>
          <p class="text-muted">
            Somos un negocio de comida rápida comprometido con ofrecer sabores deliciosos y únicos.
            ¡Ven a disfrutar nuestras hamburguesas, tacos y pizzas con la mejor calidad!
          </p>
        </div>
  
        <!-- Horario de atención -->
        <div>
          <h3 class="text-xl font-semibold mb-2 text-primary">Horario de Atención</h3>
          <ul class="text-muted">
            <li>Lunes a Viernes: 11:00 AM - 11:00 PM</li>
            <li>Sábados y Domingos: 12:00 PM - 12:00 AM</li>
          </ul>
        </div>
  
        <!-- Información de contacto -->
        <div>
          <h3 class="text-xl font-semibold mb-2 text-primary">Contacto</h3>
          <p class="text-muted">Teléfono: (123) 456-7890</p>
          <p class="text-muted">Email: contacto@comidarapida.com</p>
          <div class="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" class="hover:text-secondary">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="hover:text-secondary">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="hover:text-secondary">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="text-center text-muted mt-8">
        © 2024 Comida Rápida. Todos los derechos reservados.
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  i {
    font-size: 1.25rem;
  }
  </style>
  