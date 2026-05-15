import { jobEnquiry } from '@/services/enquiries.service'
import { toast } from '@heroui/react'
import { useFormik } from 'formik'
import { useState } from 'react'

const initialValues: IJobEnquiry = {
    name: '',
    email: '',
    whatsAppNumber: '',
    companyName: '',
    jobTitle: '',
    expectedSalary: '',
    currentLocation: '',
    interestedJobTitle: '',
    workExperienceInBrief: '',
    cv: null
}

export default function useJobEnquiry() {
    const [isLoading, setIsLoading] = useState(false);

    const formik = useFormik<IJobEnquiry>({
        initialValues,
        onSubmit: async (val) => {
            try {
                setIsLoading(true);
                const formData = new FormData;
                formData.append("name", val?.name);
                formData.append("email", val?.email);
                formData.append("whatsAppNumber", val?.whatsAppNumber);
                formData.append("companyName", val?.companyName);
                formData.append("jobTitle", val?.jobTitle);
                formData.append("expectedSalary", val?.expectedSalary);
                formData.append("currentLocation", val?.currentLocation);
                formData.append("interestedJobTitle", val?.interestedJobTitle);
                formData.append("workExperienceInBrief", val?.workExperienceInBrief);
                if (val?.cv) formData.append("cv", val?.cv);

                const resp = await jobEnquiry(formData);
                toast.success(resp?.data?.message || "job enquiry submitted successfully!");
                formik.resetForm();
                setIsLoading(false);

            } catch (error) {
                setIsLoading(false);
                throw error;
            }
        }
    })
    return {
        formik,
        isLoading
    }
}


interface IJobEnquiry {
    name: string;
    email: string;
    whatsAppNumber: string;
    companyName: string;
    jobTitle: string;
    expectedSalary: string;
    currentLocation: string;
    interestedJobTitle: string;
    workExperienceInBrief: string;
    cv: File | null;
}