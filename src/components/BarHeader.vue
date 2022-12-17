<!-- creo la barra superiore della pagina che verrà inserita nell'header -->
<script>
export default {
    name: "BarHeader",
}
</script>

<template>
    <div class="container">
        <div class="slot_logo">
            <div class="slot_img">
                <img src="../assets/img/logoboolflix.png" alt="logo_boolflix">
            </div>
            <h2>BoolFlix</h2>
        </div>

        <div class="slot_user">
            <span><strong>Pierfrancesco</strong></span>
            <div class="slot_icon_user">
                <img src="../assets/img/iconuser.png" alt="icon_user">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.container {
    background-color: #000000;
    height: 80px;
    padding: 10px;
    @include between();
}

.slot_logo {
    height: 100%;
    @include start();
    cursor: pointer;

    .slot_img {
        @include iconSize();
    }

    h2 {
        color: $firstColor;
        font-size: 30px;
        font-weight: 800;
    }
}

.slot_user {
    height: 100%;
    @include start();

    .slot_icon_user {
        @include iconSize();
        padding: 5px;
        cursor: pointer;
        border: solid 2px $firstColor;
        border-radius: 10px;
    }

    span {
        color: $firstColor;
        cursor: pointer;
    }
}
</style>