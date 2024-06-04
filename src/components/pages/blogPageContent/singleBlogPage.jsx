import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BlogHero } from '@/components/blog/hero';
import BlogBody from "@/components/blog/body";
import CtaWrap from '@/components/siteFooter/ctaWrap';
import Interact from '@/components/blog/interact';


export default function SingleBlogPage({ params, relatedArticles }) {

    const { img, title: blogTitle, type, category, datePublished, articleCopy, id, sourceLink, articleSource } = params;
    
    const contentCopy = documentToReactComponents(articleCopy);

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
                {...params}
            />
            <BlogBody 
                blog={contentCopy}
                related={relatedArticles}
            />
            <CtaWrap/>
        </main>
    );
}