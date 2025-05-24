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
    <h1 class="titre-lampadaire">50 Nuances de Luminaires</h1>
    <p class="intro">
      Explorez la sensualité métallique et l’élégance tubulaire des lampadaires lyonnais. 
      Un hommage non-sollicité, mais ô combien éclairant.
    </p>

    <p>
      Aussi simples qu'ils puissent paraître, les lampadaires de Lyon racontent à leur manière l’histoire discrète des rues qu’ils 
      éclairent. Qu’ils soient de vieux modèles en fonte au charme rétro dans les ruelles du Vieux Lyon, de hautes silhouettes 
      modernes aux halos blancs sur les quais rénovés, ou de petites boules lumineuses suspendues dans les places cachées, chaque 
      lampadaire apporte sa touche à l’atmosphère nocturne de la ville. Certains projettent une lumière douce et jaune qui réchauffe 
      les pavés, d’autres s’imposent par une clarté presque irréelle, et il arrive même que l’on croise un réverbère enveloppé d’une 
      toile d’araignée, scintillant au gré des reflets de la nuit. Ces détails ordinaires façonnent l’âme lumineuse de Lyon, offrant 
      au promeneur attentif des tableaux inattendus et des ambiances qu’on ne trouve nulle part ailleurs.
    </p>

    <h2>
      Découvrez notre sélection de lampadaires !
    </h2>

    <div class="galerie">
      <div class="lampe-card" @click="afficheDetail(1)">
        <img src="../../assets/lampadaire1.jpg" alt="Lampadaire n°1, droit et fier." />
        <p>Le classique. Sobre. Inflexible. Un vrai pilier de la société.</p>
        <div v-if="affichageDet === 1" class="detail">Un lampadaire né en 1972, fan de Johnny Hallyday. Son rêve ? Éclairer Broadway.</div>
      </div>

      <div class="lampe-card" @click="afficheDetail(2)">
        <img src="../../assets/lampadaire2.jpg" alt="Lampadaire n°2, angle parfait." />
        <p>45° de charisme. L’éclairage angulaire n’a jamais été aussi sexy.</p>
        <div v-if="affichageDet === 2" class="detail">Nommé "L’Incliné", il a remporté Miss Lampadaire Rhône-Alpes en 2015.</div>
      </div>

      <div class="lampe-card" @click="afficheDetail(3)">
        <img src="../../assets/lampadaire3.jpg" alt="Lampadaire n°3, au bord de la rupture." />
        <p>Il a vu des choses. Des nuits entières. Des pigeons.</p>
        <div v-if="affichageDet === 3" class="detail">Traumatisé par la Place Bellecour, il consulte un psy depuis 2018.</div>
      </div>

      <div class="lampe-card" @click="afficheDetail(4)">
        <img src="../../assets/lampadaire-toile.jpg" alt="Lampadaire avec toiles d’araignées." />
        <p>Il n’éclaire plus… mais il tisse des liens. Très lentement.</p>
        <div v-if="affichageDet === 4" class="detail">Son colocataire est une araignée nommée Gérard. Ils ont une chaîne YouTube.</div>
      </div>

      <div class="lampe-card" @click="afficheDetail(5)">
        <img src="../../assets/lampadaire-bizarre.jpg" alt="Lampadaire mutant." />
        <p>Personne ne sait ce que c’est. Le photographe a mal fait son taf ...</p>
        <div v-if="affichageDet === 5" class="detail">Appelé "La Chose", ce lampadaire est interdit dans 6 pays.</div>
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
