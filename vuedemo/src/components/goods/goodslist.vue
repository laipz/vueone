<template>
  <div class="goods-list">

      <div class="goods-item" v-for="item in goodslist" :key = "item.id" @click="goDetail(item.id)">
          <img :src=" item.img_url " alt="">
          <h1 class="title">{{ item.title }}</h1>
          <div class="info">
              <p class="price">
                  <span class="now">¥{{ item.sell_price }}</span>
                  <span class="old">¥{{ item.market_price }}</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩下 {{ item.stock_quantity }}件</span>
              </p>
          </div>
      </div>

    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>

  
    
</template>

<script>
export default {
  data () {
    return {
        pageindex: 1,
        goodslist: []
    }
  },
  created() {
        this.getGoodsList()
    },
    methods: {
        getGoodsList(){
            this.$http.get("api/seller").then(result => {
                if(result.body.errno === 0){
                    this.goodslist=this.goodslist.concat(result.body.data.getgoods[parseInt(this.pageindex)])
                } else{
                    console.log(result.body.data)
                }
            })
        },
        getMore(){
            this.pageindex++
            this.getGoodsList()
        },
        goDetail(id){
            this.$router.push({ name: 'GoodsInfo', params: { id } })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between; 
        
        .goods-item{
            width: 49%;
            margin: 4px 0;
            padding: 2px;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;
            img{
                width: 100%;
            }
            .title{
                font-size: 14px;
            }
            .info{
                background-color: #eee;
                width: 100%;
                p{
                    margin: 0;
                    padding: 5px;
                }; 
                .price{
                    .now{
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                    
                }
                .sell{
                    display: flex;
                    justify-content: space-between; 
                    font-size: 13px;

                }

            }
        }
    }
</style>

