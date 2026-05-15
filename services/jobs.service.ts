
import axiosInstance from "@/config/axios-instance";

export const getAllJobs = async () => {
    return axiosInstance.get(`/api/v1/job/all`);
};
