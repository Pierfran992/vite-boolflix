<script>
export default {
    name: "CardGenerator",

    props: ["info", "urlImg"],
}
</script>

<template>
    <!-- creo la card -->
    <div class="gen_card">
        <div class="slot_img_card">
            <img :src="urlImg + info.poster_path" :alt="info.title || info.name">
        </div>
        <h4>{{ info.title }} {{ info.name }}</h4>
        <span>Titolo Originale: {{ info.original_title }} {{ info.original_name }}</span>
        <span>Lingua Origanale: {{ info.original_language }}</span>
        <span>Voto: {{ info.vote_average }}</span>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/partials/mixins.scss' as *;

.gen_card {
    width: calc(100% / 5);
    padding: 10px;
    @include column();
}
</style>