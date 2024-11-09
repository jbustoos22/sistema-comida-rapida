// src/productsData.js
export default {
    tacos: [
      {
        id: 1,
        name: "Taco de Asada",
        description: "Delicioso taco de carne asada con cebolla y cilantro.",
        price: 50,
        image: new URL('@/assets/images/taco-asada.jpg', import.meta.url).href
        ,
      },
      {
        id: 2,
        name: "Taco al Pastor",
        description: "Taco tradicional al pastor con piña y cebolla.",
        price: 45,
        image: new URL('@/assets/images/taco-pastor.jpg', import.meta.url).href
      },
    ],
    hamburguesas: [
      {
        id: 3,
        name: "Hamburguesa Clásica",
        description: "Hamburguesa con carne, queso y vegetales frescos.",
        price: 70,
        image: new URL('@/assets/images/hamburguesa-clasica.jpg', import.meta.url).href
      },
      {
        id: 4,
        name: "Hamburguesa BBQ",
        description: "Hamburguesa con salsa BBQ, queso cheddar y cebolla caramelizada.",
        price: 85,
        image: new URL('@/assets/images/hamburguesa-bbq.jpg', import.meta.url).href
      },
    ],
    pizzas: [
      {
        id: 5,
        name: "Pizza de Pepperoni",
        description: "Pizza con pepperoni, queso mozzarella y salsa de tomate.",
        price: 120,
        image: new URL('@/assets/images/pizza-pepperoni.jpg', import.meta.url).href
      },
      {
        id: 6,
        name: "Pizza Vegetariana",
        description: "Pizza con vegetales frescos, queso mozzarella y salsa de tomate.",
        price: 110,
        image: new URL('@/assets/images/pizza-vegetariana.jpg', import.meta.url).href
      },
    ],
  };
  