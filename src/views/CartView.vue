<template>
    <div>
      <ShoppingCart :cart="cart" />
    </div>
  </template>
  
  <script>
  import ShoppingCart from "@/components/ShoppingCart.vue";
  
  export default {
    components: { ShoppingCart },
    data() {
      return {
        cart: [],
      };
    },
  };
  </script>
  