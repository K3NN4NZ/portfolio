<script setup lang="ts">
import RevealOnScroll from '@/components/common/RevealOnScroll.vue';
import SectionHeader from '@/components/portfolio/SectionHeader.vue';
import SkillGroup from '@/components/portfolio/SkillGroup.vue';
import type { SkillGroup as SkillGroupType } from '@/types/portfolio';

defineProps<{
    skillGroups: SkillGroupType[];
}>();
</script>

<template>
    <section id="skills" class="px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div class="mx-auto max-w-7xl">
            <RevealOnScroll>
                <SectionHeader
                    eyebrow="Skills"
                    title="A focused toolkit for polished interfaces, practical systems, and production-ready delivery."
                    description="The strongest portfolios are selective. Instead of listing everything, present the tools and capabilities that support the type of work you want to be hired for."
                />
            </RevealOnScroll>

            <div class="mt-10 grid gap-6 xl:grid-cols-3">
                <RevealOnScroll
                    v-for="(group, index) in skillGroups"
                    :key="group.title"
                    :delay="index * 90"
                >
                    <SkillGroup :group="group" />
                </RevealOnScroll>
            </div>
        </div>
    </section>
</template>
