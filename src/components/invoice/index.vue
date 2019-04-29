<!--  -->
<template>
  <div class="invoice">
    <div class="mt-3 ml-3">
      <span class="m-3" :class="{to_active:user==1}" @click="enterprise">企业</span>
      <span class="m-3" :class="{to_active:user==2}" @click="personal">个人</span>
    </div>
    <div class="p-2 border">
      <!-- 企业开票 -->
      <form action v-show="user===1">
        <div class="m-3">
          公司抬头：
          <input type="text" class="p-1">
        </div>
        <div class="m-3">
          公司税号：
          <input type="text" class="p-1">
        </div>
      </form>
      <!-- 个人开票 -->
      <form action v-show="user===2">
        <div class="m-3">
          个人抬头：
          <input type="text" class="p-1">
        </div>
        <div class="m-3">
          税&nbsp &nbsp &nbsp &nbsp 号：
          <input type="text" class="p-1">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      user: 1
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    enterprise() {
      this.user = 1;
    },
    personal() {
      this.user = 2;
    }
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
.to_active {
  color: red;
  border-bottom: 1px solid red;
}
</style>