<template lang="html">
<div class="my-container">
	<nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
	  <a class="navbar-brand px-5" href="#">
		  <img src="./img/logo1.png" alt="">
	  </a>
	  <div class="float-left">{{title}}</div>
	</nav>
	<slot></slot>
	<footer class="font-size-14">
		<ul class="d-flex justify-content-around w-100 px-10 li-right-border">
			<li>
				<a href="#">公司介绍</a>
			</li>
			<li>
				<a href="#">品牌识别</a>
			</li>
			<li>
				<a href="#">企业荣誉</a>
			</li>
			<li>
				<a href="#">隐私声明</a>
			</li>
			<li>
				<a href="#">联系及合作</a>
			</li>
			<li>
				<a href="#">招聘信息</a>
			</li>
			<li>
				<a href="#">网站地图</a>
			</li>
			<li>
				<a href="#">友情链接</a>
			</li>
			<li class="nb">
				<a href="#">公司大事记</a>
			</li>
		</ul>
		<ul class="font-size-12">
			<li class="pb-3">
				<ul class="d-flex justify-content-center">
					<li>京ICP证031086号 |</li>
					<li>京ICP备1013248号 |</li>
					<li>京公安网11032040599500349 |</li>
					<li>广播电视节目制作经营许可证（京）字第032256号</li>
				</ul>
			</li>
			<li class="pb-3">
				<ul class="d-flex justify-content-center">
					<li>网络文化经营许可证 京网文[2018]3243-534号 |</li>
					<li>营业性演出许可证 京市演出888号</li>
				</ul>
			</li>
			<li class="d-flex justify-content-center pb-3">北京阿博文化有限公司 大麦网 Copyright 2018 All Rights Reserved</li>
		</ul>
	</footer>
</div>
</template>

<script>
export default {
	name:'common',
	props: ['title']
}
</script>

<style lang="css" scoped>
a,a:hover {
	color: #333;
}
.my-container {
	background: #eee;
}
.navbar-brand {
	border-right: 2px solid #ccc;
}
.navbar-brand img {
	display: block;
	width: 90%;
	height: 90%;
}
.navbar div {
	font-size: 24px;
}
.font-size-12 {
	font-size: 12px;
}
.font-size-14 {
	font-size: 14px;
}
.px-10 {
	padding: 100px 10% 50px;
}
.li-right-border li {
	padding: 0 20px 0 0;
	border-right: 1px solid #666;
}
.li-right-border .nb {
	border: none;
}
</style>
