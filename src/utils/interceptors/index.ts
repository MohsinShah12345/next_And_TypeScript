import axios from "axios";
import { baseUrl } from "../common";
// creating axios instance
export const axiosInterceptors = axios.create({
  baseURL: baseUrl,
});
// creating axios interceptor for Request
// axiosInterceptors.interceptors.request.use(
//   function (config): any {
//     const token = "ert"; // pending
//     if (token) {
//       config.headers.accessToken = token;
//     }
//     return config;
//   },
//   function (error): Promise<any> {
//     return Promise.reject(error);
//   }
// );
// creating axios interceptor for response
// axiosInterceptors.interceptors.response.use(
//   (response): any => {
//     return response;
//   },
//   (error): Promise<any> => {
//     return Promise.reject(error);
//   }
// );

export const apiWrapper = (api: any) => {
  return api;
};
