import { getAllTrends, getTrendById } from "@/services/trends.service";
import { useEffect, useState } from "react";
export interface ITrendList {
    "_id": string;
    "title": string;
    "subHeading": string;
    "description": string;
    "createdAt": string;
    "updatedAt": string;
}

export interface ITrendContent {
    order: number;
    heading: string;
    description: string;
    list?: string[];
}

export interface ITrendDetail {
    _id: string;
    title: string;
    subHeading: string;
    description: string;
    content?: ITrendContent[];
}

export default function useTrends() {
    const [trendsList, setTrendsList] = useState<ITrendList[]>([]);
    const [page, setPage] = useState<number>(1);
    const [limit] = useState<number>(10);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
    const [pagination, setPagination] = useState<any | null>(null);
    const [trendDetail, setTrendDetail] = useState<ITrendDetail | null>(null);
    const [isDetailLoading, setIsDetailLoading] = useState<boolean>(false);
    const [trendNotFound, setTrendNotFound] = useState<boolean>(false);

    const handleGetAllTrends = async (pageParam: number = 1, limitParam: number = limit, append: boolean = false) => {
        if (pageParam === 1) setIsLoading(true);
        else setIsLoadingMore(true);
        try {
            const resp = await getAllTrends(pageParam, limitParam);
            const trends = resp?.data?.data?.trends || [];
            const pag = resp?.data?.data?.pagination || null;
            setPagination(pag);
            setPage(pag?.currentPage || pageParam);
            if (append && pageParam > 1) {
                setTrendsList((prev) => [...prev, ...trends]);
            } else {
                setTrendsList(trends);
            }
        } finally {
            if (pageParam === 1) setIsLoading(false);
            else setIsLoadingMore(false);
        }
    };

    const getTrendDetails = async (id: string) => {
        setTrendDetail(null);
        setTrendNotFound(false);
        setIsDetailLoading(true);
        try {
            const resp = await getTrendById(id);
            const data = resp?.data?.data || null;
            setTrendDetail(data);
            setTrendNotFound(!data);
            return data;
        } catch (error) {
            setTrendDetail(null);
            setTrendNotFound(true);
            return null;
        } finally {
            setIsDetailLoading(false);
        }
    }

    useEffect(() => {
        handleGetAllTrends(1, limit, false);
    }, [])

    return { trendsList, handleGetAllTrends, getTrendDetails, isLoading, isLoadingMore, page, limit, pagination, trendDetail, isDetailLoading, trendNotFound };
}