<template>
  <div>
    <!-- <h3>HomeContainer</h3> -->
    <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper> 
      <!-- <mt-swipe-item>2</mt-swipe-item> -->
      <!-- <mt-swipe-item>3</mt-swipe-item> -->
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/home/newslist">
		                    <img src="../assets/images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div>
                  </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/home/photolist">
		                    <img src="../assets/images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div>
                  </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/home/goodslist">
		                    <img src="../assets/images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div>
                  </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../assets/images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../assets/images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../assets/images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		           
		        </ul> 
		
  </div> 
</template>

<script>
import { Toast } from 'mint-ui'
import swiper from '@/components/subcomponents/swiper'

export default {
  data () {
    return {
      lunbotuList: [] 
    };
  },
  created() { 
  this.getLunbotu();
},
methods: {
  getLunbotu() {
    this.$http.get("api/seller").then(result => {
      
      // if(result.body.status === 0 ) {
        // this.lunbotuList = result.body.data.supports
      // } else {
        // console.log(result.body.data.supports)
        this.lunbotuList = result.body.data.supports
        // console.log(this.lunbotuList[0].img)
        // 失败
        // Toast("轮播图加载失败")
      // }  
    })
  }
},
components: {
  swiper
}




}





  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;
  img{
    width: 60px;
    height: 60px;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: 0;
}
</style>


