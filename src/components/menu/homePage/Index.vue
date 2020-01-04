<template>
  <div id="homePageContainer">
    <div id="sideMenu">
      <el-radio-group v-model="isCollapse" class="side-el-radio-group">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu
        class="side-el-menu"
        background-color=""
        @open="handleOpen"
        unique-opened
        :collapse="isCollapse"
        @close="handleClose">
        <el-submenu v-for="item in functionData[0].children" :key="item.functionName"
                    :index="item.functionUrl">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.functionName}}</span>
          </template>
          <!--如果有子菜单，则设置子菜单-->
          <div v-if="item.children.length>0">
            <el-menu-item v-for="sub in item.children" :key="sub.functionName" :index="sub.functionUrl">
              <router-link :to="sub.functionUrl" replace :exact="item.functionUrl === '/'">
                {{sub.functionName}}
              </router-link>
            </el-menu-item>
          </div>
          <!--如果没有子菜单，则设置子菜单为本身-->
          <div v-if="item.children.length === 0">
            <el-menu-item :key="item.functionName" :index="item.functionUrl">
              <router-link :to="item.functionUrl" replace :exact="item.functionUrl === '/'">
                {{item.functionName}}
              </router-link>
            </el-menu-item>
          </div>
        </el-submenu>
      </el-menu>
    </div>
    <div id="view">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import {functionData} from '@/assets/data/fakeData'

  export default {
    name: "RecommendedIndex",
    data() {
      return {
        functionData: JSON.parse(JSON.stringify(functionData)),
        isCollapse: false,
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss">
  #homePageContainer {
    flex: 1;
    display: flex;
    height: auto;
    min-height: 200px;

    #sideMenu {
      float: left;
      min-width: 240px;
      overflow: auto;
      height: 100%;
      position: fixed;
      .side-el-radio-group {
        min-width: 100%;
      }
      .side-el-menu {
        min-height: 100%;
      }
    }

    #view {
      margin-left: 250px;
    }
  }
</style>
