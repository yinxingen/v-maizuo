
<template>
    <div class="app-film-item">
        <img v-lazy="info.poster.thumbnail"/>
        
        <div class="info">
        	<h5>{{info.name}}</h5>
        	<p>{{info.intro}}</p>
        	<p v-if='type=="now-playing"'>{{info.cinemaCount}}家影院上映 {{info.watchCount}}人购票</p>
        	<p class='date' v-else>{{info.premiereAt | formatDate}}  {{info.premiereAt |formatDay}} </p>
        </div>
        
        <div class="other">
        	<span class="range" v-if='type=="now-playing"'>{{info.grade}}</span>
        	<i class="fa fa-angle-right"></i>
        </div>
    </div>
</template> 

<script>
    export default {
        name:'app-film-item',
        props:['info','type']
    }
</script>
<style lang='scss' scoped>
	.app-film-item{
		padding: 20px 0px;
		display: flex;align-items: stretch;
		    border-bottom: dashed 1px #c9c9c9;
		img{
			width: 0.6rem;
			height: 0.825rem;
		}
		.info{
			padding-left:15px;
			flex-grow: 1;
			display: flex;flex-flow: column;justify-content: space-around;
			
			h5{font-size: 16px;color: #000;}
			p{
				font-size: 12px;color: #8e8e8e;
			}
			.date{
				color: #ffb375;
			}
		}
		.other{
			padding-right: 20px;
			.range{
				font-size: 16px;
			    color: #fc7103;
			}
			
		}
	}
</style>
