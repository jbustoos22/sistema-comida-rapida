<template>
    <nav class="bg-primary text-light py-4 shadow-lg">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <router-link to="/" class="flex items-center">
          <img :src="logoUrl" alt="Logo Comida Rápida" class="h-20 mr-2" />
          <span class="text-2xl font-semibold text-dark">Jamie's Food</span>
        </router-link>
  
        <!-- Botón de menú en móviles -->
        <button
          @click="toggleMenu"
          class="text-dark md:hidden focus:outline-none"
        >
        </button>
  
        <!-- Menú de navegación -->
        <ul
          :class="{'flex': isMenuOpen, 'hidden': !isMenuOpen}"
          class="flex-col md:flex md:flex-row md:space-x-6 items-center space-y-4 md:space-y-0"
        >
          <li class="list-none">
            <router-link to="/" class="text-dark hover:text-secondary">Inicio</router-link>
          </li>
          <li class="list-none">
            <router-link to="/menu" class="text-dark hover:text-secondary">Menú</router-link>
          </li>
          <li class="list-none">
            <router-link to="/promociones" class="text-dark hover:text-secondary">Promociones</router-link>
          </li>
          <li class="list-none">
            <router-link to="/about" class="text-dark hover:text-secondary">Acerca de</router-link>
          </li>
          <li class="list-none">
            <router-link to="/contact" class="text-dark hover:text-secondary">Contacto</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        logoUrl: new URL('@/assets/images/logo.png', import.meta.url).href,
        isMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  };
  </script>
  
  <style scoped>
  li {
    list-style: none;
  }
  </style>
  