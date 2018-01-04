<template>
  <div class="app-good-car-item">
      <input v-model="info.isSelected" type="checkbox">
      <div class="info-box">
        <h5>{{info.title}}</h5>
        <br>
        <p>￥{{info.price}}</p>
      </div>
      <div class="control-box">
          <p>
            <button @click="reduceGood({id:info.id})">-</button>
            <span>{{info.num}}</span>
             <button @click="addGood({id:info.id,price:info.price,title:info.title})">+</button>
          </p>
          <p><button @click="removeGood(info.id)">移除</button></p>
      </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  props:['info'],
  name:'app-good-car-item',
  methods:{
    ...mapActions(['addGood','reduceGood','removeGood'])
  }
}
</script>
<style lang="scss" scoped>
  .app-good-car-item{
    display: flex;justify-content: space-between;align-items: center;
    padding: 0px 15px;
    border-bottom: 1px solid #c5c5c5;
    .info-box{
      flex-grow: 1;
      padding-left:0.3rem;
      // display: flex;
      // flex-wrap: nowrap;
      h5,p{
        margin: 0;
      }
    }
  }
</style>


