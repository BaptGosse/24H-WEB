<template>
  <header class="header">
    <div class="logo-container">
      <router-link to="/">
        <img href="/" class="logo" src="../../assets/logo/lyombre-logo.png" alt="Lyombre Logotype in the footer" />
      </router-link>
    </div>
    <nav class="navbar">
      <ul class="navbar-list">
          <li class="navbar-item"><a href="/" class="navbar-link">Accueil</a></li>
          <li class="navbar-item"><a href="/lampadaire" class="navbar-link">Lampadaires</a></li>
          <li class="navbar-item"><a href="/sleeping" class="navbar-link">Sommeil</a></li>
          <li class="navbar-item"><a href="/flashbang" class="navbar-link">Bonheur</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// Pas de logique nécessaire ici, juste le header avec le logo et la navbar
</script>

<style scoped>
/* Style du header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
}

/* Conteneur du logo */
.logo-container {
  display: flex;
  align-items: center;
}

/* Style du logo */
.logo {
  height: 40px; /* Ajuste la taille du logo selon tes besoins */
  width: auto;
}

/* Style de la navbar */
.navbar {
  display: flex;
  justify-content: flex-end;
}

.navbar-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}

.navbar-item {
  text-align: center;
}

.navbar-link {
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;
}

.navbar-link:hover {
  color: #f0a500;
}
</style>
