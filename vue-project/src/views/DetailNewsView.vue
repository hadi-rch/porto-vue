<template>
  <h1>{{ $route.params.id }}</h1>
  <button class="btn btn-primary btn-sm" @click="backToHome">Kembali</button>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const backToHome = () => {
  router.push("/");
};

console.log(route);
</script>
