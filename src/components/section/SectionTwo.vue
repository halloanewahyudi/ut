<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';
import { ref } from 'vue'

import Featured from '../element/Featured.vue';

import ElTabs from '../element/ElTabs.vue';


onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-two',
            start: 'top 80%',
            end: '=+100',
            scrub: 1,
            //pin:true,
          //  markers: true
        }
    })
    tl.fromTo('.title-one', {
        opacity: 0,
        x: -200
    }, {
        duration: 1,
        opacity: 1,
        x: 0
    })
    tl.fromTo('.title-two', {
        opacity: 0,
        x: 200
    }, {
        duration: 1,
        opacity: 1,
        x: 0
    })
    tl.fromTo('.feat', {
        opacity: 0,
        scale: 0.3,
    }, {
        duration: 1,
        opacity: 1,
        scale: 1
    })
})
</script>
<template>
    <div class="section-two container relative">
        <div class="max-w-[860px] mx-auto py-20 flex flex-col justify-center items-center">
            <h1 class="title-one text-3xl lg:text-7xl  text-brand-1">
                United Tractors
            </h1>
            <h2 class="title-two text-2xl lg:text-6xl font-bold"> Sustainability Initiatives</h2>
        </div>
        <div class="feat">
            <ElTabs/>
        </div>
    </div>
</template>