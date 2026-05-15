import { getAllCandidate } from '@/services/candidate.service';
import { useEffect, useState } from 'react';

export default function useCandidate() {
    const [candidateList, setCandidateList] = useState<ICandidateList[]>([]);

    useEffect(() => {
        async function handleGetAllCandidates() {
            const resp = await getAllCandidate();
            setCandidateList(resp?.data?.data || []);
        }
        handleGetAllCandidates()
    }, [])

    return {
        candidateList
    }
}

export interface ICandidateList {
    _id: string;
    role: string;
    description: string;
    skills: string[];
    imageName: string;
}