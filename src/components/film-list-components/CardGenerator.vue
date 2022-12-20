<script>
export default {
    name: "CardGenerator",

    props: ["info", "urlImg", "flag"],

    data() {
        return {

        }
    },
    computed: {
        // creata la funzione per far stampare delle bandiere al posto delle lingue 
        selectFlagLanguage() {
            const selectFlag = this.flag.find((language) => language.language === this.info.original_language);
            if (selectFlag) {
                return selectFlag.urlImg;
            }
            return this.flag[this.flag.length - 1].urlImg;

        },
        // creo la funzione per convertire il numero decimale da 1 a 10 del voto in un numero intero da 1 a 5
        convertVote() {
            let roundVote = Math.round(this.info.vote_average / 2);
            return roundVote;
        }
    }
}
</script>

<template>
    <!-- creo la card -->
    <div class="gen_card">
        <!-- slot locandina film o serie tv -->
        <div class="slot_img_card">
            <img :src="urlImg + info.poster_path" :alt="info.title || info.name"
                onerror="this.src = '../../src/assets/img/image-not-found.jpg'">
        </div>
        <!-- slot che contiene le informazioni sui film o sulle serie tv -->
        <div class="slot_info">
            <h4>{{ info.title }} {{ info.name }}</h4>
            <div><strong>Titolo Originale:</strong> {{ info.original_title }} {{ info.original_name }}</div>
            <div class="slot_language">
                <strong>Lingua Origanale:</strong>
                <img class="slot_flag" :src="selectFlagLanguage" :alt="info.original_language">
            </div>
            <div class="slot_vote">
                <strong>Voto:</strong>
                <div>
                    <!-- stampo attraverso due cicli for (come riferimento per il ciclo ho usato il valore del voto generato con la funzione convertVote) le stelle piene e le stelle vuote -->
                    <font-awesome-icon icon="fa-solid fa-star" v-for="star in convertVote" class="star_vote" />
                    <font-awesome-icon icon="fa-regular fa-star" v-for="star in (5 - convertVote)" class="star_vote" />
                </div>
            </div>
            <p><strong>Trama:</strong> {{ info.overview }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

.gen_card {
    width: calc((100% - 40px)/ 5);
    height: fit-content;
    position: relative;

    &:hover>.slot_info {
        display: block;
    }

    .slot_img_card {
        width: 100%;
        height: 320px;
    }

    .slot_info {
        color: #fff;
        background-color: rgba($color: #000000, $alpha: 0.6);
        width: 100%;
        height: 100%;
        padding: 5px;
        text-align: left;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
        overflow-y: auto;

        * {
            margin-bottom: 10px;
        }

        h4 {
            color: $fourColor;
        }

        div,
        p {
            font-size: 0.8rem;
        }

        .slot_language,
        .slot_vote {
            display: flex;
            justify-content: start;
            gap: 10px;
        }

        .slot_vote {
            strong {
                margin-right: 10x;
            }

            .star_vote {
                color: $fourColor;
                font-size: 1rem;
            }
        }

        .slot_flag {
            width: 30px;
            height: 20px;
            border-radius: 5px;
        }
    }
}
</style>