import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

const cherryPickedKeys = [
  "REACT_APP_WHATSAPP_NUMBER",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};
  cherryPickedKeys.forEach(key => processEnv[key] = env[key]);

  return {
    define: {
      'process.env': JSON.stringify(processEnv)
    },
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:5000', // Replace with your backend URL
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
});
