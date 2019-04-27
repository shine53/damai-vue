<template>
  <v-app id="app">
    <!-- 头部 -->
    <Header/>

    <v-content id="content">
      <DmProcess/>
      <!-- <HelloWorld/> -->
    </v-content>

    <!-- 底部 -->
    <Footer/>
  </v-app>
</template>

<script>
// import $ from 'jquery'
import HelloWorld from './components/HelloWorld'
// 交易流程
import Process from './pages/Process'



export default {
  name: 'App',
  components: {
    DmProcess:Process,
    // HelloWorld
  
  },
  data () {
    return {
      //
    }
  },
  methods: {
    
  },
}
</script>
<style lang="scss">

#app{
  width: 100%;margin: 0 auto;
}
#content{
margin: 0 auto;width: 100%;
min-width: 1500px;max-width: 1500px;
border:1px rgb(86, 129, 134) solid;
}
</style>