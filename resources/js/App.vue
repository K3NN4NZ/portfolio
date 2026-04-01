<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useColorMode } from '@/composables/useColorMode';

useColorMode();
</script>

<template>
    <RouterView />
</template>
