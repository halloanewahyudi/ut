<script setup>

import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'


import business1 from '@/assets/img/construction-machinery.jpg'
import business2 from '@/assets/img/mining-contracting.jpg'
import business3 from '@/assets/img/mining.jpg'
import business4 from '@/assets/img/construction-industry.jpg'
import business5 from '@/assets/img/energy.jpg'
import { onMounted } from 'vue'
import IconChevronLeft from '../icons/IconChevronLeft.vue';
import IconChevronRight from '../icons/IconChevronRight.vue';
const businessItem = [
    {
        title: 'Construction machinery',
        image: business1
    }, {
        title: 'Mining contracting',
        image: business2
    }, {
        title: 'Mining',
        image: business3
    },
    {
        title: 'Construction Industry',
        image: business4
    },
    {
        title: 'Energy',
        image: business5
    }
]

onMounted(() => {
    const slidebusiness = new Glide('.glideBusiness', {
        type: 'carousel',
        focusAt: 'center',
        perView: 3,
        autoplay: 3000,
        animationDuration: 1500,
        gap: 30,
        breakpoints: {
            1024: {
                perView: 3
            },
            600: {
                perView: 1
            }
        }
    })
    slidebusiness.mount()
})
</script>

<template>
    <div>
        <div class="glideBusiness relative">
            <div data-glide-el="track" class="glide__track">
                <ul class="glide__slides">
                    <li v-for="(item, index) in businessItem " :key="index" class=" glide__slide relative py-10">
                        <div class="slide-item rounded-lg border overflow-hidden">
                            <img :src="item.image" alt="">
                            <div class="text-center p-4 bg-brand-1">
                                <h4 class="font-semibold">{{ item.title }}</h4>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="glide__arrows" data-glide-el="controls">
                <button class="glide__arrow glide__arrow--left  top-1/2 left-5 w-10 h-10 " data-glide-dir="<">
                    <IconChevronLeft class="text-3xl" />
                </button>
                <button class="glide__arrow glide__arrow--right  top-1/2 right-5 w-10 h-10" data-glide-dir=">">
                    <IconChevronRight class="text-3xl" />
                </button>
            </div>
        </div>
    </div>
</template>


<style scoped>
.glide__slide {
    width: 100%;
}

.glide__slide.glide__slide--active .slide-item {
    @apply lg:scale-110 lg:shadow-lg border-brand-1 border-2 duration-500 ease-linear text-member;
}

.layer {
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6530987394957983) 0%, rgba(0, 0, 0, 0.12088585434173671) 50%, rgba(0, 0, 0, 0.5998774509803921) 100%);
}

.glide__arrow {
    @apply absolute z-30 bg-member bg-opacity-80 duration-500 rounded-full flex justify-center items-center;
}
</style>