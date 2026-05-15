import { generalEnquiry } from "@/services/enquiries.service";
import { toast } from "@heroui/react";
import { useFormik } from "formik";
import { useState } from "react";

export const initialValues: IGeneralEnquiryForm = {
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    message: ""
}

export default function useGeneralEnquiry() {
    const [isLoading, setIsLoading] = useState(false);

    const formik = useFormik<IGeneralEnquiryForm>({
        initialValues,
        onSubmit: async (val) => {
            try {
                setIsLoading(true);
                const resp = await generalEnquiry(val);
                toast.success(resp?.data?.message || "general enquiry submitted successfully!")
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

interface IGeneralEnquiryForm {
    name: string;
    email: string;
    phoneNumber: string;
    companyName: string;
    message: string;
}