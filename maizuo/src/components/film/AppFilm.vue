
<template>
    <div class="app-film app-box">
        <AppFilmNav></AppFilmNav>
        <AppFilmBox></AppFilmBox>
        <BackTop v-back-top v-scroll-show:300='isBackShow' :isShow='isBackShow'></BackTop>
    </div>
</template> 

<script>
	import BackTop from '../common/back-top/BackTop'
	import AppFilmNav from './AppFilmNav'
	import AppFilmBox from './AppFilmBox'
    export default {
        name:'app-film',
        components:{AppFilmNav,AppFilmBox,BackTop},
        data(){
        	return {
        		isBackShow:{value:false}
        	}
        }
    }
</script>
<style lang="scss" scoped>
	.app-film{
		padding-left: 15px;
		padding-right: 15px;
		/*height: 100%;
		background: #fff;*/
	}
</style>
