<template>
  <div class="home">
    <div class="head">
      <h3>多加网</h3>
    </div>
    <div class="main">
      <div class="top">
        <input type="text" placeholder="热门搜索"><span>分类</span>
      </div>
      <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1022109268,3759531978&fm=26&gp=0.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1688026885,2773767715&fm=26&gp=0.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4064075977,3738371861&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="list">
      <dl v-for="(item,index) in list" :key="index">
        <dd>{{item.tit}}</dd>
      </dl>
    </div>
    </div>
    <div class="foot">
      <span @click="gohome">首页</span>
      <router-link to="/mine" tag="span">我的</router-link>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from "swiper"
export default {
  name: 'home',
  components: {
  },
  created(){
    this.$nextTick(()=>{
      new Swiper('.swiper-container')
    })
  },
  methods:{
    gohome(){
      this.$router.push({path:'/home'})
    }
  },
  data(){
    return {
      list:[
        {
          tit:'成单奖励'
        },
        {
          tit:'实训二'
        },
        {
          tit:'实训一'
        },
        {
          tit:'大实训'
        },
        {
          tit:'充值'
        },
        {
          tit:'15薪'
        },
        {
          tit:'月薪奖励'
        },
        {
          tit:'加班奖励'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.head{
  width: 100%;
  height: 44px;
  background: #f2f2f2;
  text-align: center;
  align-items: center;
  line-height: 44px;
}
.main{
  flex: 1;
}
.top {
  width: 100%;
  height: 40px;
  background: green;
  display: flex;
}
.top input{
  outline: none;
  border:0;
  background: #fff;
  border-radius: 25px;
  flex: 1;
  height: 20px;
  margin-top:8px;
}
.top span{
  width: 10%;
  display: block;
  margin-top: 8px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
}
.swiper-container{
  width: 100%;
  height: 200px;
}
.swiper-wrapper,.swiper-slide,img{
  width: 100%;
  height: 100%;
}
.list{
  width: 100%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #000;
}
.list dl{
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.foot{
  width: 100%;
  height: 40px;
  background: #f5f5f5;
  display: flex;
}
.foot span{
  flex: 1;
  text-align: center;
  line-height: 40px;
}
</style>