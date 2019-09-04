import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/home',
      meta:{
        required:true,
        title:"首页"
      },
      component:() => import ('./views/home/home.vue')
    },
    {
      path:"/login",
      meta:{
        title:"欢迎回到沐恩之家~~"
      },
      component:() => import ('./views/login/login.vue')
    },
    {
      path:"/register",
      meta:{
        title:"注册"
      },
      component:() => import ("./views/register/register.vue")
    },
    {
      path:'*',
      redirect:'/home'
    }
  ]
})


router.beforeEach((to,from,next)=>{
    if(to.matched.some(item=>item.meta.required)){
      let token=window.localStorage.token;
      if(token){
        next()
      }else{
        next({
          path:"/login",
          query:{
            redirect:to.fullPath
          }
        })
      }
    }else{
      next()
    }
})
router.afterEach((to,from)=>{
  if(to.meta&&to.meta.title){
    document.title=to.meta.title
  }else{
    document.title="沐恩之家"
  }
})
export default router;