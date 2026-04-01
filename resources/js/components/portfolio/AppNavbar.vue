<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import ThemeToggle from '@/components/portfolio/ThemeToggle.vue';
import type { NavItem } from '@/types/portfolio';

const props = defineProps<{
    name: string;
    role: string;
    initials: string;
    navItems: NavItem[];
}>();

const route = useRoute();
const isMenuOpen = ref(false);

watch(
    () => route.hash,
    () => {
        isMenuOpen.value = false;
    },
);

const isActive = (hash: string) => {
    if (!route.hash && hash === '#home') {
        return true;
    }

    return route.hash === hash;
};
</script>

<template>
    <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
            <RouterLink
                to="/"
                class="flex items-center gap-3 rounded-full pr-3 transition-transform duration-300 hover:-translate-y-0.5"
                aria-label="Go to the home section"
            >
                <div
                    class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-bold tracking-[0.28em] text-slate-950 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white"
                >
                    {{ initials }}
                </div>
                <div class="hidden sm:block">
                    <p class="text-sm font-semibold text-slate-950 dark:text-white">{{ name }}</p>
                    <p class="text-sm text-slate-500 dark:text-slate-400">{{ role }}</p>
                </div>
            </RouterLink>

            <nav class="hidden items-center gap-1 lg:flex" aria-label="Primary">
                <RouterLink
                    v-for="item in props.navItems"
                    :key="item.hash"
                    :to="{ path: '/', hash: item.hash }"
                    class="rounded-full px-4 py-2 text-sm font-medium transition-colors"
                    :class="
                        isActive(item.hash)
                            ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                            : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
                    "
                >
                    {{ item.label }}
                </RouterLink>
            </nav>

            <div class="flex items-center gap-3">
                <ThemeToggle />

                <button
                    type="button"
                    class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white lg:hidden"
                    :aria-expanded="isMenuOpen"
                    aria-controls="mobile-menu"
                    aria-label="Toggle mobile navigation"
                    @click="isMenuOpen = !isMenuOpen"
                >
                    <svg
                        v-if="!isMenuOpen"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        class="h-5 w-5"
                    >
                        <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
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
                        <path stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
                    </svg>
                </button>
            </div>
        </div>

        <Transition
            enter-active-class="transition duration-250 ease-out"
            enter-from-class="-translate-y-4 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-4 opacity-0"
        >
            <div
                v-if="isMenuOpen"
                id="mobile-menu"
                class="border-t border-slate-200/70 bg-white/95 px-5 py-4 dark:border-white/10 dark:bg-slate-950/95 lg:hidden"
            >
                <nav class="flex flex-col gap-2" aria-label="Mobile">
                    <RouterLink
                        v-for="item in props.navItems"
                        :key="`mobile-${item.hash}`"
                        :to="{ path: '/', hash: item.hash }"
                        class="rounded-2xl px-4 py-3 text-sm font-medium transition-colors"
                        :class="
                            isActive(item.hash)
                                ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                                : 'bg-slate-100/80 text-slate-700 hover:text-slate-950 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white'
                        "
                    >
                        {{ item.label }}
                    </RouterLink>
                </nav>
            </div>
        </Transition>
    </header>
</template>
