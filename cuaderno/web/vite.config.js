import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
// La entrada es pagina.html (no index.html) para que esta carpeta, publicada como código fuente, no se sirva como página.
export default defineConfig({base: './', plugins: [react()], build: {outDir: 'dist', chunkSizeWarningLimit: 2000, rollupOptions: {input: 'pagina.html'}}});
