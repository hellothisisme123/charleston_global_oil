<script setup lang="ts">
import nav_item from './nav_item.vue'
</script>


<template>
    <div name="navbar" class="h-[10vh] w-full fixed top-0 left-0 bg-gradient-to-b from-[var(--nav-bg-color-start)] to-transparent flex justify-end items-center text-[var(--def-blue)] filter drop-shadow-[0_0_3px_#ccc7] z-50">
        <div name="logo image" class="nav_logo_image flex justify-evenly items-center h-full w-[23%] absolute left-0 font-black font-company text-4xl drop-shadow-[0_0_3px_#ccc7]">
            <img src="../assets/svg/Oil_logo.svg" class="max-h-[80%]" alt="">
            <span class="drop-shadow-[0_0_3px_#000]">
                Charleston Global Oil
            </span>
        </div>
        <nav_item>About</nav_item>
        <nav_item>Shop</nav_item>
        <nav_item>Pricing</nav_item>
        <nav_item>Nutrition</nav_item>
        <nav_item>Prepare</nav_item>
        <nav_item>Safety</nav_item>
    </div>
</template>

<style>
    :root {
        --nav-bg-color-start: rgb(197, 229, 231, 0.7);
        --logo-font: Courgette;
        --def-blue: rgb(197, 229, 231);
    }

    .nav_logo_image {
        /*-webkit-text-stroke: 0px #fff;*/
    }
</style>