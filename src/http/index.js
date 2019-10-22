// 用来封装发送请求
import axios from "axios";
import qs from "qs";

// 这个方法只能用于 post请求参数为键值对的情况
export default {
  // 处理get和post请求
  // get只传一个参数(请求路径)
  // post传两个参数(请求路径, 请求参数)
  req(...params) {
    // get
    if (params.length === 1) {
      return axios.get(params[0]);
    }
    // post
    // qs是处理post请求参数 相当于把参数序列化
    if (params.length === 2) {
      return axios.post(params[0], qs.stringify(params[1]));
    }
  }
};
