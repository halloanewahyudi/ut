<script setup>
import { ref } from 'vue'
import IconMenu from '../icons/IconMenu.vue';
const lang = ['EN', 'ID']
const selectedIndex = ref(0)
</script>
<template>
    <div class="navbar bg-white py-2 px-6">
        <div class="">
            <nav class="flex justify-between items-center gap-2">
                <div class="logo">
                    <img src="@/assets/img/logo.png" alt="" srcset="" class="w-14">
                </div>
                <button class="btn-menu">
                    <IconMenu class="text-3xl" />
                </button>
                <div class="bg-brand-1 rounded-full flex items-center">
                    <button @click="selectedIndex = index" v-for="(item, index) in lang" :key="index"
                        class="w-10 h-10 rounded-full flex justify-center items-center p-2"
                        :class="['tab-button', { active: selectedIndex === index }]">
                        {{ item }}
                    </button>
                </div>
                <div>
                    <img src="@/assets/img/satu-indonesia.png" alt="" srcset="" class="w-24">
                </div>
            </nav>
            <div class="mobile-menu">
                <li><a href="#"> About Us</a></li>
                <li><a href="#"> Business</a></li>
                <li><a href="#"> Investor Relations</a></li>
                <li><a href="#"> Governance</a></li>
                <li><a href="#"> Sustainability</a></li>
                <li><a href="#"> Human Capital</a></li>
                <li><a href="#"> Media Room</a></li>
                <li><a href="#"> Contact </a></li>
            </div>
        </div>
    </div>
</template>
<style scoped>
.tab-button.active {
    @apply bg-dark-1 text-brand-1;
}
</style>