<template>
    <div class="container mx-auto my-8 bg-light p-6 rounded-lg">
      <h1 class="text-3xl font-bold text-center text-dark mb-10">Menú de Comida Rápida</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
      </div>
    </div>
  </template>
  
  <script>
  import productsData from "@/productsData.js";
  import ProductCard from "@/components/ProductCard.vue";
  
  export default {
    name: "Home",
    components: { ProductCard },
    data() {
      return {
        products: [
          ...productsData.tacos.map((item) => ({ ...item, category: "tacos" })),
          ...productsData.hamburguesas.map((item) => ({
            ...item,
            category: "hamburguesas",
          })),
          ...productsData.pizzas.map((item) => ({ ...item, category: "pizzas" })),
        ],
      };
    },
  };
  </script>
  