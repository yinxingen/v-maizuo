<template>
  <div class="app-good-car-nav">
      <p>

        <input v-model="isAllSelected" type="checkbox">

        <span>
          总计：{{money}}
        </span>
      </p>
      <div class="settle">
        去结算
      </div>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name:'app-good-car-nav',
  computed:{
    ...mapGetters(['money','isAllSelected']),
    isAllSelected:{
      get(){
        return this.$store.state.car.every(item => {
            if(item.isSelected){
               return true
            }else{
                return false
            }           
        });
      },
      set(newValue){
        this.seleteGood(newValue)
        console.log('gaile')
      }
    }
  },
  methods:{
    ...mapActions(['seleteGood'])
  }
}
</script>
<style scoped lang='scss'>

.app-good-car-nav{
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 15px;
  border-top: 1px solid #f7f7f7;
  p{
    flex-grow: 1;flex-shrink: 1;
    margin: 0;
  }

  .settle{
    width: 1rem;
    height: 100%;
    background: #f60;
    color: #fff;
    text-align: center;line-height: 50px;
  }
}

</style>

