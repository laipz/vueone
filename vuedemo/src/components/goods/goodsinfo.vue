<template>
  <div class="goodsinfo-container">
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
          <div class="ball" v-show="ballflag" ref="ball"></div>
      </transition>
    <!-- 轮播图 -->
    <div class="mui-card">
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <swiper :lunbotuList="lunbotu" :isfull="false"></swiper> 
            </div>
        </div>
    </div>

    <!-- 购买 -->

    <div class="mui-card">
        <div class="mui-card-header">{{ goodsinfo.title }}</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <p class="price">
                    市场价：<del>¥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价: <span class="now_price">¥{{ goodsinfo.sell_price }}</span>
                </p>
                <p>购买数量：<numbox @getCount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p> 
                <p>
                    <mt-button type="primary" size="small" class="hand">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="isballflag" class="hand">加入购物车</mt-button>
                </p>
            </div>
        </div>
    </div>

    <!-- 评论 -->

    <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <p>商品货号：{{ goodsinfo.goods_no }}</p>
                <p>库存情况：{{ goodsinfo.stock_quantity }} 件</p>
                <p>上架时间： {{ goodsinfo.add_time | dateFormat}} </p>
            </div>
        </div>
        <div class="mui-card-footer">
            <mt-button type="primary" size="large" plain @click="GoImageText(id)">图文介绍</mt-button>
            <mt-button type="danger" size="large" plain @click="GoComment(id)">商品评论</mt-button>
        </div>
    </div>


  </div>
    
</template>

<script>
import swiper from '@/components/subcomponents/swiper'
import numbox from '@/components/subcomponents/goodsinfo_numbox'
export default {
  data () {
    return {
        id: this.$route.params.id,
        lunbotu: [],
        goodsinfo: [],
        ballflag:false,
        selectedCount:1
    }
  },
  created() { 
    this.getlunbotu()
    this.getGoodsInfo()
  },
  components:{
      swiper,
      numbox
  },
  methods: {
      getlunbotu(){
            this.$http.get("api/seller").then(result => {
                if(result.body.errno === 0){
                    result.body.data.getthumimages[parseInt(this.id)].forEach( item => {
                        item.img = item.src;
                    });
                    this.lunbotu = result.body.data.getthumimages[parseInt(this.id)]
                    // result.body.data.getthumimages
                } else{
                    console.log(result.body.data)
                }
            })
      },
      getGoodsInfo(){
            this.$http.get("api/seller").then(result => {
                if(result.body.errno === 0){
                    // result.body.data.getInfo[parseInt(this.id)].forEach( item => {
                    //     item.img = item.src;
                    // });
                    this.goodsinfo = result.body.data.getInfo[this.id]
                    // console.log(this.goodsinfo)
                } else{
                    console.log(result.body.data)
                }
            })
      },
      GoImageText(id){
          this.$router.push({ name: 'ImageText', params: { id } })

      },
      GoComment(id){
          this.$router.push({ name: 'Comment', params: { id } })

      },
      isballflag(){
          this.ballflag = !this.ballflag
          var goodsinfo ={ 
              id: this.id,
              count: this.selectedCount, 
              price: this.goodsinfo.sell_price, 
              selected: true 
            }
          this.$store.commit('addToCar',goodsinfo)
      },
      beforeEnter(el){
          el.style.transform = "translate(0,0)";

      },
      enter( el, done ){
            el.offsetWidth;
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById("badge").getBoundingClientRect();

            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;

            el.style.transform = `translate(${xDist}px,${yDist}px)`;
            el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
            done();
      },
      afterEnter( el ){
            this.ballflag = !this.ballflag
      },
      getSelectedCount(Count){
          this.selectedCount = Count;

      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
    position: relative;
    .now_price{
        font-size: 16px;
        color: red;
        font-weight: bold;

    }
    .mui-card-footer{
        display: block;
        button{
            margin: 15px 0;
        }
    } 
    .ball{
        display: block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        top: 350px;
        left: 148px;
        z-index: 99;
    }
}

</style>

