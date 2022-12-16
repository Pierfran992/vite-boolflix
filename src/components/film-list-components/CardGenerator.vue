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
            <img :src="urlImg + info.poster_path" :alt="info.title">
        </div>
        <h4>{{ info.title }}</h4>
    </div>
</template>

<style lang="scss" scoped>
.gen_card {
    width: calc(100% / 5);
    padding: 10px;
    text-align: center;

    * {
        margin-bottom: 10px;
    }
}
</style>