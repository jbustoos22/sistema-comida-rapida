<template>
    <nav class="bg-primary text-light py-4 shadow-lg">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-2xl font-semibold">
          Comida Rápida
        </router-link>
        <ul class="flex space-x-6">
          <li>
            <router-link to="/" class="hover:text-secondary">Inicio</router-link>
          </li>
          <li>
            <router-link to="/menu" class="hover:text-secondary">Menú</router-link>
          </li>
          <li>
            <router-link to="/promociones" class="hover:text-secondary">Promociones</router-link>
          </li>
          <li>
            <router-link to="/about" class="hover:text-secondary">Acerca de</router-link>
          </li>
          <li>
            <router-link to="/contact" class="hover:text-secondary">Contacto</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <style scoped>
  li {
    list-style: none;
  }
  </style>
  