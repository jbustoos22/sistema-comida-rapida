<template>
    <div class="product-details">
      <h1 class="product-title">{{ product.name }}</h1>
      <img :src="product.image" alt="Imagen del producto" class="product-image" />
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price">Precio: ${{ product.price ? product.price.toFixed(2) : '0.00' }}</p>
      <button class="add-to-cart" @click="addToCart">Agregar al Carrito</button>
    </div>
  </template>
  
  <script>
  import ProductsData from "@/productsData.js";
  
  export default {
    name: "ProductDetails",
    data() {
      return {
        product: null,
      };
    },
    created() {
      // Obtiene el ID desde los parámetros de la ruta
      const productId = Number(this.$route.params.id);
  
      // Encuentra el producto en ProductsData
      for (const category in ProductsData) {
        const foundProduct = ProductsData[category].find(
          (prod) => prod.id === productId
        );
        if (foundProduct) {
          this.product = foundProduct;
          break;
        }
      }
  
      if (!this.product) {
        console.error("Producto no encontrado");
      }
    },
    methods: {
      addToCart() {
        this.$emit("add-to-cart", this.product);
      },
    },
  };
  </script>
  
  <style scoped>
  .product-details {
    padding: 2rem;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  
  .product-title {
    font-size: 2rem;
    color: #01015C;
    margin-bottom: 1rem;
  }
  
  .product-image {
    width: 100%;
    max-width: 300px;
    border-radius: 8px;
    margin: 1rem 0;
  }
  
  .product-description {
    font-size: 1rem;
    color: #333;
    margin: 1rem 0;
  }
  
  .product-price {
    font-size: 1.5rem;
    color: #FF6600;
    margin: 1rem 0;
  }
  
  .add-to-cart {
    background-color: #FFD700;
    color: #01015C;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
  }
  
  .add-to-cart:hover {
    background-color: #FFC700;
  }
  </style>
  