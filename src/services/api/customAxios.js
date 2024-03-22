import axios from "axios";



/**
 * AXIOS INTERCEPTORS, 
 * ini gak cuman bisa buat request interceptors doang, bisa juga intercept response
 * misal kalau token expired otomatis hit ke endpoint refresh token terus set lagi ke localstorage, bebas ini
 * SOURCE:
 * https://axios-http.com/docs/interceptors
 */
const customAxios = axios.create();

/**
 * request interceptors
 */
customAxios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "abc";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customAxios;


