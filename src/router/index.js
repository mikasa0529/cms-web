import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/components/index";
import HotIndex from "@/components/menu/hot/HotIndex";
import TopicIndex from "@/components/menu/topic/TopicIndex";
import BooksIndex from "@/components/menu/books/BooksIndex";
import ActivityIndex from "@/components/menu/activity/ActivityIndex";
import HomePageIndex from "@/components/menu/homePage/Index";

//推荐
import RecommendManagementIndex from "@/components/menu/homePage/recommend/RecommendManagementIndex";

//前端
import HtmlManagementIndex from "@/components/menu/homePage/frontEnd/HtmlManagementIndex";
import CssManagementIndex from "@/components/menu/homePage/frontEnd/CssManagementIndex";
import VueManagementIndex from "@/components/menu/homePage/frontEnd/VueManagementIndex";
import NodeManagementIndex from "@/components/menu/homePage/frontEnd/NodeManagementIndex";

//后端
import JavaManagementIndex from "@/components/menu/homePage/backEnd/JavaManagementIndex";
import SpringManagementIndex from "@/components/menu/homePage/backEnd/SpringManagementIndex";
import NettyManagementIndex from "@/components/menu/homePage/backEnd/NettyManagementIndex";
import OracleManagementIndex from "@/components/menu/homePage/backEnd/OracleManagementIndex";

//IOS
import IosManagementIndex from "@/components/menu/homePage/ios/IosManagementIndex";

//人工智能
import AiManagementIndex from "@/components/menu/homePage/Ai/AiManagementIndex";

//开发工具
import IdeManagementIndex from "@/components/menu/homePage/ide/IdeManagementIndex";

//代码人生
import CodeLifeManagementIndex from "@/components/menu/homePage/codeLife/CodeLifeManagementIndex";

//阅读
import ReadManagementIndex from "@/components/menu/homePage/read/ReadManagementIndex";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
        path: "/",
        name: "HomePageIndex",
        component: HomePageIndex,
        children: [{
          path: "/recommended",
          name: "HomePageIndex",
          component: HomePageIndex,
        },{
          path: "/recommend",
          name: "RecommendManagementIndex",
          component: RecommendManagementIndex,
        },{
          path:'/html',
          name:'HtmlManagementIndex',
          component: HtmlManagementIndex
        },{
          path:'/css',
          name:'CssManagementIndex',
          component: CssManagementIndex
        },{
          path:'/vue',
          name:'VueManagementIndex',
          component: VueManagementIndex
        },{
          path:'/node',
          name:'NodeManagementIndex',
          component: NodeManagementIndex
        },{
          path:'/java',
          name:'JavaManagementIndex',
          component: JavaManagementIndex
        },{
          path:'/spring',
          name:'SpringManagementIndex',
          component: SpringManagementIndex
        },{
          path:'/netty',
          name:'NettyManagementIndex',
          component: NettyManagementIndex
        },{
          path:'/Oracle',
          name:'OracleManagementIndex',
          component: OracleManagementIndex
        },{
          path:'/ios',
          name:'IosManagementIndex',
          component: IosManagementIndex
        },{
          path:'/ai',
          name:'AiManagementIndex',
          component: AiManagementIndex
        },,{
          path:'/ide',
          name:'IdeManagementIndex',
          component: IdeManagementIndex
        },{
          path:'/codeLife',
          name:'CodeLifeManagementIndex',
          component: CodeLifeManagementIndex
        },{
          path:'/read',
          name:'ReadManagementIndex',
          component: ReadManagementIndex
        }]
      },{
        path: "/hot",
        name: "HotIndex",
        component: HotIndex,
        children: []
      },{
        path: "/topic",
        name: "TopicIndex",
        component: TopicIndex,
        children: []
      },{
        path: "/books",
        name: "BooksIndex",
        component: BooksIndex,
        children: []
      },{
        path: "/activity",
        name: "ActivityIndex",
        component: ActivityIndex,
        children: []
      }]
    },
  ]
})
