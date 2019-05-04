<template lang="html">
	<div class="login">
      <CommonPage :title="navTitle">
		  <div class="login-section">
		  	<div class="row">
		  		<div class="col-6">
		  			<img src="./img/login.png" alt="">
		  		</div>
				<div class="col-6 right-section bg-white">
					<ul class="nav nav-tabs">
						<li class="nav-item" @click='bol=!bol'>
							<a class="nav-link" :class="{'active':bol}" href="#">账户登陆</a>
						</li>
						<li class="nav-item" @click='bol=!bol'>
							<a class="nav-link" :class="{'active':!bol}" href="#">短信登陆</a>
						</li>
					</ul>
					<div class="tab-content">
						<div class="login-form w-100 justify-content-center" v-show='bol'>
							<form class="form-list bg-white" action="index.html" method="post">
								<div class="input-group justify-content-center">
									<div class="input-group-prepend bg-white border-red">
										<span class="icon-user"></span>
									</div>
									<div class="form-group">
										<input type="number" class="form-control border-red" placeholder="请输入手机号">
										<small class="form-text text-danger" v-show='formData.small'>请填写手机号</small>
									</div>
								</div>
								<div class="input-group justify-content-center">
									<div class="input-group-prepend bg-white border-red">
										<span class="icon-lock-closed"></span>
									</div>
									<div class="form-group">
										<input type="password" class="form-control border-red" placeholder="请输入密码">
										<small class="form-text text-danger" v-show='formData.small'>请填写密码</small>
									</div>
								</div>
								<input class="form-submit bg-danger" type="submit" value="提交">
							</form>
							<div class="">
								<ul class="d-flex justify-content-around">
									<li><input type="checkbox" name="" value="">下次自动登陆</li>
									<li>
										<ul class="d-flex">
											<li>忘记密码？</li>
											<li class="color-red"><router-link to="/register">立即注册</router-link> </li>
										</ul>
									</li>
								</ul>
								<p class="ml-5">其他登陆：<span class="icon-wechat"></span></p>
							</div>
				      	</div>
						<div class="login-form w-100 justify-content-center" v-show='!bol'>
							<form class="form-list bg-white" action="index.html" method="post">
								<div class="input-group justify-content-center">
									<div class="input-group-prepend bg-white border-red">
										<span class="icon-user"></span>
									</div>
									<div class="form-group">
										<input type="number" class="form-control border-red" placeholder="请输入手机号">
										<small class="form-text text-danger" v-show='formData.small'>请填写手机号</small>
									</div>
								</div>
								<div class="form-half">
									<div class="row">
										<div class="col-6 offset-sm-1">
											<div class="input-group">
												<div class="input-group-prepend bg-white border-secondary">
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
								<input class="form-submit bg-danger" type="submit" value="提交">
							</form>
							<div class="">
								<ul class="d-flex justify-content-around">
									<li><input type="checkbox" name="" value="">下次自动登陆</li>
									<li>
										<ul class="d-flex">
											<li>忘记密码？</li>
											<li><router-link  class="color-red" to="/register">立即注册</router-link></li>
										</ul>
									</li>
								</ul>
								<p class="ml-5">其他登陆：<span class="icon-wechat"></span></p>
							</div>
				      	</div>
					</div>
				</div>
		  	</div>
		  </div>
      </CommonPage>
    </div>
</template>

<script>
import CommonPage from '@/components/commonPage'

export default {
	name: 'login',
	data() {
	  return {
		  navTitle: '欢迎登陆',
		  bol: true,
		  formData: {
			  small: false
		  }
	  }
	},
	components: {
	 CommonPage
	}
}
</script>

<style lang="scss">
.login-section {
	padding: 80px 50px;
}
img {
	display: block;
	width: 100%;
	height: 100%;
}
.form-list {
	padding: 80px 20px 20px;
}
.login-form {
	padding: 5px;
}
</style>
