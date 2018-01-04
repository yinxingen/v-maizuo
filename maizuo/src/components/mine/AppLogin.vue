
<template>
    <div class="app-login">
        <form @submit.prevent = 'login'>
        	<div class="form-group">
        		<input v-model="username" type="text" placeholder="输入手机号/邮箱"/>
        		<div class="input-bg"></div>
        	</div>
        	<div class="form-group">
        		<input v-model='password' type="text" placeholder="输入密码/验证码"/>
        		<div class="input-bg"></div>
        	</div>
        	<button type="submit" class="login-btn">
        		登陆
        	</button>
        </form>
    </div>
</template> 

<script>
	import {Toast} from 'mint-ui'
    export default {
        name:'app-login',
        data(){
        	return {
        		username:'',password:''
        	}
        },
       methods:{
       	login(){
       		let that = this
       		setTimeout(()=>{
       			if(that.username!='123'||that.password!='456') {
       				Toast('登陆失败')
       				return false;
       			}
       			Toast('登陆成功')
       			let data = {user_id:12345,username:that.username}      			
       			that.$store.commit('changeUserInfo',data)    
       			
       			that.$router.replace({name:'personal'})
       		},500)
       	}
       }
    }
</script>
<style lang="scss" scoped>

    .app-login{
       
       form{
       		padding: 0.31rem 0.31rem 0;
       }
       
       
       .form-group{
       	margin: 30px 0 0;
    	position: relative;
    	
    		input{
    			display: block;
			    width: 100%;
			    height: 34px;
			    padding: 6px 12px;
			    font-size: 14px;
			    line-height: 1.42857143;
			    color: #555;
			    /*background-color: #fff;*/
			    background-image: none;
			    border: 1px solid #ccc;
			    border-radius: 4px;
			    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
			    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
			    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
			    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
			    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
			    border: none;
			    background-color: transparent;
			    border-radius: 0px;
			    box-shadow: none;
			    outline: none;
    		}
    		
    		.input-bg{
    			position: absolute;
			    top: 20px;
			    height: 12px;
			    width: 100%;
			    border: solid #c4c4c4;
			    border-width: 0 1px 1px 1px;
    		}
       }
       
       .login-btn{
       	width: 1.63rem;
		    background-color: #fe8233;
		    color: #fff;
		    border: none;
		    border-radius: 36px;
		    margin-top: 45px;
		    padding: 8px 12px;
		    font-size: 15px;
		    outline: none;
		    display: block;
    margin-right: auto;
    margin-left: auto;
       }
       
    }

</style>
