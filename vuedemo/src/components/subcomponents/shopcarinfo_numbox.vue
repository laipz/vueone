<template>
    <div class="mui-numbox" data-numbox-min='1' style="height:25px"> 
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChange" ref="number" readonly/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from '../../../static/dist/js/mui.min.js'
export default {
    mounted(){
        mui(".mui-numbox").numbox()
    },
    methods: {
        countChange(){
            this.$store.commit("updateGoodsInfo",{
                id:this.goodsid,
                count: this.$refs.number.value

            })
        }
    },
    props: ["initcount","goodsid"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>