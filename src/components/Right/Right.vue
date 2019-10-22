<template>
  <div class="right-son">
    <div class="first">
      CNode：Node.js专业中文社区 <br /><br />
      <span>您可以 <a href="">登录</a> 或 注册 , 也可以 </span><br /><br />
      <el-button type="primary">登录</el-button>
    </div>
    <div class="second">
      <div><img src="../../assets/image/right-1.png" alt="" /></div>
      <div><img src="../../assets/image/right-2.png" alt="" /></div>
      <div><img src="../../assets/image/right-3.png" alt="" /></div>
    </div>
    <div class="third">
      <div
        style="background: #f6f6f6 ;
      height: 50px;
      padding: 0 15px 0 15px;
      line-height: 50px"
      >
        无人回复的话题
      </div>
      <div><a href="">如何学习js </a></div>
      <div><a href="">发现一个用node.js做的后台权限管理框架</a></div>
      <div><a href="">请问有谁了解 VuePress JAMStack Headless cms么</a></div>
      <div><a href="">RabbitMQ 消费端服务限流实践</a></div>
      <div><a href="">Alfred 4 Workflow Open in VSCode</a></div>
    </div>
    <div class="forth">
      <div
        style="background: #f6f6f6 ;
      height: 50px;
      padding: 0 15px 0 15px;
      line-height: 50px"
      >
        积分榜 TOP 100 >>
      </div>
      <div>21725&nbsp;&nbsp;i5ting</div>
      <div>15650&nbsp;&nbsp;alsotang</div>
      <div>9350&nbsp;&nbsp;leapon</div>
      <div>9030&nbsp;&nbsp;atian25</div>
      <div>8780&nbsp;&nbsp;jiyinyiyong</div>
      <div>7305&nbsp;&nbsp;yakczh</div>
      <div>6815&nbsp;&nbsp;im-here</div>
      <div>6095&nbsp;&nbsp;DevinXian</div>
      <div>5815&nbsp;&nbsp;chapgaga</div>
      <div>5350&nbsp;&nbsp;magicdawn</div>
    </div>
    <div class="fixth">
      <div
        style="background: #f6f6f6 ;
      height: 50px;
      padding: 0 15px 0 15px;
      line-height: 50px"
      >
        友情社区
      </div>
      <div><img src="../../assets/image/right-4.png" alt="" /></div>
      <div><img src="../../assets/image/right-5.png" alt="" /></div>
      <div><img src="../../assets/image/right-6.png" alt="" /></div>
      <div><img src="../../assets/image/right-7.png" alt="" /></div>
    </div>
    <div class="sixth">
      <div
        style="background: #f6f6f6 ;
      height: 50px;
      padding: 0 15px 0 15px;
      line-height: 50px"
      >
        客户端二维码
      </div>
      <div style="margin: 0 auto">
        <img src="../../assets/image/erweima.png" alt="" />
      </div>
      <div style="text-align: center">客户端源码地址</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Right",
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
.right-son {
  font-size: 22px;
}
.first {
  background: white;
  text-align: left;
  margin-bottom: 25px;
  padding: 15px;
  span {
    font-size: 17px;
    color: gray;
  }
}
.second {
  padding: 15px 15px 0 15px;
  padding-bottom: 5px;
  margin-bottom: 25px;
  img {
    width: 390px;
    height: 100px;
    margin: 0;
    margin-bottom: 10px;
  }
  background: white;
}
.third {
  div {
    padding: 15px 15px 0 15px;
    margin-bottom: 15px;
  }
  a {
    color: black;
    text-decoration: none;
  }
  padding-bottom: 15px;
  background: white;
  margin-bottom: 25px;
  overflow: hidden;
}
.forth {
  div {
    font-size: 17px;
    padding: 15px 15px 0 15px;
    margin-bottom: 20px;
  }
  padding-bottom: 15px;
  background: white;
  margin-bottom: 25px;
}
.fixth {
  div {
    padding: 15px 15px 0 15px;
  }
  img {
    width: 191px;
  }
  padding-bottom: 15px;
  background: white;
  margin-bottom: 25px;
}
.sixth {
  div {
    padding: 15px 15px 0 15px;
  }
  img {
    width: 280px;
    margin-left: 50px;
  }
  padding-bottom: 15px;
  background: white;
  margin-bottom: 25px;
}
</style>
