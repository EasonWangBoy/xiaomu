<template>
  <div class="home">
      <Header :back="false">
        <div>
          <p>沐恩muen</p>
        </div>
      </Header>
      <swiper></swiper>
      <div class="list">
        <dl>
          <dd>
            沐恩动态
          </dd>
        </dl>
        <dl>
          <dd>
            个人动态
          </dd>
        </dl>
        <dl>
          <dd>
            代祷列表
          </dd>
        </dl>
        <dl>
          <dd>
            <router-link to="/vote" tag="span">小礼品</router-link>
          </dd>
        </dl>
         <dl>
          <dd>
            留言
          </dd>
        </dl>
         <dl>
          <dd>
            奉献
          </dd>
        </dl>
         <dl>
          <dd>
            <router-link to="/vote" tag="span">投票</router-link>
          </dd>
        </dl>
         <dl>
          <dd>
            <router-link to="/vote" tag="span">小组</router-link>
          </dd>
        </dl>
      </div>
      <div class="tai">
        <p>沐恩动态</p>
      </div>
  </div>
</template>

<script>

export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
.home{
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
}
.list{
  width: 100%;
  height: 142px;
  display: flex;
  flex-wrap: wrap;
  background: #f5f5f5;
}
.list dl{
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tai{
  width: 100%;
  height: 48px;
  background: #f5f5f5;
  margin-top: 10px;
}
</style>