<script setup>
import {ref} from "vue";

const affichageDet = ref(-1);

function afficheDetail(id) {
  if(affichageDet.value == id){
    affichageDet.value = -1;
  }
  else{
    affichageDet.value = id;
  }
}

</script>

<template>
  <div class="page-lampadaires">
    <h1 class="titre-lampadaire">Les différents types d'indicateurs lumineux</h1>

    <p>
      Je sais pas si vous avez remarqué, mais à Lyon, il y a différents types d'indicateurs lumineux. Vous savez, ces boutons et ces petites LEDs qui nous aident bien à nous repérer dans la nuit comme dans notre vie quotidienne.
    </p>

    <div class="galerie">
      <div class="lampe-card" @click="afficheDetail(1)">
        <img src="../assets/digicode.jpg" alt="Lampadaire n°1, droit et fier." />
        <p>Déjà le digicode, le fameux, si les lumières étaient pas là, bonne chance pour taper le bon code.</p>
        <div v-if="affichageDet === 1" class="detail">Regardez ce beau digicode, son code préféré ? Le 9841.</div>
      </div>

      <div class="lampe-card" @click="afficheDetail(2)">
        <img src="../assets/lampadaire3.jpg" alt="Lampadaire n°2, angle parfait." />
        <p>Alors celui là, si tu l'as pas, c'est simple tu te gares pas (dangereux)</p>
        <div v-if="affichageDet === 2" class="detail">Les haters diront que c'est un lampadaire mais c'est plutôt une boule.</div>
      </div>

      <div class="lampe-card" @click="afficheDetail(3)">
        <img src="../assets/vert.jpg" alt="Lampadaire n°3, au bord de la rupture." />
        <p>Au feu ! Heureusement que je sais où aller grâce à ce petit bonhomme vert 😉</p>
        <div v-if="affichageDet === 3" class="detail">Des fois je me dis que tu peux plus te perdre qu'autre chose si tu suis tous ces panneaux</div>
      </div>

      <div class="lampe-card" @click="afficheDetail(4)">
        <img src="../assets/truc.jpg" alt="Lampadaire avec toiles d’araignées." />
        <p>Et il y en a plein que j'ai oublié, les indicateurs c'est vraiment trop bien !</p>
        <div v-if="affichageDet === 4" class="detail">Je vais pas mentir, je sais pas ce que c'est, mais ça fait de la lumière</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.page-lampadaires {
  position: relative;
  padding: 2rem;
  text-align: center;
  background-color: whitesmoke;
  font-family: "Baskerville", "Garamond", "Palatino Linotype", "Times New Roman", serif;
}

.titre-lampadaire {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #2a7959;
  animation: clignote 1.2s infinite alternate;
}

@keyframes clignote {
  0% { opacity: 0.6; }
  100% { opacity: 1; }
}

.intro {
  font-style: italic;
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 2rem;
  color: #a2741c;
}

.galerie {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 1rem;
  align-items: center; 
}

.lampe-card {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 15px 50px rgb(253, 252, 190);
  transition: transform 0.3s ease;
  cursor: pointer;
  max-width: 900px; 
  width: 95%;
  padding: 2rem;
  margin: auto;
}

.lampe-card img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 0.75rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  display: block;
  margin: 0 auto;
  transition: transform 0.6s ease;
  transform: scale(0.9); 
}

.lampe-card:hover {
  transform: translateY(-5px);
}


.lampe-card p {
  margin-top: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  font-family: 'Georgia', serif;
}

p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 1.5rem 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: #444;
  text-align: justify;
}

.detail {
  padding: 0.5rem 1rem;
  font-style: italic;
  color: #666;
  border-top: 1px dashed #ccc;
  margin: 0 1rem 1rem;
  animation: fadeIn 0.4s ease-in-out;
  font-size: 0.95rem;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
