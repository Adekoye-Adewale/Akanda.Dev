import { SingleBlogPage } from '@/components/pages/blogPageContent'

export default function page({ params }) {
    return (
        <>
            <SingleBlogPage 
                params={params}
            />
        </>
    )
}
