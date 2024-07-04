<script setup>
import { ref } from "vue"
import IconCloseVue from "../icons/IconClose.vue"

const props = defineProps({
    title: String,
    bg: String,
    summary: String,
    description: String,
})
const buka = ref(false)
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center rounded-lg relative min-h-full overflow-hidden overflow-y-auto py-6 lg:p-0">
        <div class="feat-image lg:col-span-2 min-h-96 bg-cover bg-no-repeat"
            :style="{ backgroundImage: `url(${props.bg})` }">
        </div>
        <div class="p-6 lg:p-10 bg-brand-1 h-full flex flex-col justify-center gap-4 ">
            <h2 class="text-3xl font-bold">{{ props.title }}</h2>
            <p class="text-lg" v-html="props.summary"></p>
            <button @click="buka = true" class="py-2 px-5 rounded-full bg-member text-white max-w-max">
Explore
            </button>
        </div>
        <transition>
            <div v-if="buka"
                class="col-span-full w-full bg-brand-1 min-h-full absolute p-6 lg:p-10 flex flex-col gap-4 justify-center ">
<button @click="buka = false" class="absolute right-5 top-5 text-3xl"><IconCloseVue/> </button>
                <h2 class="text-3xl font-bold">{{ props.title }}</h2>
                <p class="text-lg" v-html="props.description"></p>
            </div>
        </transition>
    </div>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
    transform: translateX(0);
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    transform: translateX(100);
  opacity: 0;
}
</style>