<template>
    <nav class="bg-primary text-light py-4 shadow-lg">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-2xl font-semibold text-dark">
          Comida Rápida
        </router-link>
        <ul class="flex space-x-6">
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
  
  <style scoped>
  /* Elimina los puntos de lista */
  li {
    list-style: none;
  }
  </style>
  