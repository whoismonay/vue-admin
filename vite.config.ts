import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  esbuild: {
    // 从代码中去掉 console 和 debugger
    drop: ['console', 'debugger']
  },
  build: {
    reportCompressedSize: false
  },
  plugins: [
    // 开发工具
    VueDevTools(),
    // 文件路由
    VueRouter({
      exclude: ['**/components/*.vue'],
      dts: './types/vue-router.d.ts'
    }),
    vue(),
    AutoImport({
      dts: './types/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        globalsPropValue: true
      },
      imports: ['vue', VueRouterAutoImports, 'pinia']
    }),
    Components({
      dts: './types/components.d.ts',
      resolvers: [
        AntDesignVueResolver({
          importStyle: false
        })
      ]
    }),
    UnoCSS()
  ]
})
