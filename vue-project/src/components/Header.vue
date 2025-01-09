<template>
  <header>
    <div class="navbar bg-primary">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li v-for="navlg in linkNav">
              <RouterLink :to="{ name: navlg.urlName }">{{
                navlg.name
              }}</RouterLink>
            </li>
          </ul>
        </div>
        <RouterLink to="/" class="btn btn-ghost text-xl">Logo</RouterLink>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li v-for="navlg in linkNav">
            <RouterLink :to="{ name: navlg.urlName }">{{
              navlg.name
            }}</RouterLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <select v-model="themeStore.theme" @change="changeTheme" class="select select-bordered">
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="corporate">corporate</option>
        </select>
      </div>
    </div>
  </header>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { useThemeStore } from "@/store/ThemeStore";

//storage
const themeStore = useThemeStore()

const changeTheme = () => {
  themeStore.setTheme(themeStore.theme)   
}

const linkNav = [
  { id: 1, name: "About", urlName: "About" },
  { id: 2, name: "Portofolio", urlName: "Portofolio" },
  { id: 3, name: "Experience", urlName: "Experience" },
];
</script>
