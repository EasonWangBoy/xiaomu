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
      path:"/vote",
      meta:{
        title:"投票"
      },
      component:() => import ("./views/vote/vote.vue")
    },
    {
      path:"/newVote",
      meta:{
        title:"发起投票"
      },
      component:() => import ("./views/newVote/newVote.vue")
    },
    {
      path:'*',
      redirect:'/home'
    }
  ]
})


router.beforeEach((to,from,next)=>{
  // 判断路由元信息meta里面的required如果为true就拦截守卫
    if(to.matched.some(item=>item.meta.required)){  //some是就找一个真 every是必须都为真才行
      // 获取本地存储里面的token
      let token=window.localStorage.token;
      // 如果token存在
      if(token){
        // 继续做别的事情
        next()
      }else{
        // 如果不存在就拦截守卫
        next({
          path:"/login",
          query:{
            // fullpath是你下一步要去的路由,当你登陆成功后会可以获取要去的fullpath
            redirect:to.fullPath
          }
        })
      }
    }else{
      next()
    }
})
// aftereach只有两个参数没有next
router.afterEach((to,from)=>{
  // 如果路由里面有元信息也有title
  if(to.meta&&to.meta.title){
    // 就把docume.title改成源信息里面的title
    document.title=to.meta.title
  }else{
    // 有的路由没有元信息就给他默认的title
    document.title="沐恩之家"
  }
})
export default router;