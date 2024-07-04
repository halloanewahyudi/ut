<script setup>
import IconFacebook from '../icons/IconFacebook.vue';
import IconInstagram from '../icons/IconInstagram.vue';
import IconLinkedin from '../icons/IconLinkedin.vue';
import IconYoutube from '../icons/IconYoutube.vue';
</script>
<template>
    <div class="bg-dark-1 text-gray-300 pt-16">
        <div class="container">
            <div class="pb-16 flex flex-col lg:flex-row gap-6 lg:gap-10">
                <div class="flex flex-col gap-5 w-full lg:w-1/3">
                    <img src="@/assets/img/logo-footer.png" alt="" class="w-[300px] h-auto">
                    <p>
                        United Tractors has always put people and sustainability at the center of the solution to the
                        customers. Because we understand that the solution in our industry depends on innovation that
                        combine One Commitment, One Spirit, One Synergy, and of course Sustainability
                    </p>

                </div>
                <div class="flex flex-col gap-5 w-full lg:w-1/3">
                    <h4 class="text-2xl font-bold text-brand-1"> PT United Tractors Tbk</h4>
                    <p>Jl. Raya Bekasi Km 22,
                        Cakung, Jakarta Timur
                        Indonesia, 13910
                        Phone +62 21 2457 9999</p>

                </div>
                <div class="flex flex-col gap-5 lg:w-1/3  justify-end lg:items-end ">
                    <div class="flex items-center gap-4 text-2xl lg:justify-end w-full">
                        <a href="#" class="hover:text-brand-1 duration-300">
                            <IconYoutube class="text-3xl"/>
                        </a>
                        <a href="#" class="hover:text-brand-1 duration-300">
                            <IconFacebook />
                        </a>
                        <a href="#" class="hover:text-brand-1 duration-300">
                            <IconInstagram  class="text-3xl"/>
                        </a>
                        <a href="#" class="hover:text-brand-1 duration-300">
                            <IconLinkedin />
                        </a>
                    </div>
                </div>
            </div>

        </div>
        <div class="border-t border-[#414142] border-spacing-0.5 text-center py-3 text-sm text-gray-400">
            © 2024 United Tractors all right reserved.
            <br>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact</a>

        </div>
    </div>
</template>