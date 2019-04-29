<!-- 交易流程 -->
<template>
  <div class="process">
    <!-- 购票人信息开始 -->
    <div>
      <!-- 选项卡 -->
      <div class="Information">
        <h3 class="font-weight-bold">购票人信息</h3>
        <div class="Choice row mt-5 mb-5">
          <!-- to_active为切换选中样式 -->
          <div class="col" :class="{to_active:shows==1}" @click="Choice_a">
            <div class="fa fa-id-card fa-5x"></div>
            <div>身份证电子票</div>
          </div>
          <div class="col" :class="{to_active:shows==2}" @click="Choice_b">
            <div class="fa fa-qrcode fa-5x"></div>
            <div>二维码电子票</div>
          </div>
          <div class="col" :class="{to_active:shows==3}" @click="Choice_c">
            <div class="fa fa-truck fa-5x"></div>
            <div>快递派送</div>
          </div>
        </div>
      </div>
      <div class="details border">
        <!-- 引用身份证电子票组件 -->
        <P_card v-show="shows===1"></P_card>
        <!-- 引用微信购票组件 -->
        <div v-show="shows===2" class="border pa-5">待配置···</div>
        <!-- 引用快递组件 -->
        <div v-show="shows===3" class="border pa-5">待配置···</div>
      </div>
    </div>
    <!-- 购票人信息结束 -->

    <!-- 实名认证开始 -->
    <div class="realname mt-5">
      <h3 class="p-2">
        <v class="pb-2">实名证件信息</v>
      </h3>
      <div class="p-3">
        购票人：
        <a class="p-2 red text-light rounded">选择购票人</a>
      </div>
    </div>
    <!-- 实名认证结束 -->

    <!-- 付款方式开始 -->
    <div class="realname mt-5">
      <h3 class="p-2">
        <v class="pb-2">选择付款方式</v>
      </h3>
      <div class="p-3">
        <input type="radio" checked class="red">
        网上付款
      </div>
    </div>
    <!-- 付款方式结束 -->

    <!-- 商品清单开始 -->
    <div class="realname mt-5">
      <h3 class="p-2">
        <v class="pb-2">商品清单</v>
      </h3>
      <!-- 清单组件 -->
      <P_list/>
    </div>
    <!-- 商品清单结束 -->

    <!-- 发票开始 -->
    <div class="realname mt-5">
      <h3 class="p-2">
        <v class="pb-2">我要开发票</v>
      </h3>
      <P_invoice/>
    </div>
    <!-- 发票结束 -->

    <!-- 保险部分开始 -->
    <div class="Insurance mt-5 py-3">
      <ul class>
        <li class="m-1">
          <input type="checkbox"> 购买'安心订票保险',本单保费金额：元
        </li>
        <li class="m-1">查看保险服务和《安心订票保险条款》</li>
        <li class="m-1">购买保险，请填写真实姓名</li>
        <li class="m-1">商品金额：</li>
        <li class="m-1">保险金额：</li>
      </ul>
    </div>
    <!-- 保险部分结束 -->

    <!-- 总金额结算开始 -->
    <div class="Settlement mt-5 py-3">
      <ul class>
        <li class="m-1">待支付总额：</li>
        <li class="m-1">
          <input type="checkbox"> 我已阅读同意《订购服务条款》《退换货约定》《退款约定》
        </li>
        <li class="m-1">同意票品不为记名凭证,请妥善保管,遗失不补</li>
        <li class="mt-3 mr-1 ">
          <input type="submit" value="同意以上协议并提交订单" class="px-4 py-1 red rounded">
        </li>
      </ul>
    </div>
    <!-- 总金额结算结束 -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// 身份证购票模块
import card from "@/components/card/index";
// 商品清单模块
import detailedList from "@/components/detailedList/index";
import invoice from "@/components/invoice/index";

export default {
  name: "process",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      // 默认展示样式1
      shows: 1
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  components: {
    P_card: card,
    P_list: detailedList,
    P_invoice: invoice
  },
  watch: {},
  //方法集合
  methods: {
    // 购票方式选项卡切换开始
    Choice_a() {
      this.shows = 1;
    },
    Choice_b() {
      this.shows = 2;
    },
    Choice_c() {
      this.shows = 3;
    }
    // 购票方式选项卡切换结束
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
// @import url(../../static/H-ui.reset.css);
.process {
  background-color: #fff;
}
// 选项卡开始
.to_active {
  color: red;
}
.Choice {
  width: 800px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  text-align: center;
}

// 选项卡结束
.title {
  color: red;
  border-bottom: 1px solid red;
}
h3 {
  border-bottom: 1px solid rgba(224, 219, 219, 0.9);
}

v {
  padding-right: 50px;
  border-bottom: 1px solid red;
  color: red;
}
.radio {
  color: red;
}
.Insurance {
  border-top: 2px solid rgba(224, 219, 219, 1);
  ul > li {
    text-align: right;
  }
}
.Settlement {
  border-top: 2px dashed rgba(224, 219, 219, 1);
  ul > li {
    text-align: right;
    input {
      color: #fff;
    }
  }
}
</style>