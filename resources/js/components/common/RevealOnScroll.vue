<script setup lang="ts">
import { useReveal } from '@/composables/useReveal';

withDefaults(
    defineProps<{
        as?: string;
        delay?: number;
    }>(),
    {
        as: 'div',
        delay: 0,
    },
);

const { target, isVisible } = useReveal();
</script>

<template>
    <component
        :is="as"
        ref="target"
        class="reveal-on-scroll"
        :class="{ 'is-visible': isVisible }"
        :style="{ transitionDelay: `${delay}ms` }"
    >
        <slot />
    </component>
</template>
