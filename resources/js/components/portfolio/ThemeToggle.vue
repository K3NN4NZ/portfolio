<script setup lang="ts">
import { useColorMode } from '@/composables/useColorMode';

const { isDark, toggleTheme } = useColorMode();
</script>

<template>
    <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/85 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/20 dark:hover:text-white"
        :aria-pressed="isDark"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="toggleTheme"
    >
        <svg
            v-if="isDark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            class="h-5 w-5"
        >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25M12 18.75V21M4.875 4.875l1.5 1.5M17.625 17.625l1.5 1.5M3 12h2.25M18.75 12H21M4.875 19.125l1.5-1.5M17.625 6.375l1.5-1.5M15.75 12A3.75 3.75 0 1 1 8.25 12a3.75 3.75 0 0 1 7.5 0Z" />
        </svg>

        <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            class="h-5 w-5"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12.8A9 9 0 1 1 11.2 3a7.2 7.2 0 0 0 9.8 9.8Z"
            />
        </svg>
    </button>
</template>
