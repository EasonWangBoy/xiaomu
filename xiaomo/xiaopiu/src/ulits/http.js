import axios from "axios"

const httpAxios =axios.create({
    timeout:2000,
})

// 添加请求拦截器
httpAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return {
      ...config,
      headers:{
        ...config.headers,
        'Authorization':`Bearer ${window.localStorage.token}`
      }
    }
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
httpAxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
    // let {code}=response.data;
    // if(code===1||response.data.length){
    //     return response.data;
    // }
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default httpAxios;





















































































































