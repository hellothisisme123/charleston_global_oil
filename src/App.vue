<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'


import navbar from './components/navbar.vue'
import slide_card from './components/slide_card.vue'

</script>

<template>
  <title>Charleston Global Oil</title>
  <navbar></navbar>
  <div name="bg" class="absolute top-0 -z-10 bg-[url('./assets/images/long_bg_oil_rig.jpg')] w-full min-h-[216vh]"></div>

  <slide_card 
    title="Order" 
    text="Fresh reliable oil just off the shore"
    class="bg-[rgb(197,229,231,0.2)]
    border-[rgb(197,229,231)] w-4/12 h-80 top-[30vh] right-[10vw]"
  ></slide_card>
  
  <!-- the wavy bottom section -->
  <img 
    name="wave blur backgroung"
    src="./assets/svg/home/bottom_section.svg"
    class="w-full absolute top-7/8 backdrop-blur-xsm"
  />

  <slide_card 
    title="Production" 
    text="The best oil, mined locally off the coast of South Carolina"
    class="bg-[rgb(197,229,231,0.2)]
    border-[rgb(197,229,231)] w-3/8 top-[115vh] left-[10vw]"
  ></slide_card>
  <slide_card
    title="Scrumptious"
    text="Yummy!"  
    class="bg-[rgb(197,229,231,0.2)]
    border-[rgb(197,229,231)] w-1/4 top-[105vh] right-[12vw] rounded-3xl"
  ></slide_card>
  <slide_card
    title="Affordable"
    text="We try to make our oil homely and affordable for everyone to enjoy"  
    class="bg-[rgb(197,229,231,0.2)]
    border-[rgb(197,229,231)] w-5/16 top-[145vh] right-[15vw] rounded-3xl"
  ></slide_card>

</template>

<style scoped>
  @font-face {
    font-family: Courgette;
    src: url('./assets/fonts/Courgette-Regular.ttf');
  }
</style>
