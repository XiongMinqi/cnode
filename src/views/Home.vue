<template>
  <div class="title">
    <div class="top"><Top /></div>
    <div class="zhongjian">
      <div class="center">
        <div class="left"><Left /></div>
        <div class="right"><Right /></div>
      </div>
    </div>
    <div class="bottom"><Bottom /></div>
  </div>
</template>

<script>
import Top from "../components/Top/Top";
import Left from "../components/Left/Left";
import Right from "../components/Right/Right";
import Bottom from "../components/Bottom/Bottom";
export default {
  name: "Home",
  components: {
    Top,
    Left,
    Right,
    Bottom
  },
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
.title {
  width: 100%;
  background: #444;
  height: 68px;
}
.zhongjian {
  width: 100%;
  background: #e1e1e1;
}
.center {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.bottom {
  width: 90%;
  margin: 0 auto;
  padding-bottom: 5px;
  padding-top: 15px;
}
</style>
