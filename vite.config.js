import { defineConfig } from 'vite';

export default defineConfig({
    base: '/minProject-build-tools/',
    
    root: './',
    server: {
        port: 5173,
        open: true
    },
    build: {
        outDir: 'dist',
        sourcemap: true
    }
});
