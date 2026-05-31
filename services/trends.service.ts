
import axiosInstance from "@/config/axios-instance";

export const getAllTrends = async (page: number, limit: number) => {
    return axiosInstance.get(`/api/v1/trend/list?page=${page}&limit=${limit}`);
};


export const getTrendById = async (id: string) => {
    return axiosInstance.get(`/api/v1/trend/${id}`);
}
