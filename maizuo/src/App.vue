<template>
  <div id="app">
    <app-header :toggleNav='toggleNav'></app-header>   
    <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
      <app-nav  :toggleNav='toggleNav' v-if="isNavShow"></app-nav>
    </transition>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div @click="toggleNav" v-if="isNavShow" class="mask"></div>
    </transition>
    
    <keep-alive include='app-main'>
    	<router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
import AppHeader from './components/header/AppHeader'
import AppNav from './components/nav/AppNav'
export default {
  name: 'app',
  data:function() {
    return {
      isNavShow:false
    }
  },
  methods:{
    toggleNav(){
      this.isNavShow = !this.isNavShow
    }
  },
  components:{AppHeader,AppNav}

}

</script>

<style lang="scss">
  @import './styles/app.scss';

  .mask{
    width: 100%;height: 100%;
    background: rgba(0,0,0,0.2);
    position: fixed;left: 0;top: 0;
    z-index: 498;
    animation-duration: 0.5s;
  }

</style>

