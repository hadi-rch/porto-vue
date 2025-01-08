<template>
  <section>
    <div class="mt-10">
        <Title title="Portofolio" />
    </div>
    <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-2">
      <div class="card bg-base-200 shadow-2xl sm:my-3" v-for="item in porto">
        <figure>
          <img :src="item.img" :alt="item.name" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ item.name }}</h2>
          <p>{{ item.content }}</p>
          <div class="card-actions justify-end">
            <a :href="item.linkDeploy" target="#" class="btn btn-info"
              >Deploy</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import porto1 from "@/assets/porto1.jpg";
import porto2 from "@/assets/porto2.jpg";
import porto3 from "@/assets/porto3.jpg";
import Title from "./Title.vue";

const porto = ref([
  {
    id: 1,
    img: porto1,
    name: "nama1",
    content:
      "lorem ipsum dolor sit amet, consectetur adip euismod er el  elementum et just aliquet in",
    linkDeploy: "",
  },
  {
    id: 2,
    img: porto2,
    name: "nama2",
    content:
      "lorem ipsum dolor sit amet, consectetur adip euismod er el  elementum et just aliquet in",
    linkDeploy: "",
  },
  {
    id: 3,
    img: porto3,
    name: "nama3",
    content:
      "lorem ipsum dolor sit amet, consectetur adip euismod er el  elementum et just aliquet in",
    linkDeploy: "",
  },
]);
</script>
