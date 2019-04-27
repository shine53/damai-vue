<!-- 交易总流程 -->
<template>
  <div class="transaction">
    <Process/>
  </div>
</template>

<script>
// 确认订单信息
import Process from "../pages/Process";

export default {
  name:'transaction',
  data: () => ({}),
  components: {
    Process
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
$color: rgb(184, 20, 20);
</style>
