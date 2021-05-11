
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'users', component: () => import('pages/Users.vue') },
      { path: 'user/:id', component: () => import('pages/User.vue') }
    ]
  },
  {
    path: '/controle',
    component: () => import('layouts/Controle.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
