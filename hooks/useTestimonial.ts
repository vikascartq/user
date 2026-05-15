import { getAllTestimonial } from '@/services/testimonial.service';
import { useEffect, useState } from 'react';

export default function useTestimonial() {
    const [testimonialList, setTestimonialList] = useState<ITestimonialList[]>([]);

    useEffect(() => {
        async function handleGetAllJobs() {
            const resp = await getAllTestimonial();
            setTestimonialList(resp?.data?.data || []);
        }
        handleGetAllJobs()
    }, [])

    return {
        testimonialList
    }
}


export interface ITestimonialList {
    _id: string;
    name: string;
    role: string;
    description: string;
}