
<template>
    <div class="app-position app-box">
       
       <div class="title">
       	GPS定位你所在的城市
       </div>       
       <ul class="city-box">
       		<li class="city gps">{{city}}</li>
       </ul>
       
       
       <div class="title">
       		热门城市
       </div>
       <ul class="city-box">
       		<li class="city " @click='changeCity(hot)' v-for='(hot,i) in hots'>{{hot}}</li>
       </ul>      
    </div>
</template> 

<script>
	import {mapState,mapMutations} from 'vuex'
    export default {
        name:'app-position',
        data:function(){
            return {
                hots:['北京','上海','深圳','广州']
            }
        },
        computed:{
        	...mapState(['city'])
        },
        methods:{
        	...mapMutations(['getPosition']),
        	changeCity(city){
        		this.getPosition(city)
        		//跳转回main
        		this.$router.replace({name:'main'})
        	}
        }
    }
</script>
<style lang="scss" scoped>

    .title{
    	padding-left: 15px;
	    font-size: 14px;
	    line-height: 40px;
	    background-color: #ebebeb;
	    margin-top: -1px;
	
    }
    .city-box{
    	background: #fff;
    	overflow: hidden;
    }
    .city{
    	width: 25%;
	    font-size: 16px;
	    line-height: 46px;
	    text-align: center;
	    display: block;
	    float: left;
	    cursor: pointer;
	    color: #838383;
	    border-bottom: #ebebeb 1px solid;
	    
	    &.gps{
	    	color: #e2941a;
	    }
    }
</style>
