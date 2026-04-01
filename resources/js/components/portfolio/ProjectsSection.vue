<script setup lang="ts">
import { computed, ref } from 'vue';
import RevealOnScroll from '@/components/common/RevealOnScroll.vue';
import ProjectCard from '@/components/portfolio/ProjectCard.vue';
import SectionHeader from '@/components/portfolio/SectionHeader.vue';
import type { Project, ProjectCategory } from '@/types/portfolio';

const props = defineProps<{
    categories: ProjectCategory[];
    projects: Project[];
}>();

const activeCategory = ref<ProjectCategory>('All');

const visibleProjects = computed(() => {
    if (activeCategory.value === 'All') {
        return props.projects;
    }

    return props.projects.filter((project) => project.category === activeCategory.value);
});
</script>

<template>
    <section id="projects" class="px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div class="mx-auto max-w-7xl">
            <RevealOnScroll>
                <SectionHeader
                    eyebrow="Projects"
                    title="Selected work designed to show range, decision-making, and execution quality."
                    description="Each card includes a strong summary, visible tech stack, and clear links. Replace the placeholder projects with your best, most representative work."
                />
            </RevealOnScroll>

            <RevealOnScroll class="mt-8" :delay="70">
                <div class="flex flex-wrap gap-3">
                    <button
                        v-for="category in categories"
                        :key="category"
                        type="button"
                        class="rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300"
                        :class="
                            activeCategory === category
                                ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                                : 'border border-slate-200 bg-white/85 text-slate-600 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white'
                        "
                        @click="activeCategory = category"
                    >
                        {{ category }}
                    </button>
                </div>
            </RevealOnScroll>

            <div class="mt-10 grid gap-6 xl:grid-cols-2">
                <RevealOnScroll
                    v-for="(project, index) in visibleProjects"
                    :key="project.slug"
                    :delay="index * 80"
                >
                    <ProjectCard :project="project" />
                </RevealOnScroll>
            </div>
        </div>
    </section>
</template>
