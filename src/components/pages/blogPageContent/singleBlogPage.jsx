import { redirect } from "next/navigation";
import { BlogHero } from '@/components/blog/hero'
import CtaWrap from '@/components/siteFooter/ctaWrap'
import { articlePageCopy } from '@/webContents/blogCopy';

export default function SingleBlogPage({ params }) {

    const blogContent = articlePageCopy.find(
        (content) => content.slug.replace('/blog/', '') === params.title
    );

    if (!blogContent) {
        return redirect("/not-found");
    }
    
    const { img, title, type, category, date } = blogContent

    return (
        <main>
            <BlogHero 
                img={img} 
                title={title} 
                type={type} 
                category={category} 
                date={date}
            />
            <CtaWrap/>
        </main>
    )
}
