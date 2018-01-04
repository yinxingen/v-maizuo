<template>
  <div class="app-good-car app-box">
      <div class="item-list">
        
        <p v-if="!car.length">空空如也，快去购买吧</p>
        
        <AppGoodCarItem v-else v-for="item in car" :key='item.id' :info='item'></AppGoodCarItem>
      </div>
      
      <AppGoodCarNav></AppGoodCarNav>
  </div>
</template>
<script>
import AppGoodCarItem from './AppGoodCarItem'
import AppGoodCarNav from './AppGoodCarNav'
import {mapState,mapActions} from 'vuex'
export default {
  name:'app-good-car',
  components: {
    AppGoodCarNav,AppGoodCarItem
  },
  computed:{
    ...mapState(['car'])
  },
  methods:{
    ...mapActions(['initCar'])
  },
  created(){
    //初始化
    this.initCar()
  }
}
</script>
<style lang="scss" scoped>
  .app-good-car{
    height: 100%;
    display: flex;flex-direction: column;
    justify-content: space-between;
  }
</style>


