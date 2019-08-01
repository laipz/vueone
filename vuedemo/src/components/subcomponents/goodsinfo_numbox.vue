<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChange" ref="number"/>
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
            this.$emit("getCount",parseInt(this.$refs.number.value))
        }

    },
    props: ["max"],
    watch:{
        'max': function(newVal,oldVal){
            mui(".mui-numbox").numbox().setOption('max',newVal)

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>