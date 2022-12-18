<script>
import axios from 'axios';
import BarHeader from './components/BarHeader.vue';
import SearchBar from './components/SearchBar.vue';
import FilmList from './components/FilmList.vue';

import { store } from './store.js';

export default {
    name: "App",
    components: {
        BarHeader,
        SearchBar,
        FilmList,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        // creo il metodo per far stampare dei risultati di film in pagina
        getFilm() {
            // innanzitutto associo a myUrl l'url di film popolari 
            let myUrl = store.apiPopularURL;
            // creata la condizione per far ricercare un film o una serieTV all'utente in base al nome che inserisce
            if (store.searchTitle !== "") {
                myUrl = `${store.apiSearchURL}${store.apiParameter}=${store.searchTitle}`;
            }

            axios
                .get(myUrl)
                .then(res => {
                    store.filmList = res.data.results;
                })
                .catch(problem => {
                    console.log("Errori", problem);
                });
        }
    },
    mounted() {
        // faccio partire il metodo dopo che ha caricato la struttura della pagina
        this.getFilm();
    }
}
</script>

<template>
    <section class="top_screen">

    </section>

    <section class="middle_screen">
        <!-- creo il conteiner dell'app -->
        <div class="app_container">
            <BarHeader />
            <SearchBar @search="getFilm" />
            <FilmList />
        </div>
    </section>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;

.top_screen {
    background-color: $fourColor;
    height: 100px;
}

.middle_screen {
    background-color: $thirdColor;
    height: calc(100% - 100px);
    min-height: calc(100vh - 100px);
}

.app_container {
    background-color: aliceblue;
    width: 80%;
    max-width: 1170px;
    height: 800px;
    margin: 0 auto;
    position: relative;
    top: -50px;
}
</style>
