import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

const hasPhp = () => {
    const result = spawnSync('php', ['-v'], { stdio: 'ignore' });

    return !result.error && result.status === 0;
};

const canGenerateWayfinder = () => hasPhp() && existsSync('artisan') && existsSync('vendor/autoload.php');

export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
        },
    },
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        // The generated Wayfinder files are committed. Skip regeneration when PHP
        // is unavailable, such as Vercel's Node-only frontend builds.
        ...(canGenerateWayfinder()
            ? [
                  wayfinder({
                      formVariants: true,
                  }),
              ]
            : []),
    ],
});
