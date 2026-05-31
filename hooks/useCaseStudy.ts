import { getAllCaseStudy, getCaseStudyById } from "@/services/caseStudy.service";
import { useEffect, useState } from "react";
export interface ICaseStudyList {
    "_id": string;
    "title": string;
    "subHeading": string;
    challenge: string;
    "description": string;
    "createdAt": string;
    "updatedAt": string;
}

export interface ICaseStudyContent {
    _id?:string;
    order: number;
    title: string;
    description: string;
    list: IcaseStudyContentList[];
}


export interface IcaseStudyContentList {
    icon: string;
    item: string;
}

export interface ICaseStudyDetail {
    _id: string;
    title: string;
    subHeading: string;
    description: string;
    content?: ICaseStudyContent[];
}

export default function useCaseStudy() {
    const [caseStudyList, setCaseStudyList] = useState<ICaseStudyList[]>([]);
    const [page, setPage] = useState<number>(1);
    const [limit] = useState<number>(10);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
    const [pagination, setPagination] = useState<any | null>(null);
    const [caseStudyDetail, setCaseStudyDetail] = useState<ICaseStudyDetail | null>(null);
    const [isDetailLoading, setIsDetailLoading] = useState<boolean>(false);
    const [caseStudyNotFound, setCaseStudyNotFound] = useState<boolean>(false);

    const handleGetAllCaseStudies = async (pageParam: number = 1, limitParam: number = limit, append: boolean = false) => {
        if (pageParam === 1) setIsLoading(true);
        else setIsLoadingMore(true);
        try {
            const resp = await getAllCaseStudy(pageParam, limitParam);
            const caseStudies = resp?.data?.data?.caseStudies || [];
            const pag = resp?.data?.data?.pagination || null;
            setPagination(pag);
            setPage(pag?.currentPage || pageParam);
            if (append && pageParam > 1) {
                setCaseStudyList((prev) => [...prev, ...caseStudies]);
            } else {
                setCaseStudyList(caseStudies);
            }
        } finally {
            if (pageParam === 1) setIsLoading(false);
            else setIsLoadingMore(false);
        }
    };

    const getCaseStudyDetails = async (id: string) => {
        setCaseStudyDetail(null);
        setCaseStudyNotFound(false);
        setIsDetailLoading(true);
        try {
            const resp = await getCaseStudyById(id);
            const data = resp?.data?.data || null;
            setCaseStudyDetail(data);
            setCaseStudyNotFound(!data);
            return data;
        } catch (error) {
            setCaseStudyDetail(null);
            setCaseStudyNotFound(true);
            return null;
        } finally {
            setIsDetailLoading(false);
        }
    }

    useEffect(() => {
        handleGetAllCaseStudies(1, limit, false);
    }, [])

    return { caseStudyList, handleGetAllCaseStudies, getCaseStudyDetails, isLoading, isLoadingMore, page, limit, pagination, caseStudyDetail, isDetailLoading, caseStudyNotFound };
}