<template>
    <header>
        <span v-if="back" @click="goBack">&lt;</span>
        <div>
            <slot></slot>
        </div>
    </header>
</template>

<script>
export default {
    props:{
        back:Boolean
    },
    methods:{
        goBack(){
            // 返回当前路由的上一页路由
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
header{
    width: 100%;
    height: 44px;
    display: flex;
    padding: 0 10px;
    align-items: center;
    background: #f5f5f5;
    text-align: center;
}
header div{
    flex: 1;
    display: flex;
}
.send{
    font-size: 13px;
    line-height: 44px;
    display: inline-block;
    width: 80px;
    color: rgba(42, 130, 228, 1);
}
header div p {
    width: 100%;
    text-align: center;
    font-size: 13px;
    line-height: 44px;
}
</style>