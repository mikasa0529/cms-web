<template>
  <div id="article-container">
    <div id="article-header">
      <ul class="article-header-type">
        <li class="popular" @click="popularClick">热门</li>
        <li class="newest" @click="newestClick">最新</li>
        <li class="hottest">
          <label @click="show = true">热榜</label>
        </li>
      </ul>
      <ul class="article-header-type">
        <li>
          <el-select size="mini" v-model="days" v-show="show" class="hottest_days">
            <el-option label="3天内" value="3"></el-option>
            <el-option label="7天内" value="7"></el-option>
            <el-option label="30天内" value="30"></el-option>
            <el-option label="全部" value="0"></el-option>
          </el-select>
        </li>
      </ul>
    </div>
    <div id="article-body">
      <div id="article-list-item" v-for="(item, index) in listData" :key="item.id">
        <div>
          <ul id="article-list-item-header">
            <li>专栏</li>
            <li>{{item.author}}</li>
            <li>{{item.createTime | dateFormat('dateWeek')}}</li>
            <li>{{item.tag}}</li>
          </ul>
        </div>
        <div id="article-list-item-body">
          <label><a>{{item.title}}</a></label>
        </div>
        <div id="article-list-item-bar">
            <span>
              <a @click="giveLike(item)" :class="item.isLike ? 'likedClass'  : 'likeClass'">
                <img alt="" :src="likeUrl">
                  {{item.likeNum}}
              </a>
            </span>
          <span>
              <a @click="comment">
                <img src="~@/assets/icon/comment.4d5744f.svg" alt="">
              {{item.commentNum}}
              </a>
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArticleList",
    props: {
      data: {
        type: Array,
        required: false
      },
      //热榜天数，默认是3、7、30、0(全部)
      days: {
        type: String,
        default: "3",
        required: false
      },
      listData: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        show: false,
        liked: false,
        likeUrl: require('@/assets/icon/zan.svg')
      }
    },
    methods: {
      popularClick() {
        this.show = false;
      },
      newestClick() {
        this.show = false;
      },
      //点赞
      giveLike(item) {
        if (!item.islike) {
          //点赞，数据库点赞数+1
          this.likeUrl = require("@/assets/icon/zan-active.svg");
        } else {
          //取消点赞，数据库点赞数-1
          this.likeUrl = require("@/assets/icon/zan.svg");
        }
        item.islike = !item.islike;
      },
      //评论
      comment() {

      }
    }
  }
</script>

<style lang="scss">
  #article-container {
    width: 100%;
    min-width: 800px;
    border-bottom: 1px solid #3c9afb;
    margin-left: 50px;

    #article-header {
      width: 100%;
      display: flex;
      flex: 1;

      .article-header-type {
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
          cursor: pointer;
          min-height: 27.99px;
        }

        li:hover {
          color: #3c9afb;
        }

        .hottest_days {
          width: 95px;
        }
      }
    }

    #article-body {
      #article-list-item {
        margin: 20px 0 0 0;

        #article-list-item-header {
          flex: 1;
          display: flex;
          list-style: none;
          justify-content: left;
          padding: 0;
          margin: 0;

          li {
            color: #b2bac2;
          }

          li:not(:last-child):after {
            content: "·";
            color: rgb(178, 186, 194);
            margin: 0px 0.3em 0 0.3em;
          }
        }

        #article-list-item-body {
          margin: 5px 0 10px 0;
          font-size: 1.4rem;
          font-weight: 600;

          label {
            cursor: pointer;
          }
        }

        #article-list-item-bar {
          display: inline-flex;
          white-space: nowrap;

          span {
            border: 1px solid #edeeef;
            border-radius: 1px;
            margin-right: 0.8rem;

            .likedClass {
              color: #6CBD45;
            }

            .likeClass {
              color: #b2bac2;
            }

            a:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
