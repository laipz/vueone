<template>
  <div>
    <cmt-box :id="$route.params.id"></cmt-box>
  </div>
    
</template>

<script>
import comment from '@/components/subcomponents/comment'
export default {
  components:{
      'cmt-box': comment
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>

