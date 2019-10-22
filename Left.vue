<template>
  <div class="left">
    <div class="title">
      <div class="name" v-for="(item, index) in list" :key="index">
        {{ item.name }}
      </div>
    </div>
    <div>内容</div>
  </div>
</template>

<script>
export default {
  name: "Left",
  components: {},
  props: {},
  data() {
    return {
      list: [
        {
          name: "全部"
        },
        {
          name: "精华"
        },
        {
          name: "分享"
        },
        {
          name: "问答"
        },
        {
          name: "问答"
        },
        {
          name: "客户端测试"
        }
      ],
      title: []
    };
  },
  methods: {
    getlist() {
      this.$axios
        .req("api/topics")
        .then(res => {
          this.title = res.subjects;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
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
  /*width: 1375px;*/
}
.title {
  display: flex;
  width: 100%;
  font-size: 14px;
  background: gray;
  div {
    margin-right: 25px;
    color: #80bd01;
    &:hover {
      color: #08c;
    }
    .name {
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      padding-left: 25px;
    }
  }
}
.shuju {
  width: 100%;
  background: white;
}
</style>
