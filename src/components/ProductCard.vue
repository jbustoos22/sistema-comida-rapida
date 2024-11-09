<template>
  <div
    class="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
  >
    <img
      :src="product.image"
      alt="Product Image"
      class="w-full h-48 object-cover"
    />
    <div class="p-4">
      <h2 class="text-xl font-semibold mb-2 text-dark">{{ product.name }}</h2>
      <p class="text-muted">{{ product.description }}</p>
      <p class="text-lg font-bold text-primary mt-2">
        Precio: {{ product.price }} $
      </p>
      <router-link
        :to="{ name: 'ProductDetails', params: { id: product.id } }"
        class="inline-block mt-4 bg-primary text-light py-2 px-4 rounded hover:bg-secondary"
      >
        Ver Detalles
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
};
</script>
