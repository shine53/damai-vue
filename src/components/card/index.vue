<!--  -->
<template>
  <div class="card">
    <h3 class="p-2 text-muted">身份证电子票</h3>
    <div class="m-3">
      <form action>
        <div class="m-3">
          用户姓名：
          <input type="text">
        </div>
        <div class="m-3">
          手机号码：
          <input type="text">
        </div>
      </form>
      <div class="tips ml-3">
        <i class="fa fa-exclamation-circle color-blue"></i>
        温馨提示:请持购票时所填写的二代身份证到自助机换票
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "card",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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

//温馨提示
.tips > i {
  color: rgb(47, 145, 236);
}
</style>