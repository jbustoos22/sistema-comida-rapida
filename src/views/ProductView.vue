<template>
    <div>
      <ProductDetails :product="product" @add-to-cart="addToCart" />
    </div>
  </template>
  
  <script>
  import ProductDetails from "@/components/ProductDetails.vue";
  
  export default {
    components: { ProductDetails },
    data() {
      return {
        product: this.$route.params.product,
      };
    },
    methods: {
      addToCart(product) {
        this.$emit("add-to-cart", product);
      },
    },
  };
  </script>
  