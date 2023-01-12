import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = {};
  const loadedEnv = loadEnv(mode, resolve(__dirname, '../../'), 'APP_');

  Object.keys(loadedEnv).forEach((key) => {
    env[`__${key}__`] = `"${loadedEnv[key]}"`;
  });

  return {
    plugins: [react()],
    define: env,
  };
});
