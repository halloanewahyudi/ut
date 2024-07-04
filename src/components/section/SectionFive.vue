<script setup>
import IconBuy from "@/assets/img/buy-product.png"
import Iconmuseum from "@/assets/img/museum.png"
import Iconrecruitment from "@/assets/img/recruitment.png"
import Iconlocation from "@/assets/img/location.png"
</script>
<template>
    <div class="container text-center py-20">
        <h2 class="text-3xl lg:text-5xl font-bold mb-6"> Find Out </h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200 justify-center text-center bg-gray-100 rounded-lg p-6">
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
</template>