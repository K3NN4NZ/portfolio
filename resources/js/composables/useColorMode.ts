import { computed, watch } from 'vue';
import { usePreferredDark, useStorage } from '@vueuse/core';
import type { ThemePreference } from '@/types/portfolio';

const preferredDark = usePreferredDark();
const theme = useStorage<ThemePreference>('portfolio-theme', preferredDark.value ? 'dark' : 'light');
const isDark = computed(() => theme.value === 'dark');

let initialized = false;

export function useColorMode() {
    if (!initialized && typeof document !== 'undefined') {
        watch(
            isDark,
            (value) => {
                document.documentElement.classList.toggle('dark', value);
            },
            {
                immediate: true,
            },
        );

        initialized = true;
    }

    const toggleTheme = () => {
        theme.value = isDark.value ? 'light' : 'dark';
    };

    return {
        theme,
        isDark,
        toggleTheme,
    };
}
