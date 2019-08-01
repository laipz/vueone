<template>
  <div>
    <!-- <div class="title">
				缩略图居左
			</div> -->
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newsinfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src= "item.img_url">
						<div class="mui-media-body">
							<h1>{{ item.title }}</h1>
							<p class='mui-ellipsis'>
								<span>{{ item.add_time | dateFormat }}</span>
								<span>点击：{{ item.click }}次</span>
							</p>
						</div>
					</router-link>
				</li>
				<!-- <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../images/muwu.jpg">
						<div class="mui-media-body">
							木屋
							<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../images/cbd.jpg">
						<div class="mui-media-body">
							CBD
							<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
						</div>
					</a>
				</li> -->

			</ul>
  </div> 
</template>

<script>
export default {
  data () {
    return {
		newslist:[]
    }
  },
  created() { 
    this.getNewsList();
  },
  methods: {
    getNewsList() {
    this.$http.get("api/seller").then(result => {
		if(result.body.errno === 0){
			// console.log(result.body.data.news)
			this.newslist = result.body.data.news
		} else{
			console.log(result.body.data.news)
		}
		// this.lunbotuList = result.body.data.supports
		// console.log(result.body.data.supports)
		// console.log(result.body.data.news)
		// console.log(1223)
      })
    }
  }
}





</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.mui-table-view{
  li{
    h1{
      font-size: 14px;
    }
    .mui-ellipsis{
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;

    }
  }
}
</style>

