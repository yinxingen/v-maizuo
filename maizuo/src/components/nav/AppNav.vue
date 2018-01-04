
<template>
    <div class="app-nav">
        <nav>
            <ul>
                <li @click="turnout(nav.name)" :key = 'nav.id' v-for="nav in navs">{{nav.content}} <i class="fa fa-angle-right"></i></li>
            </ul>           
        </nav>
    </div>
</template> 

<script>
    export default {
        name:'app-nav',
        props:['toggleNav'],
        data:function(){
            return {
                navs:[
                    {id:1,content:'首页',name:'main'},
                    {id:2,content:'影片',name:'film'},
                    {id:3,content:'影院',name:'main'},
                    {id:4,content:'我的',name:'main'},
                    {id:5,content:'商品列表',name:'good-list'},
                    {id:6,content:'购物车',name:'good-car'}
                ]
            }
        },
        methods:{
            turnout(name){
               this.$router.push({name})
               this.toggleNav()
            }
        }
    }
</script>
<style lang="scss">

    .app-nav{
        animation-duration: 0.5s;
        width: 2.65rem;
        height: 100%;
        padding-top: 0.5rem;
        position: fixed;
        left: 0;top: 0;
        z-index: 499;

        nav{
            width: 100%;
            height: 100%;
            border-top: 1px solid #222;
            box-shadow: 0 1px 1px #363636 inset;
            background: #282828;
        }

        li{
            display: flex;justify-content: space-between;align-items: center;
            width: 100%;
            padding: 0 16px;
            border-bottom: 1px dotted #333;
            height: 0.5rem;
            color: #9a9a9a;
            font-size: 14px;
        }
    }

</style>
