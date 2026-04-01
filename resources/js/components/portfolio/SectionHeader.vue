<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
    defineProps<{
        eyebrow: string;
        title: string;
        description?: string;
        align?: 'left' | 'center';
    }>(),
    {
        description: '',
        align: 'left',
    },
);

const alignmentClass = computed(() => (props.align === 'center' ? 'mx-auto text-center' : ''));
</script>

<template>
    <div class="max-w-3xl" :class="alignmentClass">
        <p class="section-eyebrow">{{ eyebrow }}</p>
        <h2 class="mt-5 font-display text-3xl leading-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
            {{ title }}
        </h2>
        <p v-if="description" class="mt-4 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
            {{ description }}
        </p>
    </div>
</template>
