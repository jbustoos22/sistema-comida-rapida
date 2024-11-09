<template>
    <div v-if="product" class="container mx-auto my-10 p-6 bg-light shadow-md rounded-lg">
      <div class="flex flex-col md:flex-row">
        <img :src="product.image" alt="Product Image" class="w-full md:w-1/2 rounded-lg object-cover mb-6 md:mb-0" />
        <div class="md:ml-8">
          <h2 class="text-3xl font-bold mb-4 text-dark">{{ product.name }}</h2>
          <p class="text-muted text-lg">{{ product.description }}</p>
          <p class="text-2xl font-bold text-primary mt-4">Precio: {{ product.price }} MXN</p>
          <button class="mt-6 bg-primary text-light py-2 px-6 rounded hover:bg-secondary">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import productsData from "@/productsData.js";
  
  export default {
    name: "ProductDetails",
    data() {
      return {
        product: null,
      };
    },
    created() {
      const { category, id } = this.$route.params;
      this.product = productsData[category]?.find(
        (item) => item.id === parseInt(id)
      );
    },
  };
  </script>
  