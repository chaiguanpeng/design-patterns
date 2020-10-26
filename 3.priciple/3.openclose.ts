// 1、开放封闭原则
// 重定向 http:localhost:3000
// result={headers,data}  状态码不是200就报错
import axios from "axios";
let instance = axios.create();
instance.interceptors.request.use(config => {
  if (config.url!.startsWith("http")) {
    config.url = "http://localhost:3000" + config.url;
  }
  return config;
});
instance.interceptors.response.use((response) => {
  if (response.status != 200) {
    return Promise.reject(response);
  }
  return response.data;
});

instance({
  url: "/api/users",
}).then((result) => {
  console.log("result", result);
});
