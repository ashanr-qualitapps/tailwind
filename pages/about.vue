<template>
    <div class="about-page">
      <h1>About Us</h1>
      <p>Welcome to our company! We are dedicated to delivering the best services to our clients.</p>
      <button>Learn More</button>
    </div>
  </template>
  
  <script setup>
  // Your script logic here
  </script>
  
  <style scoped>
  .about-page {
    @apply bg-accent text-white p-6;
  
    h1 {
      @apply text-3xl font-bold mb-4;
    }
  
    p {
      @apply text-secondary mb-2;
    }
  
    button {
      @apply bg-accent text-white py-2 px-4 rounded;
    }
  }
  </style>
  