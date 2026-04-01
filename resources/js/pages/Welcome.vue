<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

type Highlight = {
    title: string;
    description: string;
};

type Project = {
    category: string;
    name: string;
    summary: string;
    outcome: string;
    year: string;
    tags: string[];
};

type Experience = {
    period: string;
    role: string;
    company: string;
    summary: string;
};

// Replace these placeholders with your actual details, projects, and contact info.
const profile = {
    name: 'Kenn Cedric Jala',
    initials: 'KCJ',
    role: 'Product Designer & Frontend Developer',
    location: 'Based in Your City',
    email: 'hello@yourname.com',
    availability: 'Open for freelance work and full-time opportunities',
    intro: 'I design and build polished digital experiences that feel calm, clear, and credible.',
    summary:
        'My focus is simple: turn complex ideas into professional interfaces people can trust. I blend thoughtful product design, strong visual systems, and frontend execution so the final work feels intentional from first glance to final interaction.',
};

const highlights: Highlight[] = [
    {
        title: 'Clear direction',
        description: 'Design decisions stay tied to business goals, usability, and a consistent visual point of view.',
    },
    {
        title: 'Polished systems',
        description: 'I build reusable UI patterns that make a product feel cohesive as it grows.',
    },
    {
        title: 'Reliable delivery',
        description: 'From concept to launch, the work stays practical, collaborative, and implementation-ready.',
    },
];

const focusAreas: Highlight[] = [
    {
        title: 'Product UI',
        description: 'Interfaces that help users move quickly, understand context, and trust the product.',
    },
    {
        title: 'Brand presence',
        description: 'Landing pages and portfolio sites that feel refined without becoming overworked.',
    },
    {
        title: 'Frontend craft',
        description: 'Responsive builds with clean structure, careful spacing, and a strong attention to detail.',
    },
];

const projects: Project[] = [
    {
        category: 'SaaS Dashboard',
        name: 'Operations Platform Refresh',
        summary: 'Redesigned a complex admin workflow into a calmer dashboard with stronger hierarchy and clearer reporting.',
        outcome: 'The final interface reduced visual noise, improved scanability, and gave the product a more credible enterprise feel.',
        year: '2026',
        tags: ['UX Strategy', 'Dashboard UI', 'Design System'],
    },
    {
        category: 'Personal Brand',
        name: 'Executive Portfolio Site',
        summary: 'Created a professional personal website focused on authority, clarity, and a stronger first impression.',
        outcome: 'The redesign turned scattered information into a concise narrative that supports speaking, consulting, and outreach.',
        year: '2025',
        tags: ['Web Design', 'Content Structure', 'Frontend'],
    },
    {
        category: 'Commerce Experience',
        name: 'Product Catalog Redesign',
        summary: 'Reworked an online catalog to improve product discovery, reduce friction, and modernize the visual system.',
        outcome: 'The updated layout made the browsing experience feel lighter, more premium, and easier to navigate on mobile.',
        year: '2025',
        tags: ['E-commerce', 'Responsive UI', 'Visual Design'],
    },
];

const experience: Experience[] = [
    {
        period: '2024 to Present',
        role: 'Lead Product Designer',
        company: 'Independent Practice',
        summary: 'Partner with founders and teams to shape product direction, interface systems, and launch-ready marketing pages.',
    },
    {
        period: '2022 to 2024',
        role: 'Frontend Developer',
        company: 'Digital Product Studio',
        summary: 'Built responsive interfaces and reusable components for client products, landing pages, and internal tools.',
    },
    {
        period: '2020 to 2022',
        role: 'Visual Designer',
        company: 'Creative Agency',
        summary: 'Developed brand systems, campaign pages, and presentation assets with a focus on clarity and premium execution.',
    },
];

const principles: Highlight[] = [
    {
        title: 'Simple by design',
        description: 'Strong hierarchy, disciplined copy, and just enough detail to make the work feel premium.',
    },
    {
        title: 'Built for real use',
        description: 'Every layout is responsive, practical, and intended to survive actual content and collaboration.',
    },
    {
        title: 'Professional tone',
        description: 'The goal is not to impress with noise. It is to present you and your work with confidence.',
    },
];

const emailLink = `mailto:${profile.email}`;
</script>

<template>
    <Head :title="`${profile.name} | Portfolio`">
        <meta
            name="description"
            content="A simple professional portfolio template built with Laravel, Inertia, Vue, and Tailwind CSS."
        />
    </Head>

    <div class="portfolio-shell relative min-h-screen overflow-hidden bg-canvas text-ink">
        <div class="portfolio-grid absolute inset-0 -z-10" />
        <div class="portfolio-orb portfolio-orb-a" />
        <div class="portfolio-orb portfolio-orb-b" />
        <div class="portfolio-orb portfolio-orb-c" />

        <div class="relative z-10">
            <header id="top" class="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
                <div class="flex items-center gap-3">
                    <div
                        class="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/80 text-sm font-bold tracking-[0.28em] text-ink shadow-sm"
                    >
                        {{ profile.initials }}
                    </div>
                    <div>
                        <p class="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-brand">Portfolio</p>
                        <p class="text-sm font-medium text-muted">{{ profile.role }}</p>
                    </div>
                </div>

                <nav class="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
                    <a href="#about" class="transition-colors hover:text-ink">About</a>
                    <a href="#work" class="transition-colors hover:text-ink">Work</a>
                    <a href="#experience" class="transition-colors hover:text-ink">Experience</a>
                    <a href="#contact" class="transition-colors hover:text-ink">Contact</a>
                </nav>

                <a
                    :href="emailLink"
                    class="inline-flex items-center rounded-full border border-ink bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                    Email Me
                </a>
            </header>

            <main class="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-16 lg:px-8">
                <section class="grid gap-8 pb-6 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12 lg:pt-14">
                    <div class="fade-enter">
                        <p class="label-kicker">{{ profile.availability }}</p>
                        <h1 class="mt-6 max-w-4xl font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                            {{ profile.intro }}
                        </h1>
                        <p class="mt-6 max-w-2xl text-lg leading-8 text-muted">
                            {{ profile.summary }}
                        </p>

                        <div class="mt-8 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="#work"
                                class="inline-flex items-center justify-center rounded-full border border-ink bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                            >
                                View Selected Work
                            </a>
                            <a
                                href="#contact"
                                class="inline-flex items-center justify-center rounded-full border border-line bg-white/70 px-6 py-3 text-sm font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5"
                            >
                                Start a Conversation
                            </a>
                        </div>

                        <div class="mt-10 grid gap-4 sm:grid-cols-3">
                            <article
                                v-for="highlight in highlights"
                                :key="highlight.title"
                                class="section-card rounded-[1.75rem] p-5 fade-enter-delay"
                            >
                                <h2 class="text-base font-semibold text-ink">{{ highlight.title }}</h2>
                                <p class="mt-3 text-sm leading-6 text-muted">{{ highlight.description }}</p>
                            </article>
                        </div>
                    </div>

                    <div class="fade-enter-late">
                        <aside class="section-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
                            <div class="absolute -right-8 -top-10 h-28 w-28 rounded-full bg-brand-soft blur-3xl" />
                            <div class="absolute -bottom-10 left-0 h-24 w-24 rounded-full bg-ocean blur-3xl" />

                            <div class="relative">
                                <p class="label-kicker">Profile</p>
                                <div class="mt-6 flex items-start justify-between gap-4">
                                    <div>
                                        <h2 class="font-display text-4xl leading-none text-ink sm:text-5xl">
                                            {{ profile.name }}
                                        </h2>
                                        <p class="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-muted">
                                            {{ profile.role }}
                                        </p>
                                    </div>
                                    <div
                                        class="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-white/80 text-sm font-bold tracking-[0.28em] text-ink"
                                    >
                                        {{ profile.initials }}
                                    </div>
                                </div>

                                <dl class="mt-8 space-y-4 text-sm">
                                    <div class="flex items-start justify-between gap-6 border-b border-line pb-4">
                                        <dt class="font-semibold uppercase tracking-[0.18em] text-muted">Location</dt>
                                        <dd class="text-right font-medium text-ink">{{ profile.location }}</dd>
                                    </div>
                                    <div class="flex items-start justify-between gap-6 border-b border-line pb-4">
                                        <dt class="font-semibold uppercase tracking-[0.18em] text-muted">Email</dt>
                                        <dd class="text-right font-medium text-ink">{{ profile.email }}</dd>
                                    </div>
                                    <div class="flex items-start justify-between gap-6">
                                        <dt class="font-semibold uppercase tracking-[0.18em] text-muted">Focus</dt>
                                        <dd class="max-w-[14rem] text-right font-medium text-ink">Web design, product UI, and frontend execution</dd>
                                    </div>
                                </dl>
                            </div>
                        </aside>
                    </div>
                </section>

                <section id="about" class="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                    <article class="section-card rounded-[2rem] p-6 sm:p-8">
                        <p class="label-kicker">About</p>
                        <h2 class="mt-5 max-w-xl font-display text-4xl leading-tight text-ink sm:text-5xl">
                            A professional portfolio should feel clear, composed, and easy to trust.
                        </h2>
                        <p class="mt-5 max-w-2xl text-base leading-7 text-muted">
                            This layout is designed to present your work with confidence. It balances strong typography,
                            generous spacing, and practical content sections so the site feels modern without becoming
                            decorative for its own sake.
                        </p>
                        <p class="mt-4 max-w-2xl text-base leading-7 text-muted">
                            Use it to introduce yourself, explain your strengths, highlight a few meaningful projects,
                            and give people a clear next step to contact you.
                        </p>
                    </article>

                    <div class="grid gap-6 sm:grid-cols-3">
                        <article
                            v-for="area in focusAreas"
                            :key="area.title"
                            class="section-card rounded-[1.75rem] p-5 sm:p-6"
                        >
                            <div class="h-10 w-10 rounded-2xl bg-brand-soft" />
                            <h3 class="mt-5 text-lg font-semibold text-ink">{{ area.title }}</h3>
                            <p class="mt-3 text-sm leading-6 text-muted">{{ area.description }}</p>
                        </article>
                    </div>
                </section>

                <section id="work" class="pt-4">
                    <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p class="label-kicker">Selected Work</p>
                            <h2 class="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                                A concise set of projects with clear context and outcomes.
                            </h2>
                        </div>
                        <p class="max-w-md text-sm leading-6 text-muted">
                            Keep this section tight. Three strong projects will usually present better than ten unfinished ones.
                        </p>
                    </div>

                    <div class="mt-8 grid gap-6 lg:grid-cols-3">
                        <article
                            v-for="project in projects"
                            :key="project.name"
                            class="section-card flex h-full flex-col rounded-[2rem] p-6"
                        >
                            <div class="flex items-center justify-between gap-4">
                                <p class="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
                                    {{ project.category }}
                                </p>
                                <p class="text-sm font-medium text-muted">{{ project.year }}</p>
                            </div>

                            <h3 class="mt-5 text-2xl font-semibold text-ink">{{ project.name }}</h3>
                            <p class="mt-4 text-base leading-7 text-muted">{{ project.summary }}</p>
                            <p class="mt-5 border-l-2 border-brand pl-4 text-sm leading-6 text-ink">
                                {{ project.outcome }}
                            </p>

                            <div class="mt-6 flex flex-wrap gap-2">
                                <span
                                    v-for="tag in project.tags"
                                    :key="tag"
                                    class="rounded-full bg-brand-soft px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand"
                                >
                                    {{ tag }}
                                </span>
                            </div>
                        </article>
                    </div>
                </section>

                <section id="experience" class="grid gap-6 pt-4 lg:grid-cols-[1.1fr_0.9fr]">
                    <article class="section-card rounded-[2rem] p-6 sm:p-8">
                        <p class="label-kicker">Experience</p>
                        <h2 class="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                            Experience that connects strategy, visuals, and execution.
                        </h2>

                        <div class="mt-8 space-y-6">
                            <article
                                v-for="item in experience"
                                :key="`${item.period}-${item.role}`"
                                class="rounded-[1.5rem] border border-line bg-white/60 p-5"
                            >
                                <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <p class="text-lg font-semibold text-ink">{{ item.role }}</p>
                                        <p class="text-sm font-medium text-muted">{{ item.company }}</p>
                                    </div>
                                    <p class="text-sm font-semibold uppercase tracking-[0.18em] text-brand">{{ item.period }}</p>
                                </div>
                                <p class="mt-4 text-sm leading-6 text-muted">{{ item.summary }}</p>
                            </article>
                        </div>
                    </article>

                    <article class="section-card rounded-[2rem] p-6 sm:p-8">
                        <p class="label-kicker">Principles</p>
                        <div class="mt-6 space-y-5">
                            <article
                                v-for="principle in principles"
                                :key="principle.title"
                                class="rounded-[1.5rem] border border-line bg-white/60 p-5"
                            >
                                <h3 class="text-lg font-semibold text-ink">{{ principle.title }}</h3>
                                <p class="mt-3 text-sm leading-6 text-muted">{{ principle.description }}</p>
                            </article>
                        </div>
                    </article>
                </section>

                <section id="contact" class="pt-4">
                    <article class="section-card relative overflow-hidden rounded-[2.25rem] p-6 sm:p-8 lg:p-10">
                        <div class="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-brand-soft to-transparent lg:block" />

                        <div class="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                            <div class="max-w-2xl">
                                <p class="label-kicker">Contact</p>
                                <h2 class="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                                    Ready to turn this into your actual portfolio?
                                </h2>
                                <p class="mt-5 text-base leading-7 text-muted">
                                    Replace the placeholder name, bio, case studies, and experience with your real
                                    content. The structure is already set up to present you professionally on desktop
                                    and mobile.
                                </p>
                            </div>

                            <div class="flex flex-col gap-4 sm:flex-row lg:flex-col">
                                <a
                                    :href="emailLink"
                                    class="inline-flex items-center justify-center rounded-full border border-ink bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                                >
                                    {{ profile.email }}
                                </a>
                                <a
                                    href="#top"
                                    class="inline-flex items-center justify-center rounded-full border border-line bg-white/70 px-6 py-3 text-sm font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5"
                                >
                                    Back to Top
                                </a>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    </div>
</template>
