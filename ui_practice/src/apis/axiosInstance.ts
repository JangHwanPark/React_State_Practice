import axios from "axios";

// Note: Vite 프로젝트에서 환경변수 읽을때는 import.meta.env...로 읽는다.
export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});