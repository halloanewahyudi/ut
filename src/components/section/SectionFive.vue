<script setup>
import IconBuy from "@/assets/img/buy-product.png"
import Iconmuseum from "@/assets/img/museum.png"
import Iconrecruitment from "@/assets/img/recruitment.png"
import Iconlocation from "@/assets/img/location.png"
import bg from "@/assets/img/backgroundyellow.jpg"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { onMounted } from "vue"

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    const icon = gsap.utils.toArray('.icons img')
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


    icon.forEach(element => {
        tl.fromTo(element, {
            opacity: 0,
            scale:0.1,
            y:100,
        }, {
            duration: 1,
            opacity: 1,
            scale: 1,
            y:0,
            scrollTrigger: {
            trigger: '.section-five',
            start: 'top 80%',
            end: '=+100',
            scrub: 1,
            //pin:true,
            //  markers: true
        }
        })
    });
})
</script>
<template>
    <div class="section-five py-16 w-full" :style="{ background: `url('${bg}')` }">
        <div class="container text-center py-20">
            <h2 class="text-3xl lg:text-5xl font-bold mb-6"> Find Out </h2>
            <div
                class="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200 justify-center text-center bg-gray-100 rounded-lg p-6 icons">
                <div class="p-4  text-center">
                    <img :src="IconBuy" alt="" class="mx-auto">
                    <span class="text-xl font-medium">Buy Product</span>
                </div>
                <div class="p-4 text-center">
                    <img :src="Iconmuseum" alt="" class="mx-auto">
                    <span class="text-xl font-medium">Museum UT</span>
                </div>
                <div class="p-4  text-center">
                    <img :src="Iconrecruitment" alt="" class="mx-auto">
                    <span class="text-xl font-medium">Recruitmet</span>
                </div>
                <div class="p-4  text-center">
                    <img :src="Iconlocation" alt="" class="mx-auto">
                    <span class="text-xl font-medium">Find Out Branch</span>
                </div>
            </div>
        </div>
    </div>

</template>