
<template>
    <div class="app-header">
        <div class="nav square" @click="toggleNav">
            <i class="fa fa-navicon"></i>
        </div>
        <div class="info-box">
           <div class="title">{{global_title}}</div> 
           <div class="info">
               <router-link :to="{name:'position'}" class="city">
                   {{city}} <i class="fa fa-sort-down"></i>
               </router-link>
               <div class="user square">
                   <i class="fa fa-user-circle"></i>
               </div>
           </div>
        </div>
    </div>
</template> 

<script>
	
	import {mapState,mapActions} from 'vuex'
    export default {
        props:['toggleNav'],
        name:'app-header',
        computed:{
        	...mapState(['city','global_title'])
        },
        methods:{
        	...mapActions(['getPosition'])
        },
        mounted(){
        	//开始定位
        	this.getPosition()
        }
    }
</script>
<style  lang='scss'>
    .app-header{
            background: #282828;
            position: fixed;
            z-index: 500;
            top: 0;
            right: 0;
            left: 0;
            width: auto;
            height: 0.5rem;
            line-height: 0.5rem;
            overflow: hidden;

            display: flex;
            color:rgb(233, 233, 233);
            .square{
                width: 0.5rem;height: 0.5rem;display: flex;justify-content: center;align-items: center;
            }

            .nav{
                border-right: 1px solid rgb(85, 85, 85);
                flex-grow: 0;flex-shrink: 0;
            }

            .info-box{
                .title{
                    padding-left: 10px;
                }
                flex-grow: 1;
                display: flex;justify-content: space-between;align-items: center;
                
                .info{
                    display: flex;
                    
                    a{color: rgb(233, 233, 233);}
                }
            }
    }

</style>
