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
        <input id="searchFilm" type="text" placeholder="Search Film o TV Series..." v-model="store.searchTitle"
            @keyup.enter="$emit('search')">
        <button type="submit" @click.prevent="$emit('search')">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
        <button type="submit" @click.prevent="resetSearch">
            <font-awesome-icon icon="fa-solid fa-delete-left" />
        </button>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.container {
    background-color: $fourColor;
    height: 60px;
    @include center();
    gap: 10px;

    #searchFilm {
        color: #fff;
        background-color: rgba($color: #000000, $alpha: 0.9);
        width: 60%;
        height: 30px;
        padding-left: 10px;
        line-height: 30px;
        border: none;
        border-radius: 10px;
    }

    button {
        color: $firstColor;
        background-color: rgba($color: #000000, $alpha: 0.9);
        width: 40px;
        height: 40px;
        line-height: 40px;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
    }
}
</style>