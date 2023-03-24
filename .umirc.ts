import { defineConfig } from '@umijs/max';

export default defineConfig({
  title: 'react-umi',
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'npm',
  outputPath: 'build',
  publicPath: 'https://whjin.github.io/react-umi/',
  history: { type: 'hash' },
});
