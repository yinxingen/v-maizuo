
<template>
    <div class="app-main-movie-item ">
      <img width="100%" v-lazy='film.cover.origin' alt="" srcset="">

        <div class="info">
            <div class="left">
            	<h5>{{film.name}}</h5>
            	<p>{{film.cinemaCount}}家影院上映 {{film.watchCount}}人购票</p>
            </div>
            <div class="right">
            	<div class="range" v-if='film.cinemaCount'>{{film.grade}}</div>
            	<div class="show-date" v-else>{{film.premiereAt | formatDate}} </div>
            </div>
        </div>
    </div>
</template> 

<script>

import axios from 'axios'
export default {
    name:'app-main-movie-item',
    props:['film'],
    data:function(){
        return {
            
        }
    }
    
}

</script>
<style lang="scss" scoped>
	.app-main-movie-item {
	    margin: 0 17px 17px 17px;
	    background-color: #f9f9f9;
	    -webkit-box-shadow: 0.5px 0.5px 1px #a8a8a8;
	    -moz-box-shadow: 0.5px 0.5px 1px #a8a8a8;
	    box-shadow: 0.5px 0.5px 1px #a8a8a8;
	    cursor: pointer;
	    
	    .info {
	    	display:flex;
	    	justify-content:space-between;
	    	align-items: center;
	    	padding:10px;
	    	h5,p{
	    		font-size: 12px;
	    	}
	    	p{
	    		color: #9a9a9a;
	    	}
	    	.range{
	    		color: #f78360;
	    		font-size: 18px;
	    	}
	    	.show-date{
	    		width: 1rem;
    		    font-size: 10px;
			    color: RGB(245, 162, 125);
			    padding-right: 0;
			    padding-top: 10px;
			    padding-left: 28px;
	    	}
	    }
	}
</style>
