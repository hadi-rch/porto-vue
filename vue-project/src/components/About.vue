<template>
  <section class="my-3">
    <Title title="About Me"/>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
      consectetur. Iusto in debitis vel explicabo sit qui unde? Beatae omnis
      distinctio dignissimos? Et vitae accusamus facilis impedit adipisci ex
      quisquam!
    </p>
    <article class="my-5">
      <div class="grid md:grid-cols-3 sm:grid-cols-1">
        <div class="card bg-base-100 shadow-2xl sm:my-3" v-for="item in skill">
          <div class="flex items-center justify-center">
            <v-icon :name="item.icon" scale="5"></v-icon>
          </div>
          <div class="card-body">
            <h2 class="card-title">{{ item.title }}</h2>
            <p>{{ item.listSkill }}</p>
          </div>
        </div>
      </div>
      <!-- <input type="number" v-model="bioStores.age" class="input border-black">
      <button class="btn btn-info ml-3" @click="bioStores.increment">+</button> -->
    </article>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import Title from './Title.vue';
// import { useBioStore } from '@/store/BioStore';

// const bioStores = useBioStore()

const skill = ref([
  {
    id: 1,
    icon: "fa-server",
    title: "Backend Developer",
    listSkill: "SQL, ExpressJS, RestAPI, Laravel",
  },
  {
    id: 1,
    icon: "fa-server",
    title: "Backend Developer",
    listSkill: "SQL, ExpressJS, RestAPI, Laravel",
  },
  {
    id: 2,
    icon: "fa-css3-alt",
    title: "Frontend Developer",
    listSkill: "HTML&CSS, ReactJS, VueJS",
  },
]);
</script>
