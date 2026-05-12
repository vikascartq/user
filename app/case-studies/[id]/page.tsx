import CaseStudyDetailsIndex from "@/components/case-study-details/CaseStudyDetailsIndex"

export default async function CaseStudyDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    return <CaseStudyDetailsIndex caseStudyId={id} />
}