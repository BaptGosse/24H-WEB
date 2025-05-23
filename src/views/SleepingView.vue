<script setup>
</script>

<template>
  <main>
    <header>
        <h1>La lumière pour dormir</h1>
        <p>Une solution pour trouver le sommeil</p>
    </header>
    <div class="container">
        <div class="card">
            <img src="../assets/dodo.jpg" alt="Un individu qui cherche son lit">
            <div class="content">
                <h2>Trouver son lit</h2>
                <p>La lumière permet de trouver son lit, mais attention il ne faut pas réveiller les gens avec la lumière.</p>
            </div>
        </div>
        
        <RouterLink to="/secret" class="card">
            <img src="../assets/lumierotherapie.jpg" alt="Image 2">
            <div class="content">
                <h2>Luminothérapie</h2>
                <p>La lumière peut aider à réguler le sommeil et à resynchroniser le rythme circadien.</p>
            </div>
        </RouterLink>
        <div class="card">
            <img src="../assets/etoile.jpg" alt="Image 3">
            <div class="content">
                <h2>Dormir à la belle étoile</h2>
                <p>Pratiquée depuis des millénaires, la sieste en plein air est très agréable, mais il faut faire attention à la météo.</p>
            </div>
        </div>
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

    .card {
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      overflow: hidden;
      max-width: 300px;
      transition: transform 0.3s ease;
    }

    .card:hover {
      transform: scale(1.05);
    }

    .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      object-position: 0 40%;
    }

    .card .content {
      padding: 1rem;
    }

    .card .content h2 {
      font-size: 1.5rem;
      margin: 0 0 1rem;
    }

    .card .content p {
      font-size: 1rem;
      color: #555;
    }

    footer {
      text-align: center;
      padding: 1rem;
      background-color: #eee;
      font-size: 0.9rem;
      color: #777;
    }
</style>