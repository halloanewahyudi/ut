<script setup>
import SlideBusiness from '../element/SlideBusiness.vue';
</script>
<template>
    <div class="bg-member text-white pt-16 pb-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-9 ">
            <div class="text-center p-6 lg:p-10">
                <h2 class="text-3xl lg:text-5xl font-bold"> Our business </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </div>
            <div class="lg:col-span-2 p-6 lg:p-0 overflow-x-hidden">
                <SlideBusiness class="lg:-right-2 relative" />
            </div>
        </div>
    </div>
  
</template>