<template>
  <div id="recommend-index-container">
    <article-list :list-data="data"></article-list>
  </div>
</template>

<script>

  export default {
    name: "RecommendManagementIndex",
    data(){
      return {
        data: []
      }
    },
    created() {
      this.pullData();
    },
    methods:{
      pullData() {
         this.$http.get("/pubArticle/find").then(res=>{
           this.data = res.data;
         }).catch(error=>{
           this.$message.error("服务器出错，请联系管理员!")
         })
      }
    }
  }
</script>

<style lang="scss">
#recommend-index-container {
  width: 100%;
}
</style>
