<template>
  <section>
    <div class="mt-12">
        <Title title="Experience"/>
    </div>
    <ul
      class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
    >
      <li v-for="item in experience">
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div :class="item.position">
          <time class="font-mono italic">{{ item.timeline }}</time>
          <div class="text-lg font-black">{{ item.name }}</div>
          {{ item.content }}
        </div>
        <hr />
      </li>
    </ul>
  </section>
</template>
<script setup>
import { ref } from "vue";
import Title from "./Title.vue";
const experience = ref([
  {
    id: 1,
    timeline: "2017-2019",
    name: "nama3",
    content:
      "lorem ipsum dolor sit amet, consectetur adip euismod er el  elementum et just aliquet in",
    position: "timeline-start md:text-end",
  },
  {
    id: 2,
    timeline: "2017-2019",
    name: "nama3",
    content:
      "lorem ipsum dolor sit amet, consectetur adip euismod er el  elementum et just aliquet in",
    position: "timeline-end md:text-first",
  },
  {
    id: 3,
    timeline: "2017-2019",
    name: "nama3",
    content:
      "lorem ipsum dolor sit amet, consectetur adip euismod er el  elementum et just aliquet in",
    position: "timeline-start md:text-end",
  },
  {
    id: 4,
    timeline: "2017-2019",
    name: "nama3",
    content:
      "lorem ipsum dolor sit amet, consectetur adip euismod er el  elementum et just aliquet in",
    position: "timeline-end md:text-first",
  },
]);
</script>
