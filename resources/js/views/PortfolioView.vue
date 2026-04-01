<script setup lang="ts">
import AppNavbar from '@/components/portfolio/AppNavbar.vue';
import AboutSection from '@/components/portfolio/AboutSection.vue';
import ContactSection from '@/components/portfolio/ContactSection.vue';
import ExperienceSection from '@/components/portfolio/ExperienceSection.vue';
import HeroSection from '@/components/portfolio/HeroSection.vue';
import ProjectsSection from '@/components/portfolio/ProjectsSection.vue';
import SkillsSection from '@/components/portfolio/SkillsSection.vue';
import {
    about,
    contact,
    experience,
    hero,
    heroMetrics,
    navigationItems,
    projectCategories,
    projects,
    siteMeta,
    skillGroups,
    socialLinks,
} from '@/data/portfolio';
</script>

<template>
    <div class="min-h-screen bg-surface text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
        <a
            href="#content"
            class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-slate-950 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white dark:focus:bg-white dark:focus:text-slate-950"
        >
            Skip to content
        </a>

        <div class="page-gradient pointer-events-none fixed inset-0 -z-10" />

        <AppNavbar
            name="Kenn Cedric Jala"
            role="Full Stack Developer"
            initials="KCJ"
            :nav-items="navigationItems"
        />

        <main id="content">
            <HeroSection
                v-bind="hero"
                :metrics="heroMetrics"
                :social-links="socialLinks"
            />
            <AboutSection v-bind="about" />
            <ProjectsSection :categories="projectCategories" :projects="projects" />
            <SkillsSection :skill-groups="skillGroups" />
            <ExperienceSection :items="experience" />
            <ContactSection :contact="contact" :social-links="socialLinks" />
        </main>

        <footer class="border-t border-slate-200/70 px-5 py-6 sm:px-6 lg:px-8 dark:border-white/10">
            <div class="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:text-slate-400">
                <p>{{ siteMeta.title }}</p>
                <p>Built with Vue 3, Vite, TypeScript, Tailwind CSS, and Vue Router.</p>
            </div>
        </footer>
    </div>
</template>
