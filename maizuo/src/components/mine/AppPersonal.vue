
<template>
    <div class="app-personal">
        {{user_info.username}}-- <button @click="exit">exit</button>
    </div>
</template> 

<script>
	import {mapState} from 'vuex'
    export default {
        name:'app-personal',
        computed:mapState(['user_info']),
        methods:{
        	exit(){
        		this.$store.commit('exit')
        		this.$router.replace({name:'login'})
        	}
        }
    }
</script>
<style lang="scss" scoped>

    .app-personal{
       
    }

</style>
