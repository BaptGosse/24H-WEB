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
    <h1 class="titre-lampadaire">Partez à la recherche des lumières de Lyon !</h1>

    <p>
      Découvrez des lieux illuminés, des lampadaires singuliers et des lumières cachées en ville grâce à notre carte interactive. 
      Amusez-vous à les retrouver, prenez-les en photo et partagez vos trouvailles sur notre serveur Discord pour vivre cette 
      expérience à plusieurs. Vous avez repéré une lumière originale qui n’est pas encore sur la carte ? Envoyez-la aussi, et 
      contribuez à enrichir notre collection !
    </p>

    <h2>
      Discord : <a href="https://discord.gg/hPNtdPeSTE" target="_blank">Rejoignez-nous ici</a>
    </h2>

    <iframe class="iframe-card" height="300px" frameborder="0" allowfullscreen allow="geolocation" src="//umap.openstreetmap.fr/fr/map/les-lumieres-de-lyon_1229574?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=false&searchControl=false&tilelayersControl=false&embedControl=true&datalayersControl=false&onLoadPanel=none&captionBar=false&captionMenus=false&homeControl=false&fullscreenControl=true&captionControl=false&locateControl=false&measureControl=false&editinosmControl=false"></iframe>
  
  </div>
</template>

<style scoped>

.iframe-card{
  width: 98.8vw !important;
}

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

</style>
