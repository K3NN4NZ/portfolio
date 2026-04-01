import { onBeforeUnmount, onMounted, ref } from 'vue';

export function useReveal() {
    const target = ref<HTMLElement | null>(null);
    const isVisible = ref(false);
    let observer: IntersectionObserver | null = null;

    onMounted(() => {
        if (!target.value || typeof IntersectionObserver === 'undefined') {
            isVisible.value = true;
            return;
        }

        observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;

                if (entry?.isIntersecting) {
                    isVisible.value = true;
                    observer?.disconnect();
                }
            },
            {
                threshold: 0.16,
                rootMargin: '0px 0px -48px 0px',
            },
        );

        observer.observe(target.value);
    });

    onBeforeUnmount(() => {
        observer?.disconnect();
    });

    return {
        target,
        isVisible,
    };
}
