<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';
import { ref } from 'vue'

import Featured from '../element/Featured.vue';
import solerpanel from '@/assets/img/solarpanel.jpg'
import utnb from '@/assets/img/utnb.jpg'
import ElTabs from '../element/ElTabs.vue';
const dataFeature = [
    {
        id: 1,
        title: 'Solar Photovoltaics',
        summary: 'United Tractors saat ini sudah memasang Solar PV berkapasitas 200 kWp',
        description: 'United Tractors saat ini sudah memasang Solar PV berkapasitas 200 kWp dengan tipe on-grid. Berdasarkan data Januari hingga Juni 2022, Solar PV yang terpasang mampu mengurangi konsumsi listrik sebesar 63.748 kWh atau sebesar Rp 66.042.928 per tahun.',
        bg: solerpanel
    },
    {
        id: 2,
        title: 'Green Building',
        summary: 'Dibangun di atas lahan seluas 2,5 hektare (Ha) dengan luas bangunan 5,8 hektare (Ha) ',
        description: 'Dibangun di atas lahan seluas 2,5 hektare (Ha) dengan luas bangunan 5,8 hektare (Ha), desain Gedung United Tractors Head Office menyerupai ekskavator. Tidak hanya desainnya yang inovatif, sebagai bentuk kepedulian United Tractors terhadap lingkungan, kami membangun gedung ini dengan standar konsep green building. Gedung ini menggunakan sistem pendingin Variable Refrigerant Flow (VRF) yang hemat energi dan ramah lingkungan. Gedung ini juga dilengkapi dengan kolam penampungan air hujan berkapasitas 1.300 meter kubik (m3) untuk menampung air hujan yang dapat didaur ulang dan dimanfaatkan untuk penyiraman tanaman di area PPI Cakung.',
        bg: utnb
    }
]

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-two',
            start: 'top 80%',
            end: '=+100',
            scrub: 1,
            //pin:true,
            markers: true
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
            <h1 class="title-one text-3xl lg:text-7xl font-bold text-brand-1">
                United Tractors
            </h1>
            <h2 class="title-two text-2xl lg:text-6xl"> Sustainability Initiatives Solar</h2>
        </div>
        <div class="feat">
            <ElTabs/>
        </div>
    </div>

</template>