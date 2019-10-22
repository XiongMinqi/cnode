<template>
  <div class="login">
    <div>用户名： <input type="text" /></div>
    <div>密码： <input type="text" /></div>
    <div><button>登录</button></div>
  </div>
</template>

<script>
export default {
  name: "Login",
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
.login {
  width: 500px;
  height: 300px;
  background: #888888;
  align-items: center;
  margin: 0 auto;
  div {
    margin-bottom: 35px;
    input {
      width: 300px;
      height: 38px;
      border: 1px solid black;
    }
  }
}
    button{
        width: 100px;
        height: 40px;
        background: #80bd01;
        font-size: 18px;
    }
</style>
