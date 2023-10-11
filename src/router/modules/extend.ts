import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/extend',
  component: Layout,
  redirect: '/extend/icon',
  name: 'extend',
  meta: {
    title: '扩展内容',
    icon: 'ep:box',
  },
  children: [
    {
      path: 'icon',
      name: 'extendIcon',
      component: () => import('@/views/extend/icon.vue'),
      meta: {
        title: '图标扩展',
      },
    },
    {
      path: 'card',
      name: 'extendCard',
      component: () => import('@/views/extend/card.vue'),
      meta: {
        title: '卡片扩展',
      },
    },
  ],
}

export default routes
