<template>
  <div class="register">
    <CommonPage :title="navTitle">
    	<div class="register-form w-100 justify-content-center">
			<form class="form-list bg-white">
				<div class="input-group justify-content-center">
					<div class="input-group-prepend bg-white border-red">
						<span class="icon-user"></span>
					</div>
					<div class="form-group">
						<input type="number" class="form-control border-red" placeholder="请输入手机号" v-model="registerMes.phoneNumber" @blur="phone()">
						<small class="form-text color-red" :class="{'color-green': pass.phonegreen}">{{sphone}}</small>
					</div>
				</div>
				<div class="input-group justify-content-center">
					<div class="input-group-prepend bg-white border-red">
						<span class="icon-lock-closed"></span>
					</div>
					<div class="form-group">
						<input type="password" class="form-control border-red" placeholder="请输入密码" v-model="registerMes.password" @blur="password()">
						<small class="form-text color-red" :class="{'color-green':pass.passwordgreen}">{{spassword}}</small>
					</div>
				</div>
				<div class="input-group justify-content-center">
					<div class="input-group-prepend bg-white border-red">
						<span class="icon-lock-closed"></span>
					</div>
					<div class="form-group">
						<input type="password" class="form-control border-red" placeholder="请确认密码" v-model="passwordAgain" @blur="passAgain()">
						<small class="form-text color-red" :class="{'color-green': pass.againgreen}">{{spasswordAgain}}</small>
					</div>
				</div>
				<div class="form-half">
					<div class="row">
						<div class="col-6 offset-sm-1">
							<div class="input-group">
								<div class="input-group-prepend bg-white border-secondary" v-model="registerMes.duanxin">
									<span class="icon-message"></span>
								</div>
								<div class="form-group">
									<input type="password" class="form-control border-secondary" placeholder="请输入验证码">
								</div>
							</div>
						</div>
						<div class="col-3">
							<button class="btn btn-outline-secondary" type="button" name="button">获取验证码</button>
						</div>
					</div>
				</div>
				<p class="duanxin">{{}}</p>
				<input class="form-submit bg-danger" type="submit" value="提交" @click.prevent="addUsers()">
			</form>
			<ul class="d-flex">
				<li class="mr-3">已有账户</li>
				<li><router-link  class="color-red" to="/login">立即登陆</router-link> </li>
			</ul>
    	</div>
    </CommonPage>
  </div>
</template>

<script>
// @ is an alias to /src
import CommonPage from '@/components/commonPage'

export default {
  name: 'register',
  data() {
	return {
		navTitle: '账户注册',
		passwordAgain:'',
		spasswordAgain: '请确认密码',
		sphone: '请填写手机号',
		spassword: '请填写密码',
		pass: {
			phonegreen: false,
			passwordgreen: false,
			againgreen: false,
		},
		registerMes: {
			phoneNumber:'',
			password:'',
			duanxin:''
		}
	}
  },
	  components: {
	   CommonPage,
	},
	methods: {
		passAgain(){
			if(this.registerMes.password!== this.passwordAgain) {
				this.spasswordAgain = "两次输入的密码不一致"
				this.pass.againgreen = false
			}else{
				this.spasswordAgain = "通过"
				this.pass.againgreen = true
			}
		},
		phone() {
			if(this.registerMes.phoneNumber.length === 11){
				this.sphone = "通过"
				this.pass.phonegreen = true
			}else{
				this.sphone = "请填写正确的手机号"
				this.pass.phonegreen = false
			}
		},
		password(){
			if(this.registerMes.password.length > 16){
				this.spassword = "密码不能超过15位"
				this.pass.passwordgreen = false
			}else if(this.registerMes.password.length < 7){
				this.spassword = "密码不能少于6位"
				this.pass.passwordgreen = false
			}else if(/[a-zA-Z]/.test(this.registerMes.password)==false){
				this.spassword = "必须有字母"
				this.pass.passwordgreen = false
			}else if(/[0-9]/.test(this.registerMes.password)==false){
				this.spassword = "必须有数字"
				this.pass.passwordgreen = false
			}else {
				this.spassword = "通过"
				this.pass.passwordgreen = true
			}
		},
		addUsers: function() {
			var flag = false;
			for(var key in this.pass) {
				// console.log(this.pass[key]);
				if (this.pass[key]) {
					flag = true
				} else {
					flag =false
				}
			}
			// console.log(flag);
			if(flag) {
				// 不能识别post？？？突然就好了？就是重启了一下
				// 设置了 Vue.prototype.$http = axios，这里不能使用 $axios,不然不识别post
				this.$http.post('http://localhost:3000/users',{
					phoneNumber:this.registerMes.phoneNumber,
					password:this.registerMes.password,
					duanxin:this.registerMes.duanxin
				}).then((response) => {
					console.log(response);
				})
			}else{
				console.log("不能通过");
			}
		}

	},
	created() {
		// fetch 不能传值给json-server？？ 是不是form-data对不上？？？
		// fetch('http://localhost:3000/users',{
		// 	method:"post",
		// 	users: {
		// 		phoneNumber:'3289',
		// 		password:'kfjdsl',
		// 		duanxin:'dfskl'
		// 	}
		// }).then(result=>{
		// 	console.log(result);
		// })
	}
}
</script>
<style lang="scss">
	.register-form {
		padding: 80px;
	}
	.form-list {
		padding: 50px 100px;
	}
	.input-group-prepend {
		display: inline-block;
		padding: 8px;
		height: 38px;
		border-radius: 5px 0 0 5px;
	}
	.border-red {
		border: 1px solid red !important;
	}
	.border-secondary{
		border: 1px solid #6c757d;
	}
	.form-group {
		width: 85%;
	}
	.input-group .form-control {
		width: 100% !important;
		border-radius: 0 5px 5px 0 !important;
	}
	.form-submit {
		border-radius: 5px;
		width: 90%;
		margin: 6%;
		padding: .5em;
		color: #fff;
	}
</style>
