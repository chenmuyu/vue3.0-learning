/*
 * @Description: 
 */
import axios from "axios";

export type Method = "GET" | "PUT" | "POST" | "DELETE";

export interface AxiosRequest {
  baseURL?: "string";
  url: string;
  data?: any;
  params?: any;
  method?: Method;
  headers?: any;
  timeout?: number;
  // responseType?: ResponseType;
}
export interface AxiosResponse {
  data: any;
  headers: any;
  request?: any;
  status: number;
  statusText: string;
  config: AxiosRequest;
}

export interface CustomResponse {
  readonly status: boolean;
  readonly message: string;
  data: any;
  origin?: any;
}

export interface GetDemo {
  id: number;
  str: string;
}

export interface PostDemo {
  id: number;
  list: Array<{
    id: number;
    version: number;
  }>;
}

axios.defaults.withCredentials = true;
axios.defaults.headers["token"] = localStorage.getItem("token");

axios.interceptors.response.use((res) => {
  if (typeof res.data !== "object") {
    return Promise.reject(res);
  }
  if (res.data.code != 0) {
    // if (res.data.message) ElMessage.error(res.data.message);
    // if (res.data.resultCode == 419) {
    //   router.push({ path: "/login" });
    // }
    return Promise.reject(res.data);
  }
  return res.data.data;
});
export { axios };
