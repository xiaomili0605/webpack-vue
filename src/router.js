/* 
    src目录下的router.js，一般是配置路由映射表；也有人喜欢在src目录下写个router文件，里面写个index.js也是配置路由映射表
    在这里配置路由映射表，导出VueRouter实例
    路由映射表是路由和组件的映射关系，所以在这里，我们把组件都导入进来
*/ 

import home from './components/home.vue';
import list from './components/list.vue';
import VueRouter from 'vue-router'; // vue-router已经按照在node_modules中，使用npm或yarn安装的

import Vue from 'vue';
// 同在页面中使用script标签引入不同的地方
Vue.use(VueRouter); // 调用Vue.use(VueRouter) 使用VueRouter

let routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/list',
        component: list
    },

]

export default new VueRouter({
    routes
})