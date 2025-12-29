import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import webExtension, { readJsonFile } from 'vite-plugin-web-extension';

const target = process.env.TARGET || 'chrome';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        webExtension({
            browser: target,
            manifest: () => {
                const pkg = readJsonFile('package.json');
                const template = readJsonFile('manifest.json');

                return {
                    ...template,
                    version: pkg.version,
                };
            },
        }),
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
