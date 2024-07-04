<script setup>
import { ref } from 'vue'
import IconMenu from '../icons/IconMenu.vue';

const lang = ['EN', 'ID']
const selectedIndex = ref(0)
</script>
<template>
    <div class="navbar absolute top-0 left-0 z-50 text-white  py-3 w-full ">
        <div class="container">
            <nav class="flex justify-between items-center gap-2">
                <div class="logo">
                    <img src="@/assets/img/logo.png" alt="" srcset="" class="w-14">
                </div>
              <!--   <div class="flex gap-4 items-center justify-center">
                    <ul class="flex gap-3 items-center">
                        <li><a href="#"> About Us</a></li>
                        <li><a href="#"> Business</a></li>
                        <li><a href="#"> Investor Relations</a></li>
                        <li><a href="#"> Governance</a></li>
                        <li><a href="#"> Sustainability</a></li>
                        <li><a href="#"> Human Capital</a></li>
                        <li><a href="#"> Media Room</a></li>
                        <li><a href="#"> Contact </a></li>
                    </ul>
                    <div class="bg-brand-1 rounded-full flex items-center">
                        <button @click="selectedIndex = index" v-for="(item, index) in lang" :key="index"
                            class="w-10 h-10 rounded-full flex justify-center items-center p-2"
                            :class="['tab-button', { active: selectedIndex === index }]">
                            {{ item }}
                        </button>
                    </div>
                </div> -->

                <div class="flex gap-4 items-center">
                    <img src="@/assets/img/satu-indonesia.png" alt="" srcset="" class="w-24">
                   <!--  <div class="bg-brand-1 rounded-full flex items-center">
                        <button @click="selectedIndex = index" v-for="(item, index) in lang" :key="index"
                            class="w-10 h-10 rounded-full flex justify-center items-center p-2"
                            :class="['tab-button', { active: selectedIndex === index }]">
                            {{ item }}
                        </button>
                    </div> -->
                    <img src="@/assets/img/tombol-bahasa.png" alt="" srcset="" class="w-24">
                    <button class="text-3xl text-dark-1 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <IconMenu />
                    </button>
                </div>
            </nav>
        </div>
    </div>
</template>
<style scoped>
.tab-button.active {
    @apply bg-dark-1 text-brand-1;
}
</style>