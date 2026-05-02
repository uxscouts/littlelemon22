

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', 
    globals: true,
  },
});

/*
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
     test: {
    environment: 'jsdom',
    globals: true,
  }
})
  */
