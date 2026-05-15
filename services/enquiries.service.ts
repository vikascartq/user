
import axiosInstance from "@/config/axios-instance";

export const generalEnquiry = async (data: GeneralEnquiryPayload) => {
    return axiosInstance.post(`/api/v1/enquiry/general`, data);
};

export const businessEnquiry = async (data: BusinessEnquiryPayload) => {
    return axiosInstance.post(`/api/v1/enquiry/business`, data);
};

export const jobEnquiry = async (data: FormData) => {
    return axiosInstance.post(`/api/v1/enquiry/job`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

interface GeneralEnquiryPayload {
    name: string;
    email: string;
    phoneNumber: string;
    companyName: string;
    message: string;
}

interface BusinessEnquiryPayload {
    name: string;
    email: string;
    contactNumber: string;
    companyName: string;
    service: string;
}