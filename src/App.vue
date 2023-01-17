<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import LoginView from './views/login/Login.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
</script>

<template>  
  <main class="back">
    <LoginView></LoginView>  
  </main>
</template>

<style>
  .back{
    background-image: url('./assets/back1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
