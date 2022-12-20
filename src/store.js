import { reactive } from 'vue';

export const store = reactive({
    flagLanguage: [
        {
            urlImg: "gb.png",
            language: "en",
        },
        {
            urlImg: "it.png",
            language: "it",
        },
        {
            urlImg: "no.png",
            language: "no",
        },
        {
            urlImg: "world.jpg",
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