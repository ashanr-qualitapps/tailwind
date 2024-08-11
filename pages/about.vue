<template>
    <div class="about-page bg-gray-100 min-h-screen p-8">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p class="text-lg text-gray-600 mb-6">
        Welcome to our company! We are dedicated to delivering the best services to our clients.
      </p>
      <button class="bg-accent text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-accent-dark">
        Learn More
      </button>
  
      <h1 class="text-3xl font-bold underline text-gray-800 mt-10">
        Hello world!
      </h1>
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
  