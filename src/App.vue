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
}
</script>

<template>
    <!-- componenti dell'header -->
    <header>

    </header>
    <!-- componenti del main -->
    <main>
        <SearchBar />
        <FilmList />
    </main>

</template>

<style lang="scss">

</style>
