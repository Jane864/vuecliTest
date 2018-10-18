<template>
  <div id="app">
    <!-- 关于路由中用url传值 -->
    <div><img src="./assets/logo.png"></div>
    <div>
      <button @click="Goahead">Goahead</button>
      <button @click="Goback">Goback</button>
      <button @click="Gohome">Gohome</button>
    </div>
    <router-link to="/">首页</router-link> |     
    <router-link to="/params/53/This is a very excellent page">Params页面</router-link> |
    <router-link to="/goParams/542/This is a renew page">新的Params页面</router-link> |
    <router-link to="/goHome"> 返回</router-link> |   
    <router-link to="/rth1"> hi1别名</router-link> |   
    <router-link to="/null"> null</router-link> |  
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- <router-view name="left" style="float:left;background:#ccc;width:50%;height:300px;"></router-view>
    <router-view name="right" style="float:left;background:green;width:50%;height:300px;"></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    Goback:function(){
      this.$router.go(-1);
    },
    Goahead:function(){
      this.$router.go(1);
    },
    Gohome:function(){
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave{
  opacity:0;
}
.fade-leave-active{
  transition:opacity .5s;
}
</style>
