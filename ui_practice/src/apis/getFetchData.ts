import {axiosInstance} from "./axiosInstance.ts";

export interface Post {
    id: number;
    title: string;
    body: string;
}

export const getFetchData = async () => {
    const response = await axiosInstance.get(import.meta.env.VITE_API_USERS)
    if (!response) throw new Error("네트워크 에러 발생");
    return response.data;
}

export const getPostsData = async (): Promise<Post[]> => {
    const response = await axiosInstance.get(import.meta.env.VITE_API_POST)
    if (!response) throw new Error("네트워크 에러 발생");
    return response.data;
}