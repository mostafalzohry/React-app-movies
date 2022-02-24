import axios from "axios";
import { changeLoader } from "../store/actions/loader";
import store from "../store/store";


export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie"
})


axiosInstance.interceptors.request.use(function (config) {
  console.log(config, "config INTERCEPTOR")
  config.headers["AUTHORIZATION"] = "hgvgvgvhgvdyfhsvdf"
  store.dispatch(changeLoader(true))
  return config;
}, function (error) {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
  store.dispatch(changeLoader(false))
  return response;
}, function (error) {
  return Promise.reject(error);
});

