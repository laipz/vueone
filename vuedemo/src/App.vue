<template>
  <div id="app" class="app-container">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <!-- <mybtn>jie</mybtn>
    <button type="button" class="mui-btn mui-btn-royal">
					紫色
		</button> -->
		<!-- b1 顶部header区域导入mint-ui中的header组件 -->
    <mt-header fixed title="赖沛钊vue项目起步">
		<span slot="left" @click="goBack" v-show="newval">
			<mt-button icon="back">返回</mt-button>
		</span>
	</mt-header>


		<transition>
			<router-view></router-view>
		</transition>


		<!--c1 导入mui中的tabbar.html代码块 -->
		<!-- c3 导入mui中icons图标类名 main.js中图标导入css样式 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-lpz" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-lpz" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-lpz" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span id="badge" class="mui-badge">{{ $store.getters.getAllCount }}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-lpz" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  data () {
		return {
			newval: true
		}
  },
  created() { 
	  this.newval = this.$route.path === "/home" ? false : true;
  },
  methods: {
	  goBack(){
		  this.$router.go(-1)
	  }
  },
  watch:{
	  '$route.path':function(newVal){
		  if(newVal === '/home'){
			  this.newval = false
		  }else{
			  this.newval = true
		  }
	  }
  }
}
</script>

<style scoped>
.mint-header{
	z-index: 99;
}
/* 处理header组件造成布局问题 */
  .app-container{
  padding-bottom: 50px;
  padding-top: 40px;
	/* 处理tabbar栏滚动条 */
	overflow-x: hidden;
 
}

/* 动画 */
.v-enter{
	opacity: 0;
	transform: translateX(100%);
	/* 处理动画上下浮动问题 */
	/* position: absolute; */
}

.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	/* 处理动画上下浮动问题 */
	position: absolute;
}

.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}

.mui-bar-tab .mui-tab-item-lpz.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-lpz {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-lpz .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-lpz .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

