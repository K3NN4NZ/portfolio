<script setup lang="ts">
import type { Project } from '@/types/portfolio';

defineProps<{
    project: Project;
}>();
</script>

<template>
    <article
        class="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_65px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none"
    >
        <div class="overflow-hidden border-b border-slate-200/80 dark:border-white/10">
            <img
                :src="project.image"
                :alt="`${project.title} project preview`"
                class="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
            />
        </div>

        <div class="flex flex-1 flex-col p-6">
            <div class="flex items-center justify-between gap-4">
                <span class="rounded-full bg-accent/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">
                    {{ project.category }}
                </span>
                <span class="text-sm text-slate-500 dark:text-slate-400">Case Study</span>
            </div>

            <h3 class="mt-5 text-2xl font-semibold text-slate-950 dark:text-white">{{ project.title }}</h3>
            <p class="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ project.description }}</p>

            <div class="mt-5 flex flex-wrap gap-2">
                <span
                    v-for="item in project.stack"
                    :key="item"
                    class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/5 dark:text-slate-300"
                >
                    {{ item }}
                </span>
            </div>

            <div class="mt-6 flex items-center gap-3 pt-2">
                <a
                    :href="project.liveUrl"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:text-slate-200 dark:hover:border-white/20 dark:hover:text-white"
                    :aria-label="`Open live demo for ${project.title}`"
                >
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-4 w-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M9 7h8v8" />
                    </svg>
                </a>
                <a
                    :href="project.githubUrl"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:text-slate-200 dark:hover:border-white/20 dark:hover:text-white"
                    :aria-label="`Open GitHub repository for ${project.title}`"
                >
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                        <path d="M12 2a10 10 0 0 0-3.162 19.488c.5.094.682-.213.682-.476l-.013-1.846c-2.776.6-3.362-1.34-3.362-1.34-.455-1.154-1.109-1.462-1.109-1.462-.908-.62.067-.608.067-.608 1.004.07 1.533 1.029 1.533 1.029.89 1.523 2.335 1.083 2.902.828.09-.645.35-1.083.636-1.333-2.217-.252-4.549-1.109-4.549-4.938 0-1.09.39-1.982 1.029-2.681-.104-.253-.446-1.27.098-2.649 0 0 .84-.268 2.75 1.024A9.58 9.58 0 0 1 12 6.844a9.6 9.6 0 0 1 2.505.337c1.91-1.292 2.749-1.024 2.749-1.024.546 1.379.203 2.396.1 2.649.64.699 1.028 1.591 1.028 2.681 0 3.838-2.336 4.683-4.56 4.93.359.309.68.92.68 1.855l-.011 2.75c0 .266.18.575.688.477A10.001 10.001 0 0 0 12 2Z" />
                    </svg>
                </a>
            </div>
        </div>
    </article>
</template>
