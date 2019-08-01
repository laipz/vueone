<template>
  <div class="newsinfo-container">
      <H3 class="title">{{ newsinfo.title}}</H3>
      <p class="subtitle">
          <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span> 
          <span>点击：{{ newsinfo.click}}次</span>       
      </p>     

      <hr> 

      <div class="content" v-html="newsinfo.content"></div>

      <comment-box :id="this.id"></comment-box>
  </div> 
</template>

<script>
import comment from '@/components/subcomponents/comment'

export default {
    data(){
        return {
            id: this.$route.params.id,
            newsinfo: {},
        }
    },
    created() {
        this.getNewsInfo()
    },
    methods: {
        getNewsInfo(){
            this.$http.get("api/news").then(result => {
                if(result.body.errno === 0){
                    this.newsinfo =result.body.data[this.id] 
                } else{
                    console.log(result.body.data)
                }
            })
        }
    },
    components:{
        "comment-box": comment

    }

}





</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.newsinfo-container{
    padding: 0 4px; 
    .title{
        text-align: center;
        font-size: 16px;
        margin: 15px 0;
        color: red;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        color: #226aff;
    }
}

</style>

