export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('./App')
  },
  {
    path: '*',
    redirect: '/'
  }
]
