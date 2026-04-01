<script setup lang="ts">
import RevealOnScroll from '@/components/common/RevealOnScroll.vue';
import SectionHeader from '@/components/portfolio/SectionHeader.vue';

defineProps<{
    heading: string;
    bio: string[];
    experienceSummary: string;
    education: string;
    photoUrl: string;
    highlights: string[];
}>();
</script>

<template>
    <section id="about" class="px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div class="mx-auto max-w-7xl">
            <RevealOnScroll>
                <SectionHeader
                    eyebrow="About Me"
                    :title="heading"
                    description="Use this section to tell a concise professional story: who you are, how you work, and what you bring to a team or client relationship."
                />
            </RevealOnScroll>

            <div class="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <RevealOnScroll class="portfolio-panel overflow-hidden rounded-[2rem] p-5 sm:p-6" :delay="80">
                    <div class="overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-slate-100 dark:border-white/10 dark:bg-white/5">
                        <img
                            :src="photoUrl"
                            alt="Professional placeholder portrait"
                            class="h-full w-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </RevealOnScroll>

                <RevealOnScroll class="space-y-5" :delay="140">
                    <article class="portfolio-panel rounded-[2rem] p-6 sm:p-7">
                        <h3 class="text-lg font-semibold text-slate-950 dark:text-white">Professional Snapshot</h3>
                        <div class="mt-4 space-y-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                            <p v-for="paragraph in bio" :key="paragraph">{{ paragraph }}</p>
                        </div>
                    </article>

                    <article class="portfolio-panel rounded-[2rem] p-6 sm:p-7">
                        <div class="grid gap-6 sm:grid-cols-2">
                            <div>
                                <p class="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Experience</p>
                                <p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                                    {{ experienceSummary }}
                                </p>
                            </div>
                            <div>
                                <p class="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Education</p>
                                <p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                                    {{ education }}
                                </p>
                            </div>
                        </div>
                    </article>

                    <article class="portfolio-panel rounded-[2rem] p-6 sm:p-7">
                        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Core Strengths</p>
                        <div class="mt-4 flex flex-wrap gap-3">
                            <span
                                v-for="highlight in highlights"
                                :key="highlight"
                                class="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                            >
                                {{ highlight }}
                            </span>
                        </div>
                    </article>
                </RevealOnScroll>
            </div>
        </div>
    </section>
</template>
