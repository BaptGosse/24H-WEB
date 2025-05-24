<template>
  <header class="header">
    <div class="logo-container">
      <router-link to="/">
        <img class="logo" src="../../assets/logo/lyombre-logo.png" alt="Lyombre Logotype in the footer" />
      </router-link>
    </div>

    <!-- Menu burger pour les petits écrans -->
    <div class="burger-icon" @click="toggleMenu">
      <div class="burger-bar"></div>
      <div class="burger-bar"></div>
      <div class="burger-bar"></div>
    </div>

    <!-- Navbar (liens) -->
    <nav :class="{'navbar': true, 'active': menuOpen}">
      <ul class="navbar-list">
          <li class="navbar-item"><a href="/" class="navbar-link">Accueil</a></li>
          <li class="navbar-item"><a href="/lampadaire" class="navbar-link">Lampadaires</a></li>
          <li class="navbar-item"><a href="/indicateur" class="navbar-link">indicateurs</a></li>
          <li class="navbar-item"><a href="/sleeping" class="navbar-link">Sommeil</a></li>
          <li class="navbar-item"><a href="/flashbang" class="navbar-link">Bonheur</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

// Etat pour gérer l'ouverture/fermeture du menu burger
const menuOpen = ref(false);

// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<style scoped>
/* Style du header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  position: relative;
}

/* Conteneur du logo */
.logo-container {
  display: flex;
  align-items: center;
}

/* Style du logo */
.logo {
  height: 40px;
  width: auto;
}

/* Menu burger (icône hamburger) */
.burger-icon {
  display: none; /* Masqué par défaut, visible sur mobile */
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
}

.burger-bar {
  width: 30px;
  height: 4px;
  background-color: white;
  border-radius: 2px;
}

/* Styles de la navbar */
.navbar {
  display: flex;
  justify-content: flex-end;
  width: 100%;
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

/* Afficher le menu burger et la navbar en mode mobile */
@media (max-width: 768px) {
  .navbar {
    display: none; /* Masquer la navbar sur les petits écrans */
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #333;
    width: 200px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    flex-direction: column;  /* Disposition verticale des liens */
    gap: 10px;
    padding: 15px;
    z-index: 10;
  }


  .navbar.active {
    display: flex; /* Afficher la navbar quand le menu est ouvert */
  }

  .burger-icon {
    display: flex; /* Afficher le burger icon sur mobile */
  }

  .navbar-item {
    width: 100%;
    text-align: center;
  }

  .navbar-link {
    display: block;
    padding: 10px;
    width: 100%; /* Prend toute la largeur du conteneur */
  }

  .navbar-list {
    flex-direction: column; /* Disposition verticale des liens */
  }
}
</style>
