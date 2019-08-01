<template>
  <div class="ImageTextContainer">
    <h3>{{ info.title }}</h3>

    <hr>

    <div class="content" v-html="info.content"></div>
  </div>
    
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      info: {}
    }
  },
  created() { 
    this.getImageText()
  },
  methods: {
      getImageText(){
            this.$http.get("api/seller").then(result => {
                if(result.body.errno === 0){
                    this.info = result.body.data.ImageText[this.id]
                } else{
                }
            })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.ImageTextContainer{
    padding: 4px;
    h3{
        font-size: 16px;
        color: #226aff;
        text-align: center;
        margin: 15px 0;
    }
}

</style>