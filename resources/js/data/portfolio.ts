import type {
    ContactInfo,
    ExperienceItem,
    HeroMetric,
    NavItem,
    Project,
    ProjectCategory,
    SkillGroup,
    SocialLink,
} from '@/types/portfolio';

export const siteMeta = {
    title: 'Kenn Cedric Jala | Portfolio',
    description:
        'A minimalist and professional portfolio website for a modern frontend developer, designer, or creative technologist.',
};

export const navigationItems: NavItem[] = [
    { label: 'Home', hash: '#home' },
    { label: 'About', hash: '#about' },
    { label: 'Projects', hash: '#projects' },
    { label: 'Skills', hash: '#skills' },
    { label: 'Contact', hash: '#contact' },
];

export const hero = {
    greeting: "Hi, I'm Kenn Cedric Jala",
    titleAccent: 'crafting calm digital products',
    tagline: 'Full Stack Developer & UI/UX Enthusiast',
    intro:
        'I design and build focused digital experiences with modern frontend systems, thoughtful UX, and clean engineering.',
    summary:
        'This portfolio is structured to help recruiters, founders, and clients quickly understand what you do, how you think, and the kind of work you deliver.',
    availability: 'Available for freelance and full-time roles in 2026',
    primaryCta: {
        label: 'View My Projects',
        hash: '#projects' as const,
    },
    secondaryCta: {
        label: 'Download CV',
        href: '/files/your-name-cv.txt',
    },
};

export const heroMetrics: HeroMetric[] = [
    {
        value: '4+',
        label: 'Years building products and launch sites',
    },
    {
        value: '18',
        label: 'Projects shipped across product, web, and brand',
    },
    {
        value: 'Remote',
        label: 'Collaborating across teams, founders, and time zones',
    },
];

export const socialLinks: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com/yourname' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yourname' },
    { label: 'Dribbble', href: 'https://dribbble.com/yourname' },
    { label: 'Email', href: 'mailto:hello@yourname.com' },
];

export const about = {
    heading: 'A quiet, premium portfolio built to present strong work without unnecessary noise.',
    bio: [
        'I am a multidisciplinary developer with a strong interest in elegant interfaces, responsive systems, and product experiences that feel trustworthy from the first interaction.',
        'My work sits between design and engineering. I enjoy translating strategy into clear layouts, thoughtful components, and fast, maintainable frontend builds.',
    ],
    experienceSummary:
        'Recent work includes SaaS dashboards, premium landing pages, brand-led marketing websites, and interface systems for growing teams.',
    education: 'B.S. in Information Technology, Your University',
    photoUrl: '/images/profile-placeholder.svg',
    highlights: ['Product Design Thinking', 'Frontend Architecture', 'Design Systems', 'Performance-Focused UI'],
};

export const skillGroups: SkillGroup[] = [
    {
        title: 'Frontend',
        description: 'Interfaces with strong hierarchy, responsiveness, and production-ready structure.',
        skills: [
            { name: 'Vue 3', level: 'Advanced', note: 'Component architecture, composition patterns, routing', icon: 'vue' },
            { name: 'TypeScript', level: 'Advanced', note: 'Strict typing, reusable interfaces, maintainable UI state', icon: 'typescript' },
            { name: 'Tailwind CSS', level: 'Advanced', note: 'Design systems, token-driven styling, responsive layouts', icon: 'tailwind' },
            { name: 'Testing UI', level: 'Intermediate', note: 'Confident with validation, edge cases, and interface QA', icon: 'testing' },
        ],
    },
    {
        title: 'Backend',
        description: 'Pragmatic application foundations that support clean frontend experiences.',
        skills: [
            { name: 'Laravel', level: 'Advanced', note: 'Routing, Blade shells, APIs, forms, and deployment flows', icon: 'laravel' },
            { name: 'Node.js', level: 'Intermediate', note: 'Lightweight tooling, scripting, and service integration', icon: 'node' },
            { name: 'REST APIs', level: 'Advanced', note: 'Data shaping, endpoint integration, and product workflows', icon: 'api' },
            { name: 'Databases', level: 'Intermediate', note: 'Schema awareness, query planning, and content modeling', icon: 'database' },
        ],
    },
    {
        title: 'Tools & Workflow',
        description: 'The stack around the work: collaboration, prototyping, and shipping.',
        skills: [
            { name: 'Figma', level: 'Advanced', note: 'Wireframes, mockups, UI systems, and handoff-ready design', icon: 'figma' },
            { name: 'Docker', level: 'Intermediate', note: 'Portable local environments and consistent setup', icon: 'docker' },
            { name: 'Git & GitHub', level: 'Advanced', note: 'Branching, review workflows, and release discipline', icon: 'git' },
            { name: 'Product Analytics', level: 'Intermediate', note: 'Reading usage patterns to refine interface decisions', icon: 'analytics' },
        ],
    },
];

export const projectCategories: ProjectCategory[] = ['All', 'Web', 'Product', 'Brand'];

export const projects: Project[] = [
    {
        title: 'Atlas Finance Dashboard',
        slug: 'atlas-finance-dashboard',
        category: 'Product',
        image: '/images/projects/atlas-dashboard.svg',
        description:
            'A finance operations dashboard focused on reporting clarity, executive summaries, and simplified workflows for distributed teams.',
        stack: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Laravel API'],
        liveUrl: 'https://example.com/atlas-dashboard',
        githubUrl: 'https://github.com/yourname/atlas-dashboard',
    },
    {
        title: 'Northstar Studio Portfolio',
        slug: 'northstar-studio-portfolio',
        category: 'Brand',
        image: '/images/projects/northstar-portfolio.svg',
        description:
            'A premium portfolio website for a creative studio with editorial typography, smooth section transitions, and clean case-study navigation.',
        stack: ['Vue 3', 'Vite', 'Tailwind CSS'],
        liveUrl: 'https://example.com/northstar',
        githubUrl: 'https://github.com/yourname/northstar-portfolio',
    },
    {
        title: 'Harbor Commerce Experience',
        slug: 'harbor-commerce',
        category: 'Web',
        image: '/images/projects/harbor-commerce.svg',
        description:
            'A storefront redesign with improved product storytelling, responsive catalog browsing, and lighter mobile checkout flows.',
        stack: ['Vue 3', 'TypeScript', 'Stripe', 'Responsive UX'],
        liveUrl: 'https://example.com/harbor-commerce',
        githubUrl: 'https://github.com/yourname/harbor-commerce',
    },
    {
        title: 'Pulse Team Workspace',
        slug: 'pulse-team-workspace',
        category: 'Product',
        image: '/images/projects/pulse-workspace.svg',
        description:
            'An internal team workspace concept for planning, communication, and reporting, designed around calm information density.',
        stack: ['Vue 3', 'Pinia-ready architecture', 'Charts', 'Design System'],
        liveUrl: 'https://example.com/pulse-workspace',
        githubUrl: 'https://github.com/yourname/pulse-workspace',
    },
];

export const experience: ExperienceItem[] = [
    {
        period: '2024 - Present',
        role: 'Senior Frontend Developer',
        company: 'Independent Practice',
        summary:
            'Partner with founders and teams on portfolio sites, marketing pages, dashboards, and production-quality design systems.',
    },
    {
        period: '2022 - 2024',
        role: 'Frontend Developer',
        company: 'Digital Product Studio',
        summary:
            'Built client-facing websites and product interfaces with Vue, Laravel, and a strong emphasis on performance and consistency.',
    },
    {
        period: '2020 - 2022',
        role: 'UI Designer',
        company: 'Creative Agency',
        summary:
            'Designed websites, brand systems, and presentation assets with a focus on clarity, hierarchy, and premium visual tone.',
    },
];

export const contact: ContactInfo = {
    email: 'hello@yourname.com',
    location: 'Manila, Philippines',
    availability: 'Open to remote work, freelance collaborations, and selective consulting.',
    formEndpoint: 'https://formspree.io/f/your-form-id',
};
