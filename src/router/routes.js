import Layout from '@/views/layout/Layout'
import views from '@/views';
//import HelloWorld from '@/components/HelloWorld';

export default [
    {
      //path: '/dev/',
      path: process.env.BASE_DIRECTORY,
      component: Layout,
      meta: { auth: true },
      children: [
        {
      		path: process.env.BASE_DIRECTORY,
      		redirect: '',
          name: 'Home',
          component: views.Home,
      		meta: { auth: true }
      	},
        {
          path: '/about-us',
          name: 'AboutUs',
          component: views.AboutUs,
          meta: { auth: true }
        },
        {
          path: '/services',
          name: 'Services',
          component: views.Services,
          meta: { auth: true }
        },
        {
          path: process.env.BASE_DIRECTORY + 'request-quote',
          name: 'RequestQuote',
          component: views.Quote,
          meta: { auth: true }
        },
        // catch all redirects that don't match redirect to home page
        //{ path: '*', redirect: '/' }
      ]
    },
    
]
