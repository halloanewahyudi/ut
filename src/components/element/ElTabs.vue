<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import solerpanel from '@/assets/img/solarpanel.jpg'
import utnb from '@/assets/img/utnb.jpg'
import Featured from './Featured.vue';



const dataFeature = [
  {
    id: 1,
    title: 'Solar Photovoltaics',
    summary: 'United Tractors saat ini sudah memasang Solar PV berkapasitas 200 kWp',
    description: 'United Tractors saat ini sudah memasang Solar PV berkapasitas 200 kWp dengan tipe on-grid. Berdasarkan data Januari hingga Juni 2022, Solar PV yang terpasang mampu mengurangi konsumsi listrik sebesar 63.748 kWh atau sebesar Rp 66.042.928 per tahun.',
    bg: solerpanel
  },
  {
    id: 2,
    title: 'Green Building',
    summary: 'Dibangun di atas lahan seluas 2,5 hektare (Ha) dengan luas bangunan 5,8 hektare (Ha) ',
    description: 'Dibangun di atas lahan seluas 2,5 hektare (Ha) dengan luas bangunan 5,8 hektare (Ha), desain Gedung United Tractors Head Office menyerupai ekskavator. Tidak hanya desainnya yang inovatif, sebagai bentuk kepedulian United Tractors terhadap lingkungan, kami membangun gedung ini dengan standar konsep green building. Gedung ini menggunakan sistem pendingin Variable Refrigerant Flow (VRF) yang hemat energi dan ramah lingkungan. Gedung ini juga dilengkapi dengan kolam penampungan air hujan berkapasitas 1.300 meter kubik (m3) untuk menampung air hujan yang dapat didaur ulang dan dimanfaatkan untuk penyiraman tanaman di area PPI Cakung.',
    bg: utnb
  },
  {
    id: 3,
    title: 'Mini Hydro Power Plant',
    summary: 'UT membangun dua Pembangkit Listrik Tenaga Mini-hidro (PLTM)',
    description: 'UT membangun dua Pembangkit Listrik Tenaga Mini-hidro (PLTM) yaitu PLTM Kalipelus berkapasitas 0,5MW di Jawa Tengah dan PLTM Besai Kemu di Lampung yang memiliki kapasitas sebesar 7MW. PLTM Besai Kemu saat ini dalam proses konstruksi dan diperkirakan akan beroperasi pada akhir tahun 2023.UT melakukan strategi transisi melalui bisnis Energi Baru dan Terbarukan (EBT) dengan investasi pada PT Arkora Hydro Tbk (Arkora) dengan kepemilikan saham sebesar 31,49%. Arkora mengoperasikan dua PLTM, yaitu PLTM Cikopo 2 dengan kapasitas 7,4 MW dan PLTM Tomasa dengan kapasitas 10 MW.',
    bg: utnb
  },
  {
    id: 4,
    title: 'Biodiesel(B20 & B30)',
    summary: 'Pemerintah RI melalui Peraturan Menteri ESDM No.41/2018, tanggal 24 Agustus, mewajibkan semua badan usaha Bahan Bakar Minyak (BBM)',
    description: 'Pemerintah RI melalui Peraturan Menteri ESDM No.41/2018, tanggal 24 Agustus, mewajibkan semua badan usaha Bahan Bakar Minyak (BBM), seperti Pertamina, untuk melakukan pencampuran bahan bakar nabati jenis biodiesel dengan BBM jenis minyak solar. Tujuan program biodiesel ini dimaksudkan untuk meningkatkan pemanfaatan energi baru dan terbarukan, serta mengurangi dampak emisi karbon dari penggunaan BBM. PAMA, sebagai pemegang Izin Usaha Jasa Pertambangan (IUJP), mendukung dan mengikuti semua ketentuan pemerintah terkait dengan pelaksanaan program biodiesel sejak tahun 2018. Bahan bakar yang digunakan PAMA dalam pelaksanaan kegiatan operasional sebagian besar dibeli dan dipasok oleh Pertamina.',
    bg: utnb
  },
  {
    id: 5,
    title: 'SOBAT',
    summary: 'Program SOBAT merupakan kontribusi nyata United Tractors melalui program CSR bidang Pendidikan untuk membangun masa depan bangsa yang berkelanjutan.',
    description: `Program SOBAT merupakan kontribusi nyata United Tractors melalui program CSR bidang Pendidikan untuk membangun masa depan bangsa yang berkelanjutan. Program ini dilakukan melalui pembinaan dan pendampingan di berbagai jenjang pendidikan sekolah di Indonesia. Program ini tentunya juga sesuai dengan Sustainable Development Goals (SDG’s) poin keempat mengenai pendidikan yang berkualitas secara inklusif dan merata.Dengan end in mind meningkatkan kapasitas sekolah yang mampu bersaing, tangguh, dan memberikan dampak positif bagi daerah sekitarnya, SOBAT memiliki beberapa indikator:
Menciptakan lulusan/SDM berkualitas yang mampu bekerja dengan ahli sesuai bidangnya.
Membangun reputasi sekolah yang baik dan menjadi sekolah unggulan di wilayahnya.
Menciptakan prestasi di bidang ilmu pengetahuan, baik teknis maupun non-teknis. 
Sampai dengan saat ini, SOBAT telah membina sebanyak 1.614 sekolah dan 4.728 guru di seluruh Indonesia dengan total nilai bantuan yang telah diberikan untuk sekolah-sekolah dalam 3 tahun terakhir senilai Rp10.000.000.000..`,
    bg: utnb
  }
]

const selectedTab = ref(0)

function changeTab(index) {
  selectedTab.value = index
}

</script>
<template>
  <div class="w-full  px-2 pb-16 sm:px-0">
    <TabGroup  v-slot="{ selectedIndex }"  :selectedIndex="selectedTab" @change="changeTab">
      <TabList class="flex flex-wrap space-x-1 justify-around gap-3 border-b mb-4">
        <Tab v-for="category in dataFeature" as="template" :key="category" v-slot="{ selected }">
          <button :class="['p-2',
            selected
              ? ' text-member border-b-2 border-brand-1 ring-transparent'
              : ' hover:text-member',
          ]">
            {{ category.title }}
          </button>
        </Tab>
      </TabList>
      <TabPanels class="mt-2 transition-all ease-linear duration-300" >
        <TabPanel v-for="(post, index) in dataFeature" :key="index" :class="{
              'active-tab-panel': selectedIndex === index
            }" class="tab-panel">
          <Featured :title="post.title" :summary="post.summary" :description="post.description" :bg="post.bg" />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>
