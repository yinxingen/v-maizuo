<template>
  <div class="app-good-item">
    <p> {{good.title}} &nbsp;&nbsp; ￥{{good.price}} </p>

    <button @click="addGood({id:good.id,price:good.price,title:good.title})">加入购物车</button>

  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  props:['good'],
  name:'app-good-item',
  methods:{
    ...mapActions(['addGood'])
  }
}
</script>
<style scoped>
  .app-good-item{
    display: flex;justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    border-bottom:1px solid #f7f7f7;
  }
</style>

