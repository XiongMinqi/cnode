<template>
  <div class="xiangqing">
    <div class="one">
      <div class="head">
        <div class="zj">
          <!--置顶，问答-->
          <span class="zhiding" v-if="title.top === true">置顶</span>
          <span class="share" v-else-if="title.tab === 'share'">分享</span>
          <span class="ask" v-else-if="title.tab === 'ask'">问答</span>
        </div>
        <div class="timu">{{ title.title }}</div>
      </div>
      <div class="zuozhe">
        <div>
          发布于
          <span v-if="title.day">{{ title.day }}天前</span>
          <span v-else-if="title.hour">{{ title.hour }}小时前</span>
          <span v-else-if="title.min">{{ title.min }}分钟前</span>
          <span v-else-if="title.month">{{ title.month }}月前</span>
          <span v-else-if="title.year">{{ title.year }}年前</span>
        </div>
        <div v-if="title.author">作者:{{ title.author.loginname }}</div>
        <div>{{ title.visit_count }}次浏览</div>
        <div>
          来自
          <span v-if="title.tab === 'share'">分享</span>
          <span v-else-if="title.tab === 'ask'">问答</span>
        </div>
      </div>
    </div>
    <div class="two" v-html="title.content">{{ title.content }}</div>
    <div class="three">
      <div class="huifu">{{ title.reply_count }}回复</div>
      <div class="huifuneirong" v-for="(item, index) in this.title.replies" :key="index">
        <div>
          <div class="answer">
            <div><img :src="item.author.avatar_url" alt="" /></div>
            <div>{{ item.author.loginname }}</div>
            <div>{{index+1}}楼</div>
            <div>
              <span v-if="item.tian">{{ item.tian }}天前</span>
              <span v-else-if="item.xiaoshi">{{ item.xiaoshi }}小时前</span>
              <span v-else-if="item.fen">{{ item.fen }}分钟前</span>
              <span v-else-if="item.yue">{{ item.yue }}月前</span>
              <span v-else-if="item.nian">{{ item.nian }}年前</span>
            </div>
          </div>
          <div class="mhtml" v-html="item.content"></div>
          <!--v-html不需要{{  }}引用-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shuju",
  components: {},
  props: {},
  data() {
    return {
      title: [],
      id: ""
    };
  },
  methods: {
    getlist() {
      this.$axios
        .req(`/api/topic/${this.id}`)
        .then(res => {
          this.title = res.data;
          console.log(res);
          let nowtime = Date.now(); //获取当前时间戳
          let createtime = this.$dayjs(this.title.create_at).valueOf();
          let different = nowtime - createtime;
          let time = different / 1000 / 60 / 60;
          // console.log(time);
          //发布时间
          //判断分钟
          if (time < 1) {
            let min = Math.floor(time * 60);
            this.$set(this.title, "min", min); // 创建属性
          } //判断天
          else if (time > 23 && time < 720) {
            let day = Math.ceil(time / 24);
            this.$set(this.title, "day", day);
          } //判断小时
          else if (time > 1 && time < 23) {
            let hour = Math.ceil(time);
            this.$set(this.title, "hour", hour);
          } //判断月份
          else if (time > 720 && time < 8760) {
            let month = Math.floor(time / 720);
            this.$set(this.title, "month", month);
          } //判断年份
          else {
            let year = Math.floor(time / 8760);
            this.$set(this.title, "year", year);
          }
          // console.log(item);
          //回复时间

          this.title.replies.map(item => {
            let difference =
              nowtime - this.$dayjs(item.create_at).valueOf();
            let shijian = difference / 1000 / 60 / 60;
            // console.log(time);
            if (shijian < 1) {
              let fen = Math.floor(shijian * 60);
              this.$set(item, "fen", fen); // 创建属性
            } else if (shijian > 23 && shijian < 720) {
              let tian = Math.ceil(shijian / 24);
              this.$set(item, "tian", tian);
            } else if (shijian > 1 && shijian < 23) {
              let xiaoshi = Math.ceil(shijian);
              this.$set(item, "xiaoshi", xiaoshi);
            } else if (shijian > 720 && time < 8760) {
              let yue = Math.floor(shijian / 720);
              this.$set(item, "yue", yue);
            } else {
              let nian = Math.floor(shijian / 8760);
              this.$set(item, "nian", nian);
            }
            // console.log(title);
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.id = this.$route.query.id;
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
.xiangqing {
  width: 1375px;
  margin-right: 30px;
  margin-bottom: 35px;
}
.one {
  background: white;
  padding: 10px;
  border-bottom: 1px solid #d5fcff;
  div {
    margin-right: 15px;
  }
  .zuozhe {
    div:before {
      content: "•";
    }
  }
}
.two {
  background: white;
  padding: 18px;
  border-bottom: 1px solid #d5fcff;
  margin-bottom: 25px;
}
.three {
  .huifu {
    font-size: 14px;
    padding: 10px;
    background: #e5ffff;
  }
  background: white;
}
.head {
  display: flex;
  line-height: 40px;
}
.zuozhe {
  display: flex;
  line-height: 40px;
}
.zj {
  /*margin-right: 15px;*/
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
.timu {
  font-size: 30px;
}
.answer {
  div {
    margin-right: 15px;
    line-height: 45px;
  }
  height: 55px;
  display: flex;
  /*align-items: center;*/
  img {
    width: 45px;
    height: 45px;
  }
}
.huifuneirong {
  /*line-height: 55px;*/
  vertical-align: middle;
  border-bottom: 1px solid grey;
  /*height: 85px;*/
}
  .mhtml{
    /*height: 55px;*/
    line-height: 25px;
    margin-left: 70px;
  }
</style>
