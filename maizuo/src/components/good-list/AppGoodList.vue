<template>
  <div class="app-good-list app-box">
      <AppGoodItem :good = "good" v-for="good in goods" :key="good.id"></AppGoodItem>
  		
  		<!--<Dropdown style="margin-left: 20px">
        <Button type="primary">
            下拉菜单
            <Icon type="arrow-down-b"></Icon>
        </Button>
        <DropdownMenu slot="list">
            <DropdownItem v-for="(food,i) of foods" :key='i'>{{food}}</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    -->
    <!--<Button type="primary" @click="modal1 = true">Display dialog box</Button>
    <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>-->
    
    <!--<el-date-picker
      v-model="date"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  	{{date}}
  	
  	<hr />
  	<mt-button @click.native='isBottomShow = !isBottomShow' type="danger" size='small'>popup</mt-button>
  	<mt-popup
		  v-model="isBottomShow"
		  position='bottom'
		  >
		  <div class="pop"></div>
		</mt-popup>-->
  </div>
</template>
<script>
import axios from 'axios'
import AppGoodItem from './AppGoodItem'
export default {
  name:'app-good-list',
  components:{AppGoodItem},
  data(){
      return {
      	modal1:false,
      	isBottomShow:false,
      	date:null,
          goods:[],
          foods:['驴打滚','刀削面','豆腐干']
      }
  },
  methods:{
     getGoods(){
         let that = this
         axios.get('/static/json/goods.json').then((res)=>{
             that.goods = res.data
         })
     },
     ok () {
        this.$Message.info('Clicked ok');
    },
    cancel () {
        this.$Message.info('Clicked cancel');
    }
  },
  created(){
      this.getGoods()
  }
}
</script>
<style>

</style>

