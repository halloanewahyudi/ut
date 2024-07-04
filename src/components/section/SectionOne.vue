<script setup>
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import gsap from 'gsap';
import { onMounted, ref } from 'vue';
import IconChevronLeftVue from '../icons/IconChevronLeft.vue';
import IconChevronRightVue from '../icons/IconChevronRight.vue';


const dataSlide = [
    {
        title: "Taking Step Toward Sustaibale Journey",
        subtitle: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "img/s1.jpg"
    },
    {
        title: "loremdanipsum",
        subtitle: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "img/s3.webp"
    }
]

onMounted(() => {
  const slide =  new Glide('.glide', {
        type: 'carousel',
        focusAt:'center',
        autoplay: 3000,
        animationDuration: 1500,
        gap: 0,
    })
slide.mount()

})
</script>
<template>
    <div class="glide relative">
        <div data-glide-el="track" class="glide__track">
            <ul class="glide__slides">
                <li class="pl-0 ml-0 glide__slide relative  mx-0 px-0 flex flex-col justify-center items-end pb-20 bg-cover bg-no-repeat text-white"
                    :style="{ backgroundImage: `url(${item.image})` }" v-for="item in dataSlide" :key="item">
                    <div class="layer absolute top-0 left-0 w-full h-full  opacity-30"></div>
                    <div class="slide-text max-w-[880px] mx-auto mt-auto p-6 lg:p-10 relative text-center flex flex-col gap-4 bg-member bg-opacity-40 rounded-lg backdrop-blur">
                        <h1 class="text-3xl lg:text-5xl font-bold"> {{ item.title }} </h1>
                        <h4 class="text-xl lg:text-2xl">{{ item.subtitle }}</h4>
                    </div>
                </li>
            </ul>
        </div>

        <div class="glide__arrows" data-glide-el="controls text-white">
            <button class="glide__arrow glide__arrow--left absolute top-1/2 left-5 w-10 h-10 " data-glide-dir="<"> <IconChevronLeftVue  class="text-3xl text-white"/>
                 </button>
            <button class="glide__arrow glide__arrow--right absolute top-1/2 right-5 w-10 h-10" data-glide-dir=">"> <IconChevronRightVue class="text-3xl text-white"/> </button>
        </div>
    </div>

</template>

<style scoped>
.glide__slide{
    width: 100%;
    min-height: 100vh;
}
.glide__slide .slide-text {
    @apply opacity-0 scale-110 -translate-x-72;
}

.glide__slide.glide__slide--active .slide-text {
    @apply opacity-100 scale-100 translate-x-0 delay-100 duration-700;
}
.layer{
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.773546918767507) 13%, rgba(241,240,240,0) 100%);
}
.glide__arrow{
@apply  hover:bg-brand-1 bg-opacity-30 duration-500 rounded-full flex justify-center items-center;
}
</style>