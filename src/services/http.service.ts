import axios, { AxiosRequestConfig } from 'axios';

const http = axios.create({
  baseURL: `${process.env.VUE_APP_URL}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

http.interceptors.request.use(
  (axiosRequestConfig: AxiosRequestConfig): AxiosRequestConfig => {
    const key = process.env.VUE_APP_API_KEY;
    axiosRequestConfig.params = {
      ...axiosRequestConfig.params,
      appid: key,
      units: 'metric',
    };
    return axiosRequestConfig;
  },
);

export default http;
