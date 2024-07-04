<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/element/Navbar.vue';
import MobileNav from './components/element/MobileNav.vue';
import SectionFooter from './components/section/SectionFooter.vue';

</script>

<template>
  <header>
  <Navbar class="hidden lg:block" />
  <MobileNav class="lg:hidden" />
  </header>
  <RouterView />
  <SectionFooter/>
</template>
<style>
.navbar li a{
  @apply font-medium hover:text-member duration-100 ease-linear
}
</style>
