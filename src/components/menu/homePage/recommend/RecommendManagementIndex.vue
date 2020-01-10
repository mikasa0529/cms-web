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
        data: [{
          id: "1",
          author:"柯南小海盗",
          createTime: new Date('2019-12-31 00:00:00'),
          tag:"html/前端",
          title:"webpack 最佳配置指北",
          likeNum:200,
          isLike: false,
          commentNum:50
        },{
          id: "2",
          author:"柯南小海盗",
          createTime: new Date('2019-12-31 00:00:00'),
          tag:"html/前端",
          title:"图文并茂，为你揭开“单点登录“的神秘面纱",
          likeNum:200,
          isLike: false,
          commentNum:50
        },]
      }
    }
  }
</script>

<style lang="scss">
#recommend-index-container {
  width: 100%;
}
</style>
