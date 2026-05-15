
import axiosInstance from "@/config/axios-instance";

export const getAllCandidate = async () => {
    return axiosInstance.get(`/api/v1/candidate/all`);
};
