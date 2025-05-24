<script setup>
import { ref, onMounted } from 'vue'

const titles = [
  "Ses Lampadaires...",
  "Ses Rues Éclairées...",
  "La Fête des Lumières..."
]

const currentTitle = ref(titles[0])
let index = 0

onMounted(() => {
  setInterval(() => {
    index = (index + 1) % titles.length
    currentTitle.value = titles[index]
  }, 2500)
})
</script>

<template>
  <div class="first-image">
    <img src="/src/assets/place.jpg" />
    <div class="overlay">
      <div class="left-title">
        <h1>Lyon s’illumine autrement</h1>
      </div>
      <div class="carousel">
        <p>{{ currentTitle }}</p>
      </div>
    </div>
  </div>

  <div class="container">
    <h2>Lyon, la Ville Lumineuse</h2>
    <p> 
      Nichée au confluent du Rhône et de la Saône, Lyon s’illumine de mille façons. Son surnom de "ville lumière" 
      trouve d’abord ses racines dans l’histoire : berceau des Frères Lumière, inventeurs du cinéma, elle brille 
      depuis toujours par sa capacité à innover et à créer. Mais Lyon est aussi lumineuse par son patrimoine éclatant 
      et ses monuments qui s’enflamment chaque soir, reflétant dans l’eau tranquille de ses fleuves la splendeur de 
      ses quais et de ses collines. 
    </p>
    <p>
      Chaque année, la Fête des Lumières transforme la ville en un immense théâtre à ciel ouvert où artistes et habitants 
      conjuguent poésie et technologie. Les façades deviennent écrans, les places s’habillent de couleurs, et la nuit lyonnaise 
      se pare de magie. C'est un hommage à la lumière au sens propre, mais aussi à celle qui éclaire les esprits et unit les cœurs.
    </p>

    <div class="lampe-card">
      <img src="/src/assets/river.jpg" />
      <p>Rivière illuminée</p>
    </div>
    
    <p>
      Car Lyon rayonne aussi par sa culture et son art de vivre. De ses traboules mystérieuses aux bouchons chaleureux, la ville 
      diffuse une chaleur humaine et une énergie discrète qui éclaire le quotidien de ses habitants. Elle est cette lumière douce et 
      constante qui accompagne ceux qui s’y perdent et s’y retrouvent.
    </p>
    <p>
      Ainsi, Lyon est lumineuse à la fois par son passé, par ses traditions et par la modernité de ses ambitions. Une ville qui éclaire 
      le présent tout en projetant un avenir éclatant.
    </p>
    <p>
      Il y a plus de lumière à Lyon qu’on ne l’imagine. Derrière chaque ruelle, chaque façade et chaque reflet sur l’eau, une nouvelle 
      lueur vous attend. Naviguez sur notre site et laissez-vous guider à travers les éclats secrets de la ville. Découvrez ces endroits 
      qui brillent autrement, entre traditions, modernité et éclats insoupçonnés.
    </p>

    <h2>Témoignage</h2>
    <p class="testimonial">
      "On parle souvent des grandes illuminations lyonnaises, mais ce qui m’impressionne le plus, ce sont les lampadaires. Oui, les lampadaires. 
      À Lyon, ils ne se contentent pas d’éclairer : ils racontent une histoire. Certains diffusent une lumière jaune douce et rétro dans les rues 
      étroites du Vieux Lyon, d’autres projettent un halo blanc moderne sur les quais rénovés. Il y a même des modèles minimalistes dans les 
      quartiers récents. Cette diversité crée des ambiances étonnamment riches. C’est peut-être étrange de le dire, mais je n’avais jamais autant 
      regardé des lampadaires avant de venir ici."
      <br>
      - Inconnu
    </p>

    <h2>Lyon, c'est aussi un campus plein de lumières</h2>
    <iframe class="iframe-card" height="300px" frameborder="0" allowfullscreen allow="geolocation" src="//umap.openstreetmap.fr/fr/map/les-lumieres-de-lyon_1229574?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=false&searchControl=false&tilelayersControl=false&embedControl=true&datalayersControl=false&onLoadPanel=none&captionBar=false&captionMenus=false&homeControl=false&fullscreenControl=true&captionControl=false&locateControl=false&measureControl=false&editinosmControl=false"></iframe>
  </div>
  
  <h3>
      Découvrez les lumières de Lyon sous un nouveau jour!
  </h3>
  <div class="discover">
  </div>

  
</template>


<style scoped>

.iframe-card{
  width: 98.8vw !important;
}

.lampe-card {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  cursor: pointer;
  max-width: 900px; 
  width: 95%;
  padding: 2rem;
  margin: auto;
}

.discover{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow:
  0 0 60px 30px #fff, /* inner white */
  0 0 100px 60px #f0f, /* middle magenta */
  0 0 140px 90px #0ff; /* outer cyan */
  justify-self: center;
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

.left-title {
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 3rem;
}

.left-title h1 {
  font-size: 4rem;
  color: #fff;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
  margin: 0;
}

.carousel {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 3rem;
  font-size: 2rem;
  color: #fff;
  text-shadow: 1px 1px 6px rgba(0,0,0,0.7);
  animation: fadein 1s ease;
  max-width: 15em;
  max-height: 7em;
  min-height: 7em;
  background-color: rgb(255, 255, 255, 0.8);
  border-radius: 1em;
}

h2 {
  font-size: 2.2rem;
  margin-top: 3rem;
  color: #222;
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

h3{
  font-size: 2em;
  text-align: center;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

.container {
  padding: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  justify-items: center;
}

.testimonial {
  font-style: italic;
  color: #555;
  border-left: 4px solid #d4af37;
  padding-left: 1rem;
  margin: 2rem 0;

}

.first-image {
  position: relative;
  height: 80vh;
  overflow: hidden;
}

.first-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.35); /* overlay semi-transparent */
}

.left-title {
  flex: 1;
}

.left-title h1 {
  font-size: 4rem;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.8);
  margin: 0;
}


</style>