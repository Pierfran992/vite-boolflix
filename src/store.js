import { reactive } from 'vue';

export const store = reactive({
    filmList: [],
    apiPopularURL: "https://api.themoviedb.org/3/movie/popular?api_key=7947fac27724a3f0b35b77bc5930097d&language=it-IT",
    apiSearchURL: "https://api.themoviedb.org/3/search/movie?api_key=7947fac27724a3f0b35b77bc5930097d&language=it-IT&",
    searchTitle: "",
    apiParameter: "query",
});