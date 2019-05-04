<template>
  <v-app id="app">
    <!-- 头部 -->
    <Header></Header>

    <v-content id="content">
      
      <!-- <HelloWorld/> -->
    </v-content>

    <!-- 底部 --> 
    <Footer/>
  </v-app>
</template>

<script>
// import $ from 'jquery'
// import HelloWorld from './components/HelloWorld'




export default {
  name: 'App',
  components: {
   
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

ul,li{
  list-style: none;
}
input[type="text"] {
  border: 1px solid rgb(197, 194, 194);
}
#app{
  width: 100%;margin: 0 auto;
  // background-color: #fff;
}
#content{
margin: 0 auto;width: 100%;
min-width: 1190px;max-width: 1500px;
// border:1px rgb(86, 129, 134) solid;
}
</style>
