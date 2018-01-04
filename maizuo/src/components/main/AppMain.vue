
<template>
    <div class="app-main app-box">
        <app-banner></app-banner>
        <AppMovieBox :info="url" v-for="(url,i) in urls" :key='i'></AppMovieBox>
    	
    	<BackTop v-back-top v-scroll-show:300='isBackShow' :isShow='isBackShow'></BackTop>
    
    </div>
</template> 

<script>
import AppMovieBox from './AppMovieBox'
import AppBanner from './AppBanner'
import BackTop from '../common/back-top/BackTop'
    export default {
        name:'app-main',
        data(){
        	return {
        		urls:[
        			{title:'正在热映',url:'/mz/v4/api/film/now-playing?__t='+Date.now()+'&page=1&count=5'},
        			{title:'即将上映',url:'/mz/v4/api/film/coming-soon?__t='+Date.now()+'&page=1&count=3'}
        		],
        		isBackShow:{value:false}
        	}
        },
        components: {
            AppBanner,AppMovieBox,BackTop
        }
    }
</script>
<style >

</style>
