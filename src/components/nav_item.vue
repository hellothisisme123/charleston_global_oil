<script setup lang="ts">
    import ref from 'vue'

    

    defineProps<{
        page: string
    }>()
</script>
<template>
    <div name="nav_item" class="w-[7%] h-full flex justify-center items-center font-company text-2xl font-bold drop-shadow-[0_0_3px_#000] hover:scale-125 transition-transform">
        <router-link :to="`./pages/${page}.vue`">
            {{page}}
        </router-link>
    </div>
</template>