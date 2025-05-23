<script setup>
</script>

<script setup>
</script>

<template>
    <section class="expo">
        <h1 class="titre-expo">Un Raphaël heureux, c'est Lyon qui rayonne</h1>
        <p class="intro">
        La lumière ce n'est pas que les lampadaires, les installations mais c'est aussi la lumière de l'écran, la lumière du geek comme Raphael au final. C'est elle qui rassemble et qui illumine nos coeurs.
        </p>
        <div class="galerie-neon">
            <div class="lampe-card-neon">
            <img src="../../assets/iut-flashbang.jpg" alt="Flashbang." />
            <p>La lumière éclaire la nuit, et illumine sa vie.</p>
            </div>

            <div class="lampe-card-neon">
            <img src="../../assets/terreur.jpg" alt="Terrifiant." />
            <p>L'homme à la lumière, terrifiant.</p>
            </div>

            <div class="lampe-card-neon">
                <img src="../../assets/geek-clavier.jpg" alt="clavier de geek" />
                <p>Son clavier éclaire Lyon plus que la Fête des Lumières.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>

.intro {
  font-style: italic;
  margin-bottom: 4rem;
  font-weight: bold;
  font-size: 2rem;
  color: white;
}

.expo {
  padding: 4rem 2rem;
  background: linear-gradient(130deg, #111 0%, #2c003e 100%);
  color: #fff;
  font-family: 'Trebuchet MS', sans-serif;
  min-height: 100vh;
  text-align: center;
}

.titre-expo {
  font-size: 3rem;
  color: #ff66c4;
  margin-bottom: 4rem;
  text-shadow: 0 0 10px #ff66c4, 0 0 20px #ff66c4;
  animation: clignote 1.2s infinite alternate;
}

@keyframes clignote {
  0% { opacity: 0.8; transform: scale(1); }
  100% { opacity: 1; transform: scale(1.03); }
}

.galerie-neon {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
}

.lampe-card-neon {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  padding: 2rem;
  width: 85%;
  max-width: 900px;
  transform: rotateZ(-1deg);
  box-shadow: 0 0 25px rgba(255, 105, 180, 0.3);
  transition: transform 0.5s ease, box-shadow 0.4s ease;
}

.lampe-card-neon:hover {
  transform: rotateZ(1deg) scale(1.03);
  box-shadow: 0 0 35px rgba(255, 105, 180, 0.6), 0 0 70px rgba(255, 0, 255, 0.2);
}

.lampe-card-neon img {
  width: 100%;
  max-height: 800px;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
}

.lampe-card-neon p {
  font-size: 1.2rem;
  color: #ffe5f7;
  font-style: italic;
  text-shadow: 0 0 3px #ff77cc;
}

</style>