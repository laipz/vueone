import Vue from 'vue'
import Router from 'vue-router'

import HomeContainer from '@/components/HomeContainer'
import MemberContainer from '@/components/MemberContainer'
import SearchContainer from '@/components/SearchContainer'
import ShopcarContainer from '@/components/ShopcarContainer'
import NewsList from '@/components/news/NewsList'
import NewsInfo from '@/components/news/NewsInfo'
import PhotoList from '@/components/photos/PhotoList'
import PhotoInfo from '@/components/photos/PhotoInfo'
import GoodsList from '@/components/goods/goodslist'
import GoodsInfo from '@/components/goods/goodsinfo'
import goComment from '@/components/goods/Comment'
import goImageText from '@/components/goods/ImageText'


Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/',
      redirect: '/home'
    },
    { 
        path: '/home',
        name: 'HomeContainer', 
        component: HomeContainer
      },
      { 
        path: '/member',
        name: 'MemberContainer', 
        component: MemberContainer
      },
      { 
        path: '/shopcar', 
        name: 'ShopcarContainer', 
        component: ShopcarContainer
      },
      { 
        path: '/search', 
        name: 'SearchContainer', 
        component: SearchContainer
      },
      { 
        path: '/home/newslist', 
        name: 'NewsList', 
        component: NewsList
      },
      { 
        path: '/home/newsInfo/:id', 
        name: 'newsInfo', 
        component: NewsInfo
      },
      { 
        path: '/home/photolist', 
        name: 'PhotoList', 
        component: PhotoList
      },
      { 
        path: '/home/photoinfo/:id', 
        name: 'PhotoInfo', 
        component: PhotoInfo
      },
      { 
        path: '/home/goodslist', 
        name: 'GoodsList', 
        component: GoodsList
      },
      { 
        path: '/home/goodsinfo/:id', 
        name: 'GoodsInfo', 
        component: GoodsInfo
      },
      { 
        path: '/home/ImageText/:id', 
        name: 'ImageText', 
        component: goImageText
      },
      { 
        path: '/home/Comment/:id', 
        name: 'Comment', 
        component: goComment
      },
  ],
  //c6 覆盖默认的路由高亮的类，默认的类叫做router-link-active.   APP.vue中mui-active需要删除
  linkActiveClass:'mui-active'
})
