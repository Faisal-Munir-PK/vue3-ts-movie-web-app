<template>
  <top-nav-bar class="w-full fixed z-50 top-0" />
  <router-view />
</template>
<script setup lang="ts">
import { TopNavBar } from './components/navbar';
</script>