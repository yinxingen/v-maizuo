
<template>
    <div class="app-main-movie-box ">
       <AppMovieItem :film='film' v-for="film in films" :key='film.id'></AppMovieItem>
       <div class="more-button">更多{{info.title}}电影</div>
    </div>
</template> 

<script>
import AppMovieItem from './AppMovieItem'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    name:'app-main-movie-box',
    props:['info'],
    data:function(){
        return {
            films:[]
        }
    },
    components:{AppMovieItem},
    computed:mapState(['city']),
    methods:{
    	getFilms(){
    		let that = this
    		axios.get(this.info.url,{
    			params:{city:this.city} 
    		}).then(res=>{
    			that.films = res.data.data.films
    		})
    	}
    },
    created(){
    	this.getFilms()
    }
    
}

</script>
<style lang='scss' scoped>
.app-main-movie-box {
	padding-top: 18px;
	
	.more-button{
		display: block;
	    width: 1.6rem;
	    height: 30px;
	    border: 1px solid #aaa;
	    border-radius: 15px;
	    margin: 10px auto 30px;
	    text-align: center;
	    line-height: 30px;
	    font-size: 12px;
	    color: #616161;
	    cursor: pointer;
	}
}
</style>
