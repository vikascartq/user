
import axiosInstance from "@/config/axios-instance";

export const getAllTestimonial = async () => {
    return axiosInstance.get(`/api/v1/testimonial/all`);
};
