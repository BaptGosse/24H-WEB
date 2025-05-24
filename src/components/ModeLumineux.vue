<script setup>
import {ref, watch} from "vue";

const modifButton = ref(false);

function modifierButton(){
    modifButton.value = !modifButton.value;
}

watch(modifButton, (isNuit) => {
    if (isNuit) {
        document.body.classList.add('mode-nuit')
        document.body.classList.remove('mode-jour')
    } else {
        document.body.classList.add('mode-jour')
        document.body.classList.remove('mode-nuit')
    }
})
</script>

<template>
    <button class="bouton-toggle" @click="modifierButton">
        {{ modifButton ? '☀️ Activer le mode jour' : '🌙 Activer le mode nuit' }}
    </button>
</template>

<style scoped>
.bouton-toggle {
    padding: 1rem 2rem;
    border: solid 1px;
    border-radius: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    background-color: #ebffbf;
    color: #222;
    margin: auto;
    margin-top: 2rem;
    display: block;
    transition: all 0.3s ease;
}

</style>