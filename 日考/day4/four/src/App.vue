<template>
  <div>{{arr}}</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  data(){
    return {
      arr:['a','2h','3c','4a']
    }
  },
  components: {
    HelloWorld
  },
  created(){
    this.arrForeach()
  },
  methods:{
    arrForeach(){
      this.arr.forEach((item)=>{
        this.arr+=item
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
