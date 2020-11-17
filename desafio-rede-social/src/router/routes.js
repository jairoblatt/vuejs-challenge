// loading dynamic of components
function page(path) {
    return () => import( /* webpackChunkName: '' */  `@/pages/${path}`).then(m => m.default || m)
  }

  export default [
    {
      path: '/',
      component: page('auth/Login.vue'),
      name: 'Login',
    },
    {
      path: '/recovery',
      component: page('auth/PasswordRecovery.vue'),
      name: 'PasswordRecovery',
    },
    {
      path: '/feed',
      component: page('feed.vue'),
      name: 'Feed',
    },
  ]