<template>
  <div class="cartes-container">
    <div class="carte">
      <img src="../assets/cuneifsorme.jpg" alt="Carte 1" class="carte-image-1">
      <div class="carte-info">
        <h3>Site réalisé par l'équipe 𒂙𒄘𒁺𒀱</h3>
        <p>Peut-on seulement appelé ça un site ? C'est plus une oeuvre d'art</p>
      </div>
    </div>
    <div class="carte">
      <img src="../assets/cereales.jpg" alt="Carte 2" class="carte-image">
      <div class="carte-info">
        <h3>Lyon et ses Lumières</h3>
        <p>On a cherché un endroit où mettre ça mais franchement on a pas trouvé donc c'est là</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Style des cartes */
.cartes-container {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-top: 50px;
  flex-wrap: wrap; /* Permet aux cartes de s'empiler sur de petits écrans */
  margin: 2%
}

.carte {
  width: 48%; /* Les cartes prennent presque 50% de la largeur */
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.carte:hover {
  transform: translateY(-10px);
}

.carte-image-1 {
  width: 100%;
}

.carte-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 0 60%;
}

.carte-info {
  padding: 15px;
  text-align: center;
}

.carte-info h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.carte-info p {
  font-size: 1rem;
  color: #555;
}

/* Styles pour les écrans plus petits (mobiles) */
@media (max-width: 768px) {
  .carte {
    width: 100%; /* Les cartes prennent toute la largeur sur petits écrans */
  }
}
</style>
