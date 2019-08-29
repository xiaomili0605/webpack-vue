/* 
    main.js 是Vue页面的主入口
    components 下面放的都是.vue文件，一个文件就是一个组件
    这个js主意的任务就是创建Vue实例

    现阶段目标：main.js  app.vue  router.js  这三者是如何联系起来的
    main.js是创建一个vue实例，最终只把app.vue这个组件挂载到DOM节点上；而app.vue中有router-view，而router-view可以根据路由展示组件；组件通过路由映射表和路由关联起来，最后把路由映射表传给new VueRouter;

    最后把VueRouter的实例传给Vue的实例
*/
import App from './components/app.vue';
import Vue from 'vue';
import router from './router';

// 创建Vue实例
new Vue({
    el: '#app',
    render: (h) => h(App), // h是createElement方法，render函数是用来替代template属性的，webpack配置vue的时候不能使用template
    router
})
