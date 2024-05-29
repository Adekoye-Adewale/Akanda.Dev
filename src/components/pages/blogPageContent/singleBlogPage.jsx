import { notFound } from 'next/navigation';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { articlePageCopy } from "@/webContents/blogCopy";
import { BlogHero } from '@/components/blog/hero';
import BlogBody from "@/components/blog/body";
import CtaWrap from '@/components/siteFooter/ctaWrap';


export default function SingleBlogPage({ params }) {

    const blogContent = articlePageCopy.find(
        (content) => content.slug.replace('/blog/', '') === params.title
    );

    // console.log('Yt1:', blogContent );

    if (!blogContent) {
        notFound();
        return null; 
    }
 
    const { img, title, type, category, datePublished } = blogContent;
    const content = blogContent.articleCopy;

    
    const contentCopy = documentToReactComponents(content)

    return (
        <main>
            <BlogHero 
                img={img} 
                title={title} 
                type={type} 
                category={category} 
                date={datePublished}
            />
            <BlogBody 
                blog={contentCopy} 
                // related={articlePageCopy}
            />
            <CtaWrap/>
        </main>
    )
}