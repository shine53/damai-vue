<template>
  <v-container>
  
    
    <div class="container row">
      <div class="col-3">111</div>
      <div class="col-3">222</div>
      <div class="col-3">111</div>
      <div class="col-3">222</div>
    </div>
    <div>
      最新更新
    </div>
  </v-container>
</template>

<script>
$(function() {
  $(".j").click(function() {
    alert(111);
  });
});

export default {
  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuetifyjs.com"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  }),
  methods: {
    //  a(){
    //    $('p').css({color:'red'})
    //   }
  }
};
</script>

<style lang="scss">
$color: rgb(184, 20, 20);
.jj {
  color: $color;
  .pp {
    color: blue;
  }
}
</style>
