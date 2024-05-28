import { notFound } from 'next/navigation';
import { articleContents, client } from "@/app/api/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BlogHero } from '@/components/blog/hero';
import BlogBody from "@/components/blog/body";
import CtaWrap from '@/components/siteFooter/ctaWrap';

export async function getStaticPaths() {
    const articleContents = await client.getEntries({content_type: 'blog',});
    const paths = articleContents.items.map((item) => ({
        params: { title: item.fields.slug }
    }));
    
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const articleContents = await client.getEntries({content_type: 'blog', 'fields.slug': params.title,});

    const blogContent = articleContents.items.fields.find(
        (content) => content.slug === params.title
    );

    console.log("getStatic::", blogContent);

    if (!blogContent) {
        return { notFound: true };
    }

    return {
        props: { blogContent },
        revalidate: 60,
    };
}

export default function SingleBlogPage({ params }) {

    const blogContent = articleContents.items.find(
        (content) => content.fields.slug === params.title
    );

    // if (!blogContent || !blogContent.fields) {
    //     return redirect("/not-found");
    // }

    if (!blogContent || !blogContent.fields) {
        notFound();
        return null; 
    }
 
    const { img, title, type, category, datePublished, content } = blogContent?.fields;

    // const img = blogContent?.fields?.img
    // const title = blogContent?.fields?.title
    // const type = blogContent?.fields?.type
    // const category = blogContent?.fields?.category
    // const datePublished = blogContent?.fields?.datePublished
    // const content = blogContent?.fields?.content
    
    const imageProps = img?.fields?.file ? {
        src: img.fields.file.url.replace('//', 'https://'),
        alt: img.fields.description || '',
        title: img.fields.title || '',
        height: img.fields.file.details.image.height,
        width: img.fields.file.details.image.width,
    } : {};
    
    const contentCopy = documentToReactComponents(content)

    return (
        <main>
            <BlogHero 
                img={imageProps} 
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
