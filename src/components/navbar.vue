<script setup lang="ts">

</script>


<template>
    <div name="navbar" class="h-[10vh] w-full fixed top-0 left-0 bg-gradient-to-b from-[var(--nav-bg-color-start)] to-[var(--nav-bg-color-end)] flex justify-end items-center text-[var(--def-blue)] drop-shadow-[0_0_3px_#000]">
        <div name="logo image" class="nav_logo_image flex justify-evenly items-center h-full w-[23%] absolute left-0 font-black font-company text-4xl">
            <img src="../assets/svg/Oil_logo.svg" class="max-h-[80%]" alt="">
            Charleston Global Oil
        </div>
        <div name="nav item" class="w-[10%] h-full outline"></div>
        <div name="nav item" class="w-[10%] h-full outline"></div>
        <div name="nav item" class="w-[10%] h-full outline"></div>
        <div name="nav item" class="w-[10%] h-full outline"></div>
        <div name="nav item" class="w-[10%] h-full outline"></div>
        <div name="nav item" class="w-[10%] h-full outline"></div>
    </div>
</template>

<style>
    :root {
        --nav-bg-color-start: rgb(197, 229, 231, 0.7);
        --nav-bg-color-end: rgb(197, 229, 231, 0);
        --logo-font: Courgette;
        --def-blue: rgb(197, 229, 231);
    }

    .nav_logo_image {
        /*-webkit-text-stroke: 0px #fff;*/
    }
</style>