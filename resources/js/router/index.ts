import { createRouter, createWebHistory } from 'vue-router';
import PortfolioView from '@/views/PortfolioView.vue';
import { siteMeta } from '@/data/portfolio';

const routes = [
    {
        path: '/',
        name: 'home',
        component: PortfolioView,
        meta: {
            title: siteMeta.title,
            description: siteMeta.description,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        if (to.hash) {
            return new Promise((resolve) => {
                window.setTimeout(() => {
                    resolve({
                        el: to.hash,
                        top: 88,
                        behavior: 'smooth',
                    });
                }, 120);
            });
        }

        return {
            top: 0,
            behavior: 'smooth',
        };
    },
});

router.afterEach((to) => {
    document.title = (to.meta.title as string | undefined) ?? siteMeta.title;

    const description = (to.meta.description as string | undefined) ?? siteMeta.description;
    let descriptionTag = document.querySelector('meta[name="description"]');

    if (!descriptionTag) {
        descriptionTag = document.createElement('meta');
        descriptionTag.setAttribute('name', 'description');
        document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute('content', description);
});

export default router;
