<template>
  <div class="bottom">
    <div class="top">
      <span>
        RSS<a href="https://cnodejs.org/rss"></a> | 源码地址<a
          href="https://github.com/cnodejs/nodeclub/"
        ></a>
      </span>
    </div>
    <div>
      CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
    </div>
    <div class="picture">
      <span>
        服务器赞助商为
        <a
          href="https://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo"
        >
          <img class="pic1" src="../../assets/image/bottom-1.png" alt="" /> </a
        >， 存储赞助商为
        <a href="https://www.qiniu.com/?ref=cnode">
          <img class="pic2" src="../../assets/image/bottom-2.png" alt="" /> </a
        >， 由
        <a href="https://www.aliyun.com/product/nodejs?ref=cnode">
          <img class="pic3" src="../../assets/image/bottom-3.png" alt="" /> </a
        >提供应用性能服务。
      </span>
    </div>
    <div>
      <span>
        新手搭建 Node.js 服务器，推荐使用无需备案的<a
          href="https://www.digitalocean.com/"
        >
          DigitalOcean(https://www.digitalocean.com)
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottom",
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
.top {
  font-weight: bold;
}
.bottom {
  font-size: 20px;
  div {
    margin-bottom: 25px;
  }
}
.pic1 {
  wclassth: 135px;
  height: 27px;
}
.pic2 {
  wclassth: 200px;
  height: 50px;
}
.pic3 {
  wclassth: 245px;
  height: 75px;
}
</style>
