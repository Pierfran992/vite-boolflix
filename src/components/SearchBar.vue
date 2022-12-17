<!-- creao la barra di ricerca per cercare i film -->
<script>
import { store } from '../store.js';

export default {
    name: "SearchBAr",
    data() {
        return {
            store,
        }
    },
    methods: {
        resetSearch() {
            store.searchTitle = "";
            this.$emit('search');
        }
    }
}
</script>

<template>
    <div class="container">
        <input id="searchFilm" type="text" placeholder="Search film..." v-model="store.searchTitle">
        <button type="submit" @click.prevent="$emit('search')">cercaaaaaa</button>
        <button type="submit" @click.prevent="resetSearch">cancellaaaaaa</button>
    </div>
</template>

<style lang="scss" scoped>
#searchFilm {
    margin: 50px 0;
}
</style>