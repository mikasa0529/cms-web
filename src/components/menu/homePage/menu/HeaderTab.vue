<template>
  <ul class="headerTabs">
    <li v-for="item in tableData"  :key="item.id" class="tabItem">
      <router-link :to="item.functionUrl"  replace :exact="item.functionUrl === '/'">
        {{item.functionName}}
      </router-link>
    </li>
    <li>
      <el-input type="text" placeholder="搜索内容" suffix-icon="el-icon-search"/>
    </li>
  </ul>
</template>

<script>
  import {functionData} from '@/assets/data/fakeData'
  export default {
    name: "HeaderTab",
    data() {
      return {
        tableData: [] || JSON.parse(JSON.stringify(functionData)),
      }
    },
    created() {
       this.pullData();
    },
    methods:{
        pullData() {
          this.$http.get("/pubFunction/find").then(res=>{
            if(res.data.status === 'success') {
              this.tableData = res.data.data;
            }else {
              this.$message(res.data.message);
            }
          }).catch(error=>{
              this.$message.error("服务器出错，请联系管理员")
          })
        }
    }
  }
</script>

<style lang="scss">
  .headerTabs{
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .tabItem{
      cursor: pointer;
      a{
        text-decoration: none;
        color: black;
      }
      a:hover{
        color: #3c9afb;
      }
    }
  }
</style>
