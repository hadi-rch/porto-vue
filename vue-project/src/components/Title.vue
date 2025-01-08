<template>
    <h1 class="text-3xl font-bold text-primary underline mb-3">{{ title }}</h1>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>