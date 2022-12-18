<!-- creao il componente in cui verrano stampati i risultati della ricerca -->
<script>
import CardGenerator from './film-list-components/CardGenerator.vue';

import { store } from '../store.js';

export default {
    name: "FilmList",
    components: {
        CardGenerator
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="container">
        <!-- creato un ciclo for sul componente per far stampare in FilmList tutti gli oggetti contenuti nell'array filmList -->
        <CardGenerator v-for="obj in store.filmList" :key="obj.id" :info="obj" :urlImg="store.apiImgUrl" />
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.container {
    background-color: $fourColor;
    height: calc(100% - 140px);
    padding: 50px 10px;
    @include start();
    flex-wrap: wrap;
    align-items: stretch;
    gap: 30px 10px;
    overflow-y: auto;
}
</style>