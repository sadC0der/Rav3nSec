import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SignIn from '@/components/Pages/User/SignIn'
import SignUp from '@/components/Pages/User/SignUp'
import About from '@/components/Pages/About'
import Contact from '@/components/Pages/Contact'
import Posts from '@/components/Pages/Blog/Posts'
import Post from '@/components/Pages/Blog/Post'
import CreatePost from '@/components/Pages/Blog/CreatePost'
import Press from '@/components/Pages/Press'
import Doxs from '@/components/Pages/Doxs'
import Ghostbins from '@/components/Pages/Ghostbins'
import Tangdown from '@/components/Pages/Tangdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/new',
      name: 'CreatePost',
      component: CreatePost
    },
    {
      path: '/posts/:id',
      name: 'Post',
      props: true,
      component: Post
    },
    {
      path: '/press',
      name: 'Press',
      component: Press
    },
    {
      path: '/doxs',
      name: 'Doxs',
      component: Doxs
    },
    {
      path: '/ghostbins',
      name: 'Ghostbins',
      component: Ghostbins
    },
    {
      path: '/tangdown',
      name: 'Tangdown',
      component: Tangdown
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }

  ],
  mode: 'history'
})
