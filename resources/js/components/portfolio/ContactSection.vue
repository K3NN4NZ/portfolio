<script setup lang="ts">
import { reactive, ref } from 'vue';
import RevealOnScroll from '@/components/common/RevealOnScroll.vue';
import SectionHeader from '@/components/portfolio/SectionHeader.vue';
import type { ContactInfo, SocialLink } from '@/types/portfolio';

const props = defineProps<{
    contact: ContactInfo;
    socialLinks: SocialLink[];
}>();

const form = reactive({
    name: '',
    email: '',
    message: '',
});

const isSubmitting = ref(false);
const statusMessage = ref('');

const submitForm = async () => {
    if (props.contact.formEndpoint.includes('your-form-id')) {
        statusMessage.value =
            'Replace the Formspree endpoint in resources/js/data/portfolio.ts to make this form send real messages.';
        return;
    }

    isSubmitting.value = true;
    statusMessage.value = '';

    try {
        const response = await fetch(props.contact.formEndpoint, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });

        if (!response.ok) {
            throw new Error('Unable to send the message.');
        }

        form.name = '';
        form.email = '';
        form.message = '';
        statusMessage.value = 'Message sent successfully.';
    } catch {
        statusMessage.value = 'Message failed to send. Verify the form endpoint and try again.';
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<template>
    <section id="contact" class="px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div class="mx-auto max-w-7xl">
            <RevealOnScroll>
                <SectionHeader
                    eyebrow="Contact"
                    title="Give people one clear path to reach you."
                    description="A short contact section converts better than a crowded one. Keep the form simple, list the right links, and make your availability explicit."
                />
            </RevealOnScroll>

            <div class="mt-10 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
                <RevealOnScroll class="space-y-5" :delay="60">
                    <article class="portfolio-panel rounded-[2rem] p-6 sm:p-7">
                        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Direct Contact</p>
                        <div class="mt-5 space-y-5">
                            <div>
                                <p class="text-sm text-slate-500 dark:text-slate-400">Email</p>
                                <a :href="`mailto:${contact.email}`" class="mt-1 block text-lg font-semibold text-slate-950 dark:text-white">
                                    {{ contact.email }}
                                </a>
                            </div>
                            <div>
                                <p class="text-sm text-slate-500 dark:text-slate-400">Location</p>
                                <p class="mt-1 text-base text-slate-700 dark:text-slate-200">{{ contact.location }}</p>
                            </div>
                            <div>
                                <p class="text-sm text-slate-500 dark:text-slate-400">Availability</p>
                                <p class="mt-1 text-base text-slate-700 dark:text-slate-200">{{ contact.availability }}</p>
                            </div>
                        </div>
                    </article>

                    <article class="portfolio-panel rounded-[2rem] p-6 sm:p-7">
                        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Social Links</p>
                        <div class="mt-5 flex flex-wrap gap-3">
                            <a
                                v-for="link in socialLinks"
                                :key="`contact-${link.label}`"
                                :href="link.href"
                                target="_blank"
                                rel="noreferrer"
                                class="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
                            >
                                {{ link.label }}
                            </a>
                        </div>
                    </article>
                </RevealOnScroll>

                <RevealOnScroll :delay="120">
                    <article class="portfolio-panel rounded-[2rem] p-6 sm:p-7">
                        <form class="grid gap-5" @submit.prevent="submitForm">
                            <div class="grid gap-5 sm:grid-cols-2">
                                <label class="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                                    Name
                                    <input
                                        v-model="form.name"
                                        type="text"
                                        name="name"
                                        autocomplete="name"
                                        required
                                        class="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition-colors focus:border-accent dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
                                    />
                                </label>

                                <label class="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                                    Email
                                    <input
                                        v-model="form.email"
                                        type="email"
                                        name="email"
                                        autocomplete="email"
                                        required
                                        class="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition-colors focus:border-accent dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
                                    />
                                </label>
                            </div>

                            <label class="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                                Message
                                <textarea
                                    v-model="form.message"
                                    name="message"
                                    rows="6"
                                    required
                                    class="rounded-[1.5rem] border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition-colors focus:border-accent dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
                                />
                            </label>

                            <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <button
                                    type="submit"
                                    class="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                                    :disabled="isSubmitting"
                                >
                                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                                </button>

                                <p class="text-sm text-slate-500 dark:text-slate-400">
                                    Replace the placeholder Formspree URL to activate the form.
                                </p>
                            </div>

                            <p aria-live="polite" class="text-sm font-medium text-accent">
                                {{ statusMessage }}
                            </p>
                        </form>
                    </article>
                </RevealOnScroll>
            </div>
        </div>
    </section>
</template>
