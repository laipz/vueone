// 入口文件
// a1 导入vue
import Vue from 'vue'



// b2 按需导入mint-ui组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

// a2导入APP根组件
import App from './App'

//  c5  导入路由模块
import router from './router/index.js'
// import router from 'vue-router'

import moment from 'moment'
Vue.filter('dateFormat',function(str,pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(str).format(pattern)
})




// c2 导入mui代码块的样式
import '../static/dist/css/mui.css'


// d1 导入vue-resource
import VueResource from 'vue-resource'
// d2 安装vue-resource
Vue.use(VueResource)

Vue.http.options.root = 'https://laipz.github.io/vueone/';
// c4 导入mui代码块中字体图标
import '../static/dist/css/icons-extra.css'
Vue.config.productionTip = false

// import { Button, Swipe, SwipeItem, Lazyload } from 'mint-ui'
// Vue.use(Lazyload);
// Vue.component('mybtn', Button)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import VuePreview from 'vue-preview'
Vue.use(VuePreview)


import Vuex from 'vuex'

Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')

const store = new Vuex.Store({
  state: {
    car
  },
  mutations: {
    addToCar (state,goodsinfo) {
      var flag = false

      state.car.some(item =>{
        if(item.id == goodsinfo.id){
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })

      if(flag === false){
        state.car.push(goodsinfo)
      }

      localStorage.setItem('car',JSON.stringify(state.car))
    },

    updateGoodsInfo (state,goodsinfo) {

      state.car.some(item =>{
        if(item.id == goodsinfo.id){
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },

    removeFromCar (state,id) {

      state.car.some((item,i) =>{
        if(item.id == id){
          state.car.splice(i,1)
          return true
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },

    updateGoodsSelected(state,info) {

      state.car.some(item =>{
        if(item.id == info.id){
          item.selected = info.selected
          return true
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },

  },
  getters: {
    getAllCount(state){
      var c = 0;
      state.car.forEach(item =>{
        c+= item.count
      })
      return c


    },
    getGoodsCount(state){
      var o = {};
      state.car.forEach(item =>{
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected(state){
      var o = {};
      state.car.forEach(item =>{
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsCountandAmount(state){
      var o = {
        count: 0,
        amount: 0
      };
      state.car.forEach(item =>{
        if(item.selected){
          o.count += item.count;
          o.amount +=item.count*item.price
        }
      })
      return o
    }
    
  }
})
// a3 new出一个实例
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: c => c(App),
  store
})