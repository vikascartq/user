
import axiosInstance from "@/config/axios-instance";

export const getAllCaseStudy = async (page: number, limit: number) => {
    return axiosInstance.get(`/api/v1/case-study/list?page=${page}&limit=${limit}`);
};


export const getCaseStudyById = async (id: string) => {
    return axiosInstance.get(`/api/v1/case-study/${id}`);
}
