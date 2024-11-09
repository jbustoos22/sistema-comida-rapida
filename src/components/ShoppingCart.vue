<template>
    <div class="shopping-cart">
      <h2>Carrito de Compras</h2>
      <div v-if="cart.length > 0">
        <div v-for="(item, index) in cart" :key="index" class="cart-item">
          <span>{{ item.name }} - {{ item.price }} $</span>
        </div>
        <p>Total: {{ cartTotal }} $</p>
      </div>
      <div v-else>
        <p>Tu carrito está vacío.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["cart"],
    computed: {
      cartTotal() {
        return this.cart.reduce((total, item) => total + item.price, 0);
      },
    },
  };
  </script>
  
  <style scoped>
  .shopping-cart {
    margin: 1rem;
  }
  </style>
  