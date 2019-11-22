<template>
  <div id="app">
    <button @click="pullData">测试接口</button>
    <el-tree :data="data" :props="defaultProps" show-checkbox @node-click="handleNodeClick">

    </el-tree>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        data: [],
        defaultProps: {
          children: 'childAthDept',
          label: 'deptName'
        }
      }
    },
    created() {
      this.pullData();
    },
    methods: {
      pullData() {
        this.$test.get("/athDept/find")
          .then(res => {
            this.data = res.data;
          }).catch(error => {
          this.$message("f服务器出错，请联系管理员");
        });
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
