<script setup lang="ts">
import { RouterLink } from 'vue-router';
import RevealOnScroll from '@/components/common/RevealOnScroll.vue';
import type { HeroMetric, SocialLink } from '@/types/portfolio';

defineProps<{
    greeting: string;
    titleAccent: string;
    tagline: string;
    intro: string;
    summary: string;
    availability: string;
    primaryCta: {
        label: string;
        hash: `#${string}`;
    };
    secondaryCta: {
        label: string;
        href: string;
    };
    metrics: HeroMetric[];
    socialLinks: SocialLink[];
}>();
</script>

<template>
    <section id="home" class="relative overflow-hidden px-5 pb-14 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pb-20">
        <div class="hero-orb hero-orb-primary" />
        <div class="hero-orb hero-orb-secondary" />

        <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <RevealOnScroll class="relative">
                <p class="section-eyebrow">{{ availability }}</p>
                <h1 class="mt-7 max-w-5xl font-display text-5xl leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
                    {{ greeting }}
                    <span class="mt-2 block text-accent">{{ titleAccent }}</span>
                </h1>
                <p class="mt-6 text-lg font-semibold text-slate-700 dark:text-slate-200">{{ tagline }}</p>
                <p class="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
                    {{ intro }}
                </p>
                <p class="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
                    {{ summary }}
                </p>

                <div class="mt-9 flex flex-col gap-4 sm:flex-row">
                    <RouterLink
                        :to="{ path: '/', hash: primaryCta.hash }"
                        class="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                    >
                        {{ primaryCta.label }}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-4 w-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </RouterLink>

                    <a
                        :href="secondaryCta.href"
                        download
                        class="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/20 dark:hover:text-white"
                    >
                        {{ secondaryCta.label }}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-4 w-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
                        </svg>
                    </a>
                </div>

                <div class="mt-10 flex flex-wrap gap-3">
                    <a
                        v-for="link in socialLinks"
                        :key="link.label"
                        :href="link.href"
                        target="_blank"
                        rel="noreferrer"
                        class="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
                    >
                        {{ link.label }}
                    </a>
                </div>
            </RevealOnScroll>

            <RevealOnScroll class="relative" :delay="120">
                <div class="portfolio-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
                    <div class="absolute -right-10 top-0 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
                    <div class="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-sky-300/20 blur-3xl dark:bg-cyan-300/10" />

                    <div class="relative">
                        <div class="flex items-center justify-between gap-4">
                            <div>
                                <p class="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Current Focus</p>
                                <h2 class="mt-3 font-display text-3xl text-slate-950 dark:text-white">Designing for clarity and shipping with intent.</h2>
                            </div>
                            <div class="rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                                2026
                            </div>
                        </div>

                        <div class="mt-8 space-y-4">
                            <div class="rounded-[1.5rem] border border-slate-200/80 bg-white/75 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                                <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Positioning</p>
                                <p class="mt-3 text-base leading-7 text-slate-700 dark:text-slate-200">
                                    Frontend developer with an editorial eye for UI systems, interaction details, and modern portfolio presentation.
                                </p>
                            </div>

                            <div class="rounded-[1.5rem] border border-slate-200/80 bg-white/75 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                                <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">What this site shows</p>
                                <p class="mt-3 text-base leading-7 text-slate-700 dark:text-slate-200">
                                    A simple one-page portfolio with reusable Vue components, dark mode, smooth section routing, and responsive presentation.
                                </p>
                            </div>
                        </div>

                        <div class="mt-8 grid gap-4 sm:grid-cols-3">
                            <article
                                v-for="metric in metrics"
                                :key="metric.label"
                                class="rounded-[1.5rem] border border-slate-200/80 bg-white/75 p-4 dark:border-white/10 dark:bg-white/[0.03]"
                            >
                                <p class="font-display text-3xl text-slate-950 dark:text-white">{{ metric.value }}</p>
                                <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{{ metric.label }}</p>
                            </article>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </div>
    </section>
</template>
