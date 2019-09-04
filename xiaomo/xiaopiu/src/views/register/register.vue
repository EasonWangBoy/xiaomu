<template>
  <div class="login">
    <h3>沐恩之家欢迎你</h3>
      <div class="input">
        <input type="text" placeholder="请输入账号" v-model="username">
      </div>
      <div class="input">
        <input type="text" placeholder="请输入你的姓名" v-model="realName">
      </div>
      <div class="input">
        <input type="password" placeholder="请输入密码" v-model="pwd">
      </div>
      <div class="input">
        <input type="password" placeholder="再次确认密码">
      </div>
      <div class="enRegi">
        <el-button :plain="true" @click="enterReg">注册</el-button>
      </div>
  </div>
</template>

<script>
import httpAxios from "@/ulits/http"
export default {
    data(){
        return {
            username:'',
            pwd:'',
            realName:''
        }
    },
    methods:{
        enterReg(){
            httpAxios.post('/api/register',
            {
              userName:this.username,
              password:this.pwd,
              realName:this.realName
            }).then(res=>{
                console.log(res)
               if(res.code===1){
                  this.$message({
                    message:'注册成功',
                    type:'success'
                    })
               }else{
                  this.$message("注册事变")
               }
            })
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
  width: 60%;
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
}
.link span{
  flex: 1;
}
.enRegi{
  width: 60%;
  height: 40px;
  margin: 0 auto;
  text-align: center;
  line-height: 40px;
}
.enRegi button{
  width: 100%;
  height: 100%;
  // border
}
</style>