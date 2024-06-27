import {axiosInstance} from "./axiosInstance.ts";
import * as process from "node:process";


export const getFetchData = async () => {
    const response = await axiosInstance.get(import.meta.env.VITE_API_USERS)
    if (!response) throw new Error("네트워크 에러 발생");
    return response.data;
}