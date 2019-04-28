<!-- 交易流程 -->
<template>
  <div class="process">
    <div class="Information">
      <h3 class="col-12">购票人信息</h3>
      <div class="Choice row">
        <div class="col" :class="{to_active:shows==1}" @click="Choice_a">
          <div class="fa fa-id-card fa-5x"></div>
          <div>身份证电子票</div>
        </div>
        <div class="col" :class="{to_active:shows==2}" @click="Choice_b">
          <div class="fa fa-qrcode fa-5x"></div>
          <div>二维码电子票</div>
        </div>
        <div class="col" :class="{to_active:shows==3}" @click="Choice_c">
          <div class="fa fa-id-card fa-5x"></div>
          <div>快递派送</div>
        </div>
       
      </div>
    </div>
    <div>
       <Pcard></Pcard>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import card from '../../components/card'


export default {
  name: "process",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      flag: true,
      shows: 1
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  components:{
    Pcard:card
  },
  watch: {},
  //方法集合
  methods: {
    Choice_a() {
      this.shows = 1;
    },
    Choice_b() {
      this.shows = 2;
    },
    Choice_c() {
      this.shows = 3;
    },
   today_a(){
this.shows = 1;
},
today_b(){
this.shows = 2;
},
today_c(){
this.shows = 3;
},
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import url(../../static/H-ui.reset.css);
.process {
}
.to_active {
  color: red;
}
.Choice {
  width: 800px;
  border: 1px red solid;
  margin: auto;
  display: flex;
  justify-content: space-between;
  text-align: center;
  .Choice > div {
  }
}
</style>