import { notFound } from 'next/navigation';
import { client } from '@/app/api/contentful';
import { SingleBlogPage } from '@/components/pages/blogPageContent'

function sanitizeSlug(slug) {
    return slug.replace(/%20/g, '-')
               .replace(/%3A/g, '-') 
               .replace(/%3F/g, '-')  
               .replace(/[^a-zA-Z0-9-]/g, '-') 
               .replace(/-+/g, '-')        
               .replace(/^-|-$/g, '')
               .toLowerCase();
}

function processBlogContent(content) {
    const fields = content?.fields;
    const rawSlug = `${encodeURIComponent(fields?.title)}`;
    const slug = sanitizeSlug(rawSlug);
    const img = fields?.img;
    const blogCopy = fields?.content;
    const system = content?.sys?.id;
    const datePublished = new Date(fields?.datePublished).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

    return {
        id: system,
        title: fields?.title,
        slug: `/blog/${slug}`,
        type: fields?.type,
        category: fields?.category,
        articleSource: fields?.articleSource,
        sourceLink: fields?.sourceLink,
        datePublished: datePublished,
        articleCopy: blogCopy,
        img: img ? {
            src: img.fields.file.url.replace('//', 'https://'),
            alt: img.fields.description || '',
            title: img.fields.title || '',
            height: img.fields.file.details.image.height,
            width: img.fields.file.details.image.width,
        } : null,
        content
    };
}

export async function generateStaticParams() {
    const articleContents = await client.getEntries({ content_type: 'blog' });
    const paths = articleContents.items.map((item) => ({
        title: item.fields.slug
    }));

    return paths;
}

export async function getPost(params) {
    const { title } = params;
    const articleContents = await client.getEntries({
        content_type: 'blog',
        'fields.slug': title,
    });
    
    const blogContent = articleContents.items.find(
        (item) => item.fields.slug === title
    );

    if (!blogContent) {
        notFound();
        return null; 
    }

    return processBlogContent(blogContent);
}

export default async function Page({ params }) {
    const post = await getPost(params);

    const allArticlesResponse = await client.getEntries({ content_type: 'blog' });
    const allArticles = allArticlesResponse.items.map(processBlogContent);
 
    const relatedArticles = allArticles.filter(
         (content) => content.category === post.category && content.id !== post.id
    );

    if (!post) {
        return notFound();
    }

    return (
        <>
            <SingleBlogPage 
                params={post}
                relatedArticles={relatedArticles}
            />
        </>
    )
}
