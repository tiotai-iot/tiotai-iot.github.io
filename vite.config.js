import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative base so the built assets resolve correctly whether this is
  // served from a GitHub Pages *project* page (username.github.io/repo/)
  // or a root/user page (username.github.io/).
  base: './',
});
