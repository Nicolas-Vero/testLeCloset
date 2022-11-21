import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

export type ApiInstance = AxiosInstance;
export type ApiResponse = AxiosResponse;

function apiInstance(
  baseURL: string,
  options: AxiosRequestConfig = {},
): AxiosInstance {
  const instance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
      // @xxx some headers here
    },
    ...options,
  });

  return instance;
}

export function apiRest(baseURL: string): ApiInstance {
  return apiInstance(baseURL);
}
