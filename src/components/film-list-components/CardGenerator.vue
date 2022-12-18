<script>
export default {
    name: "CardGenerator",

    props: ["info", "urlImg"],
}
</script>

<template>
    <!-- creo la card -->
    <div class="gen_card">
        <!-- slot locandina film o serie tv -->
        <div class="slot_img_card">
            <img :src="urlImg + info.poster_path" :alt="info.title || info.name">
        </div>
        <!-- slot che contiene le informazioni sui film o sulle serie tv -->
        <div class="slot_info">
            <h4>{{ info.title }} {{ info.name }}</h4>
            <span><strong>Titolo Originale:</strong> {{ info.original_title }} {{ info.original_name }}</span>
            <br>
            <span><strong>Lingua Origanale:</strong> {{ info.original_language }}</span>
            <br>
            <span><strong>Voto:</strong> {{ info.vote_average }}</span>
            <br>
            <p><strong>Trama:</strong> {{ info.overview }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

.gen_card {
    width: calc((100% - 80px)/ 5);
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

        span,
        p {
            font-size: 0.8rem;
        }
    }
}
</style>