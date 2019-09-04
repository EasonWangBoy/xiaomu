<template>
  <div class="votes">
    <Header :back="true">
        <template>
            <p>投票</p>
            <span class="send" @click="newVote">发起投票</span>
        </template>
    </Header>
    <div class="allVoteList">

    </div>
  </div>
</template>

<script>
import httpAxios from "@/ulits/http.js"
import {allVote} from "@/api/api.js"
export default {
  data(){
    return {
      voteList:[]
    }
  },
  created(){
    allVote().then(res=>{
      this.voteList=res;
    })
  },
  methods:{
    newVote(){
      this.$router.push({path:"/newVote"})
    }
  }
}
</script>

<style>

</style>