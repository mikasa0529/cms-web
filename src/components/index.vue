<template>
  <div id="cms-index">
    <div id="cms-header">
      <div class="header-container">
        <div class="header-logo"></div>
        <div class="header-tab-container">
          <header-tab></header-tab>
        </div>
      </div>
    </div>
    <div id="cms-main">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import HeaderTab from "@/components/menu/homePage/menu/HeaderTab";

  export default {
    name: "index",
    components: {
      HeaderTab,
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  #cms-index {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    #cms-header {
      width: 100%;
      height: 5rem;
      border-bottom: #3c9afb solid 1px;
      background-color: white;
      position: fixed;
      z-index: 1500;
      .header-container {
        max-width: 960px;
        width: 100%;
        margin: 0 auto;
      }

      .header-logo {

      }

      .header-tab-container {
        width: 60%;
      }
    }
  }
  #cms-main{
    flex: 1;
    margin-top:5rem;
    overflow-y: scroll;
  }
</style>
