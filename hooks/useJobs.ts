import { getAllJobs } from '@/services/jobs.service';
import { useEffect, useState } from 'react';

export default function useJobs() {
    const [jobList, setJobList] = useState<IJobList[]>([]);

    useEffect(() => {
        async function handleGetAllJobs() {
            const resp = await getAllJobs();
            setJobList(resp?.data?.data || []);
        }
        handleGetAllJobs()
    }, [])

    return {
        jobList
    }
}

export interface IJobList {
    _id: string;
    name: string;
    location: string;
    skills: string[];
}