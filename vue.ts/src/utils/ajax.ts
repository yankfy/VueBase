import axios from 'axios';
// import router from '@/router';
// import { Loading } from 'element-ui';

// 添加请求拦截器
axios.interceptors.request.use(config => {
  const path: any = config.url;
  // const baseUrl = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_URL : '';
  const baseUrl = '';
  config.url = `${baseUrl}${config.url}`;
  if (!config.url.includes('api/nextTask')) {
    // showFullScreenLoading();
  }
  return config;
},
  error => {
    console.log(error);
  });

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  (res: any) => {
    if (!res.config.url.includes('api/nextTask')) {
    //   tryHideFullScreenLoading();
    }
    return res;
  },
  (error: any) => {
    console.log(error);
  }
);
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.withCredentials = true;

export default axios;
