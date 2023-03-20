import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import imagemin from 'unplugin-imagemin/vite';
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  // 路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    // 自动导入组件和依赖
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // 压缩图片
    imagemin(),
    // 压缩文件
    viteCompression({
      threshold: 102400 // 对大于 100kb 的文件进行压缩
    })
  ],
  // 服务地址、端口配置
  server: {
    host: '127.0.0.1',
    port: 8080,
    open: true
  },
  // 引入全局scss
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/index.scss";`
      }
    }
  }
})
