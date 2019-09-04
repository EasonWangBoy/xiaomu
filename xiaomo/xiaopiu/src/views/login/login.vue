<template>
  <div class="login">
    <h3>沐恩之家欢迎你~~</h3>
      <div class="input">
        <input type="text" placeholder="请输入账号" v-model="username">
      </div>
      <div class="input">
        <input type="password" placeholder="请输入密码" v-model="pwd">
      </div>
      <div class="link">
        <router-link to="/register" tag="span" class="rgi">立即注册</router-link>
       <span>忘记密码</span>
      </div>
        <div class="enter">
        <el-button :plain="true" @click="goLogin">登陆</el-button>
      </div>
  </div>
</template>

<script>
// 用的httpAxios来做请求
import httpAxios from "@/ulits/http"
import {login} from "@/api/api.js"
export default {
  data(){
    return {
      username:'',
      pwd:''
    }
  },
  methods:{
    // 使用async函数 先执行gologin
  async  goLogin(){
      // 用post的接口给后端
    const res= await login({  //在执行api里面的login
       userName:this.username,
       password:this.pwd
       })
       // 如果code等于1 
        if(res.code===1){
          // 那就把res.token存在本地存储里面
          window.localStorage.token=res.token;
            this.$message({
              message:"登陆成功",
              type:"success"
            })
            // 获取路由里面query的参数redirect
            let redirect=this.$route.query.redirect;
            // 如果redirect存在
            if(redirect){
              // 那么就跳到当前redirect的路由
              this.$router.push({path:redirect})
            }else{
              // 不存在就跳到首页
              this.$router.push('/home')
            }
          }else if(res.code===-1){
              this.$message.error("登陆失败")
          }
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100%;
  padding-top: 20px;
}
.login h3{
  text-align: center;
  font-weight: normal;
  font-size: 15px;
}
.login input{
  outline: none;
  border: 0;
  border: 1px solid #ccc;
  width: 100%;
  height: 100%;
  
}
.login .input{
  text-align: center;
  padding: 10px;
  width: 63%;
  height: 50px;
  margin: 0 auto;
  margin-top: 5px;
}
.login .link{
  width: 60%;
  height: 30px;
  text-align: center;
  font-size: 14px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.link span{
  font-size: 13px;
}
.enter{
  width: 60%;
  height: 40px;
  margin: 0 auto;
  text-align: center;
  line-height: 40px;
}
.enter button{
  width: 100%;
  height: 100%;
}
.rgi{
  color: rgba(255, 141, 26, 1);
}
</style>