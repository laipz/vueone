<template>
  <div class="shopcar-container">
    <div class="goods-list">

      <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch
             v-model="$store.getters.getGoodsSelected[item.id]"
             @change="SelectedChange(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
            <img :src="item.src" alt="">
            <div class="info">
            <h1>{{item.title}}</h1>
              <p>
                <span class="price">¥{{item.sell_price}}</span>
                <shopcarinfo :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></shopcarinfo>
                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>
    
					</div>
				</div>
			</div>

    </div>

    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品<span class="red">{{ $store.getters.getGoodsCountandAmount.count }}</span> 件，总价<span class="red">¥{{$store.getters.getGoodsCountandAmount.amount }}</span></p>
            </div>
            <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
		</div>
  </div>
    
</template>

<script>
import shopcarinfo_numbox from '@/components/subcomponents/shopcarinfo_numbox'
export default {
  data () {
    return {
      goodslist:[]
    }
  },
  components:{
      'shopcarinfo': shopcarinfo_numbox
  },
  created() { 
    this.getShopCar();
  },
  methods: {
    getShopCar() {
      var getShopCar = []
      this.$store.state.car.forEach( item => getShopCar.push(item.id))
      if( getShopCar.length <= 0 ){
        return
      }
      this.$http.get("api/seller").then(result => {
        for(var i = 0; i < getShopCar.length;i++){
            const j = getShopCar[i]
            this.goodslist.push(result.body.data.getshopcar[j])            
        }
          // this.goodslist = result.body.data.getshopcar
      })
    },
    remove(id,index){
      this.goodslist.splice(index,1);
      this.$store.commit("removeFromCar",id)
      

    },
    SelectedChange(id,val){
      this.$store.commit("updateGoodsSelected",{ id, selected:val })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.shopcar-container{
  background-color: #eee;
  overflow: hidden;
  .mui-card-content-inner{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .goods-list{
    img{
      width: 60px;
      height: 60px;
    }
    h1{
      font-size: 13px;
    }
    .info{
      display: flex;
      flex-direction: column;
      // margin-left: 10px;
      .price{
        color: red;font-weight: bold;
      }
    }
  }
  .jiesuan{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red{
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>

