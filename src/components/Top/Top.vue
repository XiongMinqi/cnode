<template>
  <div id="top">
    <div id="top-left">
      <div><img src="../../assets/image/header.png" alt="" /></div>
      <div class="shurukuang">
        <img src="../../assets/image/sousuo.svg" alt="" />
        <input type="text" />
      </div>
      <!--      <div class="shurukuang el__input_radius">-->
      <!--        <el-input placeholder="请输入内容" prefix-icon="el-icon-search">-->
      <!--        </el-input>-->
      <!--      </div>-->
    </div>
    <div class="right">
      <ul>
        <li>首页</li>
        <li>新手入门</li>
        <li>API</li>
        <li>关于</li>
        <li>注册</li>
        <li>登录</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#top {
  li {
    &:hover {
      color: white;
    }
    list-style: none;
    color: gray;
    margin-right: 32px;
  }
  height: 68px;
  font-size: 13px;
  width: 90%;
  line-height: 68px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  ul {
    display: flex;
    justify-content: space-around;
  }
}
#top-left {
  display: flex;
  line-height: 68px;
  img {
    width: 124px;
    height: 30px;
    margin-right: 30px;
    /*line-height: 68px;*/
    margin-top: 12px;
  }
  .shurukuang {
    width: 350px;
    height: 45px;
    display: flex;
    /*line-height: 68px;*/
    background: white;
    border-radius: 20px;
    img {
      margin-left: 5px;
      width: 24px;
      height: 24px;
    }
    input {
      margin-left: -22px;
      width: 280px;
      height: 43px;
      border: 0;
      border-radius: 20px;
      line-height: 68px;
    }
  }
}
/*.shurukuang {*/
/*  width: 300px;*/
/*  height: 23px;*/
/*  border-radius: 14px;*/
/*  line-height: 50px;*/
/*}*/
.right {
  display: flex;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-right: 32px;
  }
}
</style>
