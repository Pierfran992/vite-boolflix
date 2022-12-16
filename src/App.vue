<script>
import axios from 'axios';
import SearchBar from './components/SearchBar.vue';
import FilmList from './components/FilmList.vue';

import { store } from './store.js';

export default {
    name: "App",
    components: {
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
            // creata la condizione per far ricercare un film all'utente in base al nome che inserisce
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
    <!-- componenti dell'header -->
    <header>

    </header>
    <!-- componenti del main -->
    <main>
        <SearchBar @search="getFilm" />
        <FilmList />
    </main>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
