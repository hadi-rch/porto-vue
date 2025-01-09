<template>
  <section class="grid grid-cols-8 gap-5 mx-5 my-2 p-10">
    <article class="md:col-span-5 col-span-8">
      <h1 class="text-3xl font-semibold text-secondary">
        Hallo, Nama Saya
        <Name /> 
        <!-- ({{ bioStores.age }}) -->
      </h1>
      <h2 class="text-2xl font-semibold text-secondary mt-2">
        Dan Saya adalah seorang Software Engineer
      </h2>
      <div class="my-5 flex gap-10">
        <a href="https://linkedin.com/in/hadi-2087641a0" target="#">
          <v-icon name="fa-linkedin" fill="#2b7cea" scale="3"></v-icon>
        </a>
        <a href="https://gitlab.com/hadirch" target="#">
          <v-icon name="fa-gitlab" fill="#daba09" scale="3"></v-icon>
        </a>
        <a href="https://t.me/Adiy666" target="#">
          <v-icon name="fa-telegram-plane" fill="#0088CC" scale="3"></v-icon>
        </a>
      </div>
    </article>
    <article class="col-span-3 hidden md:block">
      <!--untuk gambar dibuat responsive. dibuat hidden(hilang) namun ketika medium menjadi block (muncul). ketika ukuran nya small dia akan hidden  -->
      <img :src="profile" alt="" class="rounded-[100px]" />
    </article>
  </section>
</template>
<script setup>
import profile from "@/assets/foto.png";
import Name from "./Name.vue";
// import { useBioStore } from "@/store/BioStore";

// const bioStores = useBioStore();
</script>
