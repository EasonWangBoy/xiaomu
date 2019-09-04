<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in imgUrl" :key="index">
                <img :src="item.img" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"
export default {
    props:{
        imgUrl:{
          type:Array,
            default:()=>{
                return [
                    {
                        img:"http://pic33.nipic.com/20130911/12483715_163813947000_2.jpg"
                    },
                    {
                        img:"http://pic39.nipic.com/20140327/17556992_134152074389_2.jpg"
                    },
                    {
                        img:"http://pic23.nipic.com/20120830/9686992_180336646144_2.jpg"
                    },
                    {
                        img:"http://pic31.nipic.com/20130729/10765727_085009508000_2.jpg"
                    }
                ]
            }
        }
    },
    created(){
        this.$nextTick(()=>{
            new Swiper(".swiper-container")
        })
    }
}
</script>

<style lang="scss" scoped>
.swiper-container{
    width: 100%;
    height: 142px;
}
.swiper-wrapper,.swiper-slide,img{
    width: 100%;
    height: 100%;
}
</style>