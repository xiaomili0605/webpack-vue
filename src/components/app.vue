<template>
  <div>
    <div class="box1">
      <router-link to="/list" tag="button">去列表</router-link>
      <router-link to="/home" tag="button">去首页</router-link>
    </div>

    <div>
      <!-- app.vue 中一般用来写router-view 和导航，或者导航菜单的-->
      <router-view></router-view>
    </div>
  </div>
</template>



<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Hello world"
    };
  }
};
</script>



<style scoped>
/* scoped 表示样式只在当前组件生效 */
div{
    float: left;
    top: 0;
    left: 0;
    margin: 10px;
}
.box1 {
    width: 200px;
    height: 500px;
    border: 1px solid lightblue;
}

div:nth-child(2) {
    width: 300px;
    height: 500px;
    border: 1px solid red;
    float: right;
}
</style>