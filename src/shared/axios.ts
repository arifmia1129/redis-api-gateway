import axios, { AxiosInstance } from 'axios';
import config from '../config';

const HttpService = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: { 'content-type': 'application/json' }
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

const AuthService = HttpService(config.url.auth_service);
const CoreService = HttpService(config.url.core_service);
const PaymentServiceReq = HttpService(config.url.payment_service);

export { AuthService, CoreService, HttpService, PaymentServiceReq };
