import { reactive } from 'vue';

export const store = reactive({
    flagLanguage: [
        {
            urlImg: "./assets/img/gb.png",
            language: "en",
        },
        {
            urlImg: "./assets/img/it.png",
            language: "it",
        },
        {
            urlImg: "./assets/img/no.png",
            language: "no",
        },
        {
            urlImg: "./assets/img/world.jpg",
            language: "all",
        },
    ],
    filmList: [],
    apiPopularURL: "https://api.themoviedb.org/3/movie/popular?api_key=7947fac27724a3f0b35b77bc5930097d&language=it-IT",
    apiSearchURL: "https://api.themoviedb.org/3/search/multi?api_key=7947fac27724a3f0b35b77bc5930097d&language=it-IT&",
    apiImgUrl: "https://image.tmdb.org/t/p/w342",
    searchTitle: "",
    apiParameter: "query",
});