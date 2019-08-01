<template>
  <div class="photoinfo-container">
    <h3>{{ imageInfo.title }}</h3>
    <p class="subtitle">
        <span>发表时间： {{ imageInfo.add_time | dateFormat}}</span>
        <span>点击: {{ imageInfo.click }}次</span>
    </p>

    <hr>

    <!-- 缩略图区域 -->
    <div class="thumbs">     
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>

    <!-- 图片文字内容区域 -->
    <div class="content" v-html="imageInfo.content"></div>

    <!-- 评论区域 -->
    <cmt-box :id="id"></cmt-box>
  </div>
    
</template>

<script>
import comment from '@/components/subcomponents/comment'
export default {
  data () {
    return {
        id: this.$route.params.id,
        imageInfo: [],
        slide1: []
    }
  },
  created() { 
    this.getPhotoInfo(),
    this.getThumbs()
  },
  components:{
      'cmt-box': comment
  },
  methods: {
      getPhotoInfo(){
        //   console.log(this.id)

          this.$http.get("api/seller").then(result => {
                if(result.body.errno === 0){
                    this.imageInfo =result.body.data.imageInfo[this.id]
                    // console.log(this.imageInfo)
                } else{
                    console.log(result.body.data)
                }
            })

      },
      getThumbs(){
            this.$http.get("api/seller").then(result => {
                if(result.body.errno === 0){
                    result.body.data.getthumimages[parseInt(this.id)].forEach( item => {
                        item.alt = 'picture2';
                        item.title = 'Image Caption 2';
                        item.w = 600;
                        item.h = 400;
                    });
                    this.slide1 = result.body.data.getthumimages[parseInt(this.id)]
                    // console.log(this.slide1)
                    // result.body.data.getthumimages
                } else{
                    console.log(result.body.data)
                }
            })
      },
      handleClose () {
        console.log('close event')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.photoinfo-container{
    padding: 3px;
    h3{
        color: #26A2FF;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }
    .my-gallery{
        // overflow: hidden!important;
        // position: relative!important;
        // width: 100%!important;
        box-sizing : border-box!important;
        width: 100%!important;
        padding: 0!important;
        margin: 0!important;
        display: -webkit-flex!important;
        display: flex!important;
        -webkit-flex-wrap: wrap!important;
        flex-wrap: wrap!important;
        figure{
            display: block!important;
            box-sizing : border-box!important;
            margin: 0 0 5px 1%!important;
            width: 32%!important;
            img{
                width: 100%!important;
            }
        }
    }
}
.thumbs{
    width: 100%!important;
}
</style>

