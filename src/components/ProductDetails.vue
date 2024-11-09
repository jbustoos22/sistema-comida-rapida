<template>
    <div v-if="product" class="container mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
      <div class="flex flex-col md:flex-row items-center">
        <img 
          :src="product.image" 
          alt="Product Image" 
          class="w-full md:w-1/2 h-80 rounded-lg object-cover mb-6 md:mb-0 shadow-md mx-auto"
        />
        <div class="md:ml-10 w-full md:w-1/2 text-center md:text-left">
          <h2 class="text-4xl font-extrabold mb-4 text-gray-800">{{ product.name }}</h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-4">{{ product.description }}</p>
          <p class="text-2xl font-semibold text-primary mt-6">Precio: ${{ product.price.toFixed(2) }}</p>
          <button 
            class="mt-6 bg-primary text-white py-2 px-8 rounded-full shadow hover:bg-secondary hover:shadow-md transition-all duration-300 transform hover:scale-105"
            @click="addToCart"
          >
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
    methods: {
      addToCart() {
        this.$emit("add-to-cart", this.product);
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  
  .text-primary {
    color: #FF6600;
  }
  
  .bg-primary {
    background-color: #FF6600;
  }
  
  .hover\:bg-secondary:hover {
    background-color: #FF8C00;
  }
  
  .text-light {
    color: #fff;
  }
  
  .bg-light {
    background-color: #f9f9f9;
  }
  </style>
  