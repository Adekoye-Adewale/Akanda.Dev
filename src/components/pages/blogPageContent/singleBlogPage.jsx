import { redirect } from "next/navigation";
import { BlogHero } from '@/components/blog/hero'
import CtaWrap from '@/components/siteFooter/ctaWrap'
import { articlePageCopy } from '@/webContents/blogCopy';
import BlogBody from "@/components/blog/body";
import { articleContents } from "@/app/api/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function SingleBlogPage({ params }) {

    const blogContent = articleContents.items.find(
        (content) => content.fields.slug === params.title
    );

    if (!blogContent) {
        return redirect("/not-found");
    }

    
    const { title, type, category, datePublished, content } = blogContent?.fields;
    
    const img = {
        src: blogContent?.fields.img.fields.file.url.replace('//', 'https://'),
        alt: blogContent?.fields.img.fields.description,
        title: blogContent?.fields.img.fields.title,
        height: blogContent?.fields.img.fields.file.details.image.height,
        width: blogContent?.fields.img.fields.file.details.image.width,
    };
    
    const contentCopy = documentToReactComponents(content)
    console.log('bLoGFile::', contentCopy)

    return (
        <main>
            <BlogHero 
                img={img} 
                title={title} 
                type={type} 
                category={category} 
                date={datePublished}
            />
            <BlogBody blog={contentCopy}/>
            <CtaWrap/>
        </main>
    )
}
