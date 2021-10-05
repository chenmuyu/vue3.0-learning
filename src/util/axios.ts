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

export { axios };
