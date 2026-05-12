import TrendDetailsIndex from "@/components/trend-details/TrendDetailsIndex";

export default async function TrendDetailsPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    return (
        <TrendDetailsIndex trendId={id} />
    )
}
