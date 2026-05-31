"use client";
import { useEffect } from "react";
import GoldenSection from "../golden-section/GoldenSection";
import DetailSection from "./DetailSection";
import HeroSection from "./HeroSection";
import "./trend-details.css";
import useTrends from "@/hooks/useTrends";

export default function TrendDetailsIndex({
    trendId
}: { trendId: string }) {
    const {
        getTrendDetails,
        trendDetail,
        isDetailLoading,
        trendNotFound,
        trendsList,
        handleGetAllTrends,
        pagination,
        page,
        limit,
        isLoading,
        isLoadingMore
    } = useTrends();

    useEffect(() => {
        if (trendId) {
            getTrendDetails(trendId);
        }
    }, [trendId]);

    const loadMoreTrends = () => {
        const nextPage = (pagination?.currentPage || page) + 1;
        if (pagination?.hasNextPage) {
            handleGetAllTrends(nextPage, pagination?.limit || limit, true);
        }
    };

    if (!isDetailLoading && trendNotFound) {
        return (
            <div className="section-frame trends-not-found-base">
                <div className="section-frame">
                    <h2>Trend does not exist</h2>
                    <p>The requested trend was not found. Please check the URL or choose another trend.</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <HeroSection hero={trendDetail ? {
                _id: trendDetail._id,
                title: trendDetail.title,
                subHeading: trendDetail.subHeading,
                description: trendDetail.description
            } : undefined} isLoading={isDetailLoading} />

            <DetailSection
                content={trendDetail?.content}
                isLoading={isDetailLoading}
                trendsList={trendsList}
                pagination={pagination}
                isTrendListLoading={isLoading}
                isTrendListLoadingMore={isLoadingMore}
                onLoadMoreTrends={loadMoreTrends}
            />

            <GoldenSection
                title="Better Insight Leads to Better Decisions"
                para="Whether you are building a team, considering a move, or trying to understand where the market is heading, the right insight can create a real advantage. ReqKing shares practical thinking shaped by commercial reality, talent trends, and growth-stage experience across demanding sectors. Reach us to know more."
                buttonText="Reach us to know more"
                onButtonClick={() => ""}
            />
        </>
    )
}
