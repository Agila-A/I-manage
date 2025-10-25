import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',       // treat JSX in .js files as JSX
    include: /\.js$/,    // apply to all .js files
  },
});
