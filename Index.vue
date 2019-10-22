<template>
  <div class="left">
    <div class="title">
      <div class="name" v-for="(item, index) in list" :key="index">
        <span :class="{ bg: index === num }" @click="changcolor(index)">
          {{ item.name }}
        </span>
      </div>
    </div>
    <div class="time" @click="tiaozhuan()">
      <div class="topic" v-for="(item, index) in title" :key="index">
        <div class="zuobian">
          <div class="lf">
            <!--头像-->
            <img
              :src="item.author.avatar_url"
              alt=""
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="one">{{ item.reply_count }}/</span
            ><span class="two">{{ item.visit_count }}</span>
          </div>
          <div class="zj">
            <!--置顶，问答-->
            <span class="zhiding" v-if="item.top === true">置顶</span>
            <span class="share" v-else-if="item.tab === 'share'">分享</span>
            <span class="ask" v-else-if="item.tab === 'ask'">问答</span>
          </div>
          <div class="neirong">
            <!--内容-->
            <span>{{ item.title }}</span>
          </div>
        </div>
        <!--右边的时间-->
        <div class="shijian">
          <div v-if="item.day">{{ item.day }}天前</div>
          <div v-else-if="item.hour">{{ item.hour }}小时前</div>
          <div v-else-if="item.min">{{ item.min }}分钟前</div>
        </div>
      </div>
    </div>
    <div class="el__page__fen">
      <el-pagination
        @size-change="handleSizeChange()"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total,sizes,prev, pager, next,jumper"
        :total="40"
        class="page"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {},
  props: {},
  data() {
    return {
      num: 0,
      pages: 0,
      pagesNum: 0,
      list: [
        { name: "全部" },
        { name: "精华" },
        { name: "分享" },
        { name: "问答" },
        { name: "招聘" },
        { name: "客户端测试" }
      ],
      title: []
    };
  },
  methods: {
    getlist() {
      this.$axios
        .req("api/topics")
        .then(res => {
          console.log(res);
          this.title = res.data;
          let nowtime = Date.now(); //获取当前时间戳
          this.title.map(item => {
            let different = nowtime - this.$dayjs(item.last_reply_at).valueOf();
            let time = different / 1000 / 60 / 60;
            // console.log(time);
            if (time < 1) {
              let min = Math.floor(time * 60);
              this.$set(item, "min", min); // 创建属性
            } else if (time > 23) {
              let day = Math.ceil(time / 24);
              this.$set(item, "day", day);
            } else {
              let hour = Math.ceil(time);
              this.$set(item, "hour", hour);
            }
            // console.log(item);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    //翻页
    handleSizeChange(val) {
      console.log("每页 ${val} 条");
      this.pages = val;
    },
    handleCurrentChange(val) {
      console.log("当前页：${val} ");
      this.pagesNum = val;
    },

    changcolor(index) {
      this.num = index;
    },
    tiaozhuan(){
      this.$router.push("./shuju");
    }
  },
  mounted() {
    this.getlist();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.left {
  width: 1375px;
  margin-right: 30px;
  margin-bottom: 35px;
}
.title {
  display: flex;
  width: 100%;
  font-size: 14px;
  background: gray;
  .name {
    padding-right: 25px;
    color: #80bd01;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    padding-left: 25px;
    &:hover {
      color: #08c;
    }
  }
}
.topic {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: white;
  height: 65px;
  font-size: 18px;
  padding-left: 15px;
  border-bottom: 1px solid #c0dfff;
  &:hover {
    background: #d5fcff;
  }
  img {
    width: 45px;
    height: 45px;
    position: relative;
    top: 9px;
  }
}
.one {
  font-size: 20px;
  color: rebeccapurple;
}
.two {
  font-size: 14px;
}
.shijian {
  line-height: 65px;
  padding-right: 15px;
}
.zhiding {
  padding: 2px 4px;
  background: #80bd01;
  color: white;
  font-size: 15px;
  border-radius: 5px;
}
.share {
  padding: 2px 4px;
  background: #999;
  color: white;
  font-size: 15px;
  border-radius: 5px;
}
.ask {
  padding: 2px 4px;
  background: #999;
  color: white;
  font-size: 15px;
  border-radius: 5px;
}
.zuobian {
  display: flex;
  justify-content: start;
}
.lf {
  width: 170px;
  line-height: 65px;
  img {
    margin-right: 15px;
  }
}
.zj {
  line-height: 65px;
  margin-right: 15px;
}
.neirong {
  width: 900px;
  line-height: 65px;
  overflow: hidden;
  span {
    &:hover {
      text-decoration: underline;
    }
  }
}
.bg {
  /*vertical-align: middle;*/
  padding: 4px 8px;
  background: #80bd01;
  color: white !important;
}
</style>
