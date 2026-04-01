<script setup lang="ts">
import TechBadge from '@/components/portfolio/TechBadge.vue';
import type { SkillGroup } from '@/types/portfolio';

defineProps<{
    group: SkillGroup;
}>();
</script>

<template>
    <article class="portfolio-panel h-full rounded-[2rem] p-6 sm:p-7">
        <div class="flex items-start justify-between gap-4">
            <div>
                <h3 class="text-xl font-semibold text-slate-950 dark:text-white">{{ group.title }}</h3>
                <p class="mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {{ group.description }}
                </p>
            </div>
            <div class="h-3 w-3 rounded-full bg-accent shadow-[0_0_0_6px_rgba(179,106,71,0.15)]" />
        </div>

        <div class="mt-8 grid gap-4">
            <article
                v-for="skill in group.skills"
                :key="skill.name"
                class="rounded-[1.5rem] border border-slate-200/80 bg-white/70 p-4 transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.03]"
            >
                <div class="flex items-start gap-4">
                    <TechBadge :icon="skill.icon" />
                    <div class="min-w-0">
                        <div class="flex flex-wrap items-center gap-3">
                            <h4 class="text-base font-semibold text-slate-950 dark:text-white">{{ skill.name }}</h4>
                            <span class="rounded-full bg-slate-100 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:bg-white/5 dark:text-slate-300">
                                {{ skill.level }}
                            </span>
                        </div>
                        <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{{ skill.note }}</p>
                    </div>
                </div>
            </article>
        </div>
    </article>
</template>
