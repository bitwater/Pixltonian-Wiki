import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/luomiao/crypto/project/Pixltonian-Wiki/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/luomiao/crypto/project/Pixltonian-Wiki/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
