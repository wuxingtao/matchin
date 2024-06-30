import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import babel from 'vite-babel-plugin'

// import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [vue()],
  plugins: [createVuePlugin(), vueJsx(), babel()],
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      vue$: 'vue/dist/vue.esm.js',
      storejs: resolve(__dirname, 'src/store/storejs/dist/store.esm.js'),
      '@assets/': resolve(__dirname, 'src/assets'),
      '@ant-design/icons/lib/dist$': resolve(__dirname, './src/assets/antd-icons.js'),
      '@views/': resolve(__dirname, 'src/views'),
      '@router/': resolve(__dirname, 'src/router'),
      '@store/': resolve(__dirname, 'src/store'),
      '@components/': resolve(__dirname, 'src/components'),
      '@utils/': resolve(__dirname, 'src/utils')
    },
    extensions: ['.js', '.vue', '.json', '.ts', '.tsx', '.less']
  },
  esbuild: {
    loader: 'jsx',
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  server: {
    // proxy: createProxy(proxy_dev),
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // hack: `true; @import (reference) "${resolve(
          //   __dirname,
          //   "src/assets/less/_variable.less"
          // )}"`,
          'primary-color': '#006EEB',
          'link-color': '#006EEB',
          'text-color': '#333333',
          'text-color-secondary': '#9aa0a6',
          'border-color-base': '#EDEDED'
        },
        javascriptEnabled: true,
        sourceMap: true
      }
    }
  },
  build: {
    sourcemap: false
  }
})
