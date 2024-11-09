<template>
    <div class="menu">
      <h1 class="page-title">Nuestro Menú</h1>
      <div class="product-grid">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :product="product"
          @view-details="viewDetails"
        />
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from "@/components/ProductCard.vue";
  
  export default {
    components: { ProductCard },
    data() {
      return {
        products: [
          { name: "Hamburguesa Clásica", price: 5.99, image: new URL('@/assets/images/hamburguesa.jpeg', import.meta.url).href },
          { name: "Papas Fritas", price: 2.99, image: new URL('@/assets/images/tacos.jpg', import.meta.url).href },
          { name: "Bebida", price: 1.99, image: new URL('@/assets/images/pizza.jpg', import.meta.url).href },
        ],
      };
    },
    methods: {
      viewDetails(product) {
        this.$router.push({ name: "ProductDetails", params: { product } });
      },
    },
  };
  </script>
  
  <style scoped>
  .page-title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
    color: #01015C;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
    padding: 2rem;
  }
  </style>
  