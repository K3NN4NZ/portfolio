<script setup lang="ts">
import RevealOnScroll from '@/components/common/RevealOnScroll.vue';
import SectionHeader from '@/components/portfolio/SectionHeader.vue';
import type { ExperienceItem } from '@/types/portfolio';

defineProps<{
    items: ExperienceItem[];
}>();
</script>

<template>
    <section class="px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div class="mx-auto max-w-7xl">
            <RevealOnScroll>
                <SectionHeader
                    eyebrow="Experience"
                    title="A clean timeline that shows progression, credibility, and the shape of your work."
                    description="This section is optional, but it helps establish consistency and context for the projects above."
                />
            </RevealOnScroll>

            <div class="mt-10">
                <div class="relative ml-3 border-l border-slate-200 pl-8 dark:border-white/10">
                    <RevealOnScroll
                        v-for="(item, index) in items"
                        :key="`${item.period}-${item.role}`"
                        class="relative pb-8 last:pb-0"
                        :delay="index * 90"
                    >
                        <span class="absolute -left-[2.55rem] top-2 h-4 w-4 rounded-full border-4 border-white bg-accent shadow-sm dark:border-slate-950" />

                        <article class="portfolio-panel rounded-[1.75rem] p-6 sm:p-7">
                            <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <p class="text-lg font-semibold text-slate-950 dark:text-white">{{ item.role }}</p>
                                    <p class="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{{ item.company }}</p>
                                </div>
                                <span class="rounded-full bg-accent/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent">
                                    {{ item.period }}
                                </span>
                            </div>
                            <p class="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ item.summary }}</p>
                        </article>
                    </RevealOnScroll>
                </div>
            </div>
        </div>
    </section>
</template>
