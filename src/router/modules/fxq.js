/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const fxqRouter = {
  path: '/fxq',
  component: Layout,
  redirect: '/fxq/trading-100',
  name: 'fxq',
  meta: {
    title: '反洗钱',
    icon: 'table'
  },
  children: [
    {
      path: 'trading-100',
      component: () => import('@/views/fxq/trading-100'),
      name: 'trading-100',
      meta: { title: '交易量前100' }
    },
    {
      path: 'trading-101',
      component: () => import('@/views/fxq/trading-100'),
      name: 'trading-101',
      meta: { title: '交易量前101' }
    }
  ]
}
export default fxqRouter
