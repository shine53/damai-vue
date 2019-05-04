<template>

  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">register</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
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
@import './static/css/H-ui.reset.css';
@import './static/css/style.css';

.color-red {color: red !important;}
.color-green {color: green !important;}


</style>
