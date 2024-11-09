<template>
    <div class="carousel-container">
      <Carousel :items-to-show="1" :wrap-around="true">
        <Slide v-for="(product, index) in products" :key="index">
          <ProductCard :product="product" @view-details="viewDetails" />
        </Slide>
      </Carousel>
    </div>
  </template>
  
  <script>
  import { Carousel, Slide } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';
  import ProductCard from './ProductCard.vue';
  
  export default {
    components: { Carousel, Slide, ProductCard },
    props: ["products"],
    methods: {
      viewDetails(product) {
        this.$emit("view-details", product);
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel-container {
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
    background: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .carousel-container .carousel__slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  