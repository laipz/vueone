<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img" :alt="item.img" :class="{full:isfull}" >
      </mt-swipe-item>
    </mt-swipe>
  </div>
    
</template>

<script>
export default {
    props: ["lunbotuList","isfull"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.mint-swipe{
  height: 200px;
  .mint-swipe-item {
      text-align: center;
   
    img {
    //   width: 100%;
      height: 100%;
    }

    .mui-media-body{
      font-size: 13px;
    }

    

  }
  
}

.full{
    width: 100%;
}

</style>

