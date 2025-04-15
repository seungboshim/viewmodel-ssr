import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const GetAxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
GetAxiosInstance.interceptors.request.use(
  (config) => {
    // 요청 전에 실행할 코드
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
GetAxiosInstance.interceptors.response.use(
  (response) => {
    // 응답 데이터 가공
    return response;
  },
  (error) => {
    // 에러 처리
    return Promise.reject(error);
  }
);