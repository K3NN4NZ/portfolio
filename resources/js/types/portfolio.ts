export type ThemePreference = 'light' | 'dark';

export type NavItem = {
    label: string;
    hash: `#${string}`;
};

export type HeroMetric = {
    value: string;
    label: string;
};

export type SocialLink = {
    label: string;
    href: string;
};

export type SkillIcon =
    | 'vue'
    | 'typescript'
    | 'tailwind'
    | 'laravel'
    | 'node'
    | 'api'
    | 'figma'
    | 'database'
    | 'docker'
    | 'git'
    | 'testing'
    | 'analytics';

export type Skill = {
    name: string;
    level: string;
    note: string;
    icon: SkillIcon;
};

export type SkillGroup = {
    title: string;
    description: string;
    skills: Skill[];
};

export type ProjectCategory = 'All' | 'Web' | 'Product' | 'Brand';

export type Project = {
    title: string;
    slug: string;
    category: Exclude<ProjectCategory, 'All'>;
    image: string;
    description: string;
    stack: string[];
    liveUrl: string;
    githubUrl: string;
};

export type ExperienceItem = {
    period: string;
    role: string;
    company: string;
    summary: string;
};

export type ContactInfo = {
    email: string;
    location: string;
    availability: string;
    formEndpoint: string;
};
