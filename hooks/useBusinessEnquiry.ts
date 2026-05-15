import { businessEnquiry } from "@/services/enquiries.service";
import { toast } from "@heroui/react";
import { useFormik } from "formik";
import { useState } from "react";

export const initialValues: IBusinessEnquiryForm = {
    name: "",
    email: "",
    contactNumber: "",
    companyName: "",
    service: ""
}

export default function useBusinessEnquiry() {
    const [isLoading, setIsLoading] = useState(false);

    const formik = useFormik<IBusinessEnquiryForm>({
        initialValues,
        onSubmit: async (val) => {
            try {
                setIsLoading(true);
                const resp = await businessEnquiry(val);
                toast.success(resp?.data?.message || "business enquiry submitted successfully!");
                formik.resetForm();
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                throw error;
            }
        }
    });

    return {
        formik,
        isLoading
    }
}

interface IBusinessEnquiryForm {
    name: string;
    email: string;
    contactNumber: string;
    companyName: string;
    service: string;
}