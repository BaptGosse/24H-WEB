<script setup>
</script>

<template>
  <main>
    <header>
        <h1>Il l'a tué</h1>
        <p>Faites attention au 24h Info...</p>
    </header>
    <div class="container">
      
          <img src="../assets/lumierotherapie.jpg" alt="Image 2">
    </div>
  </main>
</template>

<style scoped>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    header {
      color: #555;
      text-align: center;
      padding: 2rem 1rem;
    }

    header h1 {
      margin: 0;
      font-size: 2.5rem;
    }

    header p {
      font-size: 1.5rem;
      color: #777;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 2rem;
      gap: 2rem;
    }

    img {
      width: 100%;
      height: 500px;
      object-fit: cover;
      object-position: 0 40%;
    }
</style>