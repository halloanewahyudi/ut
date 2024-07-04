<script setup>
const latestNews = [
    {
        title: 'Protecting Biodiversity, United Tractors, and EKSAI collaborate in Bird Banding and Biodiversity Index Calculation Activities',
        date: 'June 21, 2024 '
    },
    {
        title: 'Expanding the Market for AHEMCE Fostered MSMEs, United Tractors and Kopkar Kanitra Collaborate through Kanitrapreneur',
        date: 'June 20, 2024'

    }, {
        title: 'Expanding the Market for AHEMCE Fostered MSMEs, United Tractors and Kopkar Kanitra Collaborate through Kanitrapreneur',
        date: 'June 20, 2024'
    },
    {
        title: 'The East Kalimantan Provincial Government Grants United Tractors Group with the PROPER Green and Blue for Strong Environmental Management and Community Development',
        date: 'June 18, 2024'
    }, {
        title: 'Supporting the Indonesian Delegation at the WorldSkills Competition 2024, United Tractors Collaborate with the National Achievement Center',
        date: 'June 18, 2024'
    }, {
        title: 'Celebrating Eid al-Adha, United Tractors Distributes 65 Goats and 6 Cows to the Surrounding Communities',
        date: 'June 17, 2024'
    }
]
</script>
<template>
    <div class="pt-16">
        <div class="container">
            <div class="flex flex-col gap-5">
                <div class="mb-4">
                    <h4 class="text-3xl text-member front-medium inline-block border-b-2 border-brand-1">Latest News</h4>
                    <div class="w-full border-b"></div>
                </div>
             
                <div class="divide-y">
                    <div v-for="item in latestNews" :key="item">
                        <div
                            class="flex flex-wrap lg:flex-nowrap gap-3 p-2 hover:bg-brand-1 hover:pl-3 hover:bg-opacity-20 duration-700 rounded-lg cursor-pointer">
                            <span class="font-medium flex-shrink-0">
                                {{ item.date }}
                            </span>
                            <span>
                                {{ item.title }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>