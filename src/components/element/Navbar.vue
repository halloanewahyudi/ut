<script setup>
import { ref } from 'vue'

const lang = ['EN', 'ID']
const selectedIndex = ref(0)
</script>
<template>
    <div class="navbar bg-white py-2 w-full border-b">
        <div class="container">
            <nav class="flex justify-between items-center gap-2">
                <div class="logo">
                    <img src="@/assets/img/logo.png" alt="" srcset="" class="w-14">
                </div>
                <div class="flex gap-4 items-center">
                    <ul class="flex gap-3 items-center">
                        <li><a href="#"> Tentang UT</a></li>
                        <li><a href="#"> Bisnis</a></li>
                        <li><a href="#"> Hubungan Investor</a></li>
                        <li><a href="#"> Tata Kelola</a></li>
                        <li><a href="#"> Keberlanjutan</a></li>
                        <li><a href="#"> SDM</a></li>
                        <li><a href="#"> Ruang Media</a></li>
                        <li><a href="#"> Kontak</a></li>
                    </ul>
                    <div class="bg-brand-1 rounded-full flex items-center" >
                        <button @click="selectedIndex = index" v-for="(item, index) in lang" :key="index"
                            class="w-10 h-10 rounded-full flex justify-center items-center p-2" :class="['tab-button', { active: selectedIndex === index }]">
                            {{ item }}
                        </button>
                    </div>
                </div>

                <div>
                    <img src="@/assets/img/satu-indonesia.png" alt="" srcset="" class="w-24">
                </div>
            </nav>
        </div>
    </div>
</template>
<style scoped>
.tab-button.active{
    @apply bg-dark-1 text-brand-1;
}
</style>