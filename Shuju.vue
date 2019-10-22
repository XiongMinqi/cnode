<template>
  <div>
    <div v-for="(item, index) in title" :key="index">
      <div class="head">
        <div class="zj">
          <!--置顶，问答-->
          <span class="zhiding" v-if="item.top === true">置顶</span>
          <span class="share" v-else-if="item.tab === 'share'">分享</span>
          <span class="ask" v-else-if="item.tab === 'ask'">问答</span>
        </div>
        <div>{{ item.title }}</div>
      </div>
      <div class="zuozhe">
        <div>发布于</div>
        <div>作者:{{ item.loginname }}</div>
        <div>{{ item.visit_count }}次浏览</div>
        <div>
          来自
          <span v-if="item.tab === 'share'">分享</span>
          <span v-else-if="item.tab === 'ask'">问答</span>
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
      title: []
    };
  },
  methods: {
    getmovie() {
      this.$axios
        .req("api/topics")
        .then(res => {
          this.title = res.data;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getmovie();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
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
</style>
