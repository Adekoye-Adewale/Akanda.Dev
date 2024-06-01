import { notFound } from 'next/navigation';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { articlePageCopy } from '@/webContents/blogCopy';
import { BlogHero } from '@/components/blog/hero';
import BlogBody from "@/components/blog/body";
import CtaWrap from '@/components/siteFooter/ctaWrap';
import Interact from '@/components/blog/interact';


export default function SingleBlogPage({ params }) {
    const { title } = params;
    const blogContent = articlePageCopy.find(
        (content) => content.slug.replace('/blog/', '') === title
    );

    if (!blogContent) {
        notFound();
        return null; 
    }

    const { img, title: blogTitle, type, category, datePublished, articleCopy, id, sourceLink, articleSource } = blogContent;
    const contentCopy = documentToReactComponents(articleCopy);

    const relatedArticles = articlePageCopy.filter(
        (content) => content.category === category && content.id !== id
    );

    return (
        <main>
            <BlogHero 
                img={img} 
                title={blogTitle} 
                type={type} 
                category={category} 
                date={datePublished}
            />
            <Interact 
                {...blogContent}
            />
            <BlogBody 
                blog={contentCopy}
                related={relatedArticles}
            />
            <CtaWrap/>
        </main>
    );
}