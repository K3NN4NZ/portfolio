<script setup lang="ts">
import { computed } from 'vue';
import type { SkillIcon } from '@/types/portfolio';

const props = defineProps<{
    icon: SkillIcon;
}>();

const badgeStyles: Record<SkillIcon, { label: string; tone: string }> = {
    vue: { label: 'V3', tone: 'from-emerald-400/25 to-teal-500/20 text-emerald-700 dark:text-emerald-300' },
    typescript: { label: 'TS', tone: 'from-sky-400/25 to-blue-500/20 text-sky-700 dark:text-sky-300' },
    tailwind: { label: 'TW', tone: 'from-cyan-400/25 to-sky-500/20 text-cyan-700 dark:text-cyan-300' },
    laravel: { label: 'LV', tone: 'from-orange-400/25 to-rose-500/20 text-orange-700 dark:text-orange-300' },
    node: { label: 'ND', tone: 'from-lime-400/25 to-green-500/20 text-lime-700 dark:text-lime-300' },
    api: { label: 'API', tone: 'from-violet-400/25 to-fuchsia-500/20 text-violet-700 dark:text-violet-300' },
    figma: { label: 'FG', tone: 'from-pink-400/25 to-rose-500/20 text-pink-700 dark:text-pink-300' },
    database: { label: 'DB', tone: 'from-slate-300/80 to-slate-400/60 text-slate-700 dark:text-slate-200' },
    docker: { label: 'DK', tone: 'from-blue-400/25 to-indigo-500/20 text-blue-700 dark:text-blue-300' },
    git: { label: 'GT', tone: 'from-amber-300/40 to-orange-400/30 text-amber-700 dark:text-amber-300' },
    testing: { label: 'QA', tone: 'from-fuchsia-300/35 to-violet-400/25 text-fuchsia-700 dark:text-fuchsia-300' },
    analytics: { label: 'AN', tone: 'from-teal-300/35 to-cyan-400/25 text-teal-700 dark:text-teal-300' },
};

const badge = computed(() => badgeStyles[props.icon]);
</script>

<template>
    <div
        class="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/60 bg-gradient-to-br text-[0.72rem] font-bold uppercase tracking-[0.18em] shadow-sm dark:border-white/10"
        :class="badge.tone"
        aria-hidden="true"
    >
        {{ badge.label }}
    </div>
</template>
