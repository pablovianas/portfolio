import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom'],
                    'motion-vendor': ['framer-motion'],
                    'icons-vendor': ['lucide-react', 'react-icons'],
                },
            },
        },
        chunkSizeWarningLimit: 1000,
        minify: 'esbuild',
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'react-icons'],
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/tests/setup.ts',
        css: true,
    },
});