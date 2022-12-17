<script setup lang="ts">
    import { ref } from 'vue'

    defineProps<{
        title: string,
        text: string,
    }>()
</script>
<template>
    <div
        class="absolute border-2 rounded-lg backdrop-blur-xsm"
    >
        <h1
            class="p-4 pb-2 text-4xl font-black text-[rgb(194,251,255)] filter drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
        >{{title}}</h1>
        <p
            class="text-[#D1FCFF] text-6xl font-gothic-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-4 leading-extra-tight"
        >{{text}}</p>
        <div class="w-3/4 h-4 m-4 border-[#C5E5E7] border-4 rounded-full bg-[rgba(197,229, 231,0.5)]"></div>
    </div>
</template>