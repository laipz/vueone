<template>
    <div>
        <!-- 顶部滑动条 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item ', item.id==0 ? 'mui-active' : '']" v-for="item in photolist" :key="item.id"  @click="getList(item.id)"> 
                        {{ item.title }}
                    </a>
                </div>
            </div>

        </div>
        <!-- 底部列表 -->
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" tag="li" :to="'/home/photoinfo/' + item.id">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info_title"> {{ item.title }} </h1>
                    <div class="info_body">{{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul>
    </div>    
</template>

<script>
import mui from '../../../static/dist/js/mui.min.js'



export default {
  data () {
    return {
        photolist:[],
        list: []
    }
  },
  created() { 
    this.getPhotoList();
    this.getList(0)
  },
  mounted(){
      mui('.mui-scroll-wrapper').scroll({
            scrollX: true,
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
  },
  methods:{
       getPhotoList() {
            this.$http.get("api/seller").then(result => {
                if(result.body.errno === 0){
                    result.body.data.photolist.unshift({"id":"0","title": "全部"})
                    this.photolist = result.body.data.photolist
                    //  console.log(result.body.data.photolist)
                } else{
                    console.log(result.body.data.photolist)
                }
            })
        },
        getList(id){
            this.$http.get("api/seller").then(result => {
                if(result.body.errno === 0){
                    this.list =result.body.data.list[id]
                } else{
                    console.log(result.body.data)
                }
            })
        }
      

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
*{
    touch-action: pan-y;
}

.photo-list{
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0; 
    li {
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 9px #999;
        position: relative;
        img{
            width: 100%;
            vertical-align: middle;
        }
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }

        .info{
            width: 100%;
            max-height: 84px;
            color: white;
            text-align: left;
            position: absolute;
            bottom: 0;
            background-color:rgba(0, 0, 0, 0.4);
            .info_title{
                font-size: 14px;

            }
            .info_body{
                font-size: 13px;

            }
        }
    }
}

</style>