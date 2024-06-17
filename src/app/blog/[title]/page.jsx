import Script from "next/script";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
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

export function processBlogContent(content) {
    const fields = content?.fields;
    const rawSlug = `${encodeURIComponent(fields?.title)}`;
    const slug = sanitizeSlug(rawSlug);
    const img = fields?.img;
    const blogCopy = fields?.content;
    const system = content?.sys?.id;
    const seoContent = content?.sys;
    const datePublished = new Date(fields?.datePublished).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

    return {
        id: system,
        title: fields?.title,
        slug: `/blog/${slug}`,
        type: fields?.type,
        category: fields?.category,
        articleSource: fields?.articleSource,
        sourceLink: fields?.sourceLink,
        rawDatePublished: fields?.datePublished,
        datePublished: datePublished,
        articleCopy: blogCopy,
        img: img ? {
            src: img.fields.file.url.replace('//', 'https://'),
            alt: img.fields.description || '',
            title: img.fields.title || '',
            height: img.fields.file.details.image.height,
            width: img.fields.file.details.image.width,
        } : null,
        content,
        seoContent: {
            datePublished: seoContent.createdAt,
            dateModified: seoContent.updatedAt,
        }
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

function extractTextFromReactComponents(components) {
    let textContent = '';
    let skipFirstH2 = true;

    const extractText = (component) => {
        if (typeof component === 'string') {
            textContent += component;
        } else if (Array.isArray(component)) {
            component.forEach(extractText);
        } else if (component.props && component.props.children) {
            if (skipFirstH2 && component.type === 'h2') {
                skipFirstH2 = false;
                return;
            }
            extractText(component.props.children);
        }
    };

    components.forEach(extractText);
    return textContent;
}

export async function generateMetadata({ params }) {
    const post = await getPost(params);

    if (!post) {
        return {
            title: 'Blog Not Found',
            description: 'The requested blog page could not be found.',
        };
    }

    const { title, slug, img, seoContent, articleCopy } = post;
    const contentComponents = documentToReactComponents(articleCopy);
    const contentText = extractTextFromReactComponents(contentComponents);
    let description = contentText.slice(0, 157);
    if (contentText.length > 157) {
        description += '...'; 
    };

    const metadata = {
        title,
        description,
        alternates: {
            canonical: `https://akanda.dev${slug}`,
        },
        openGraph: {
            title,
            description,
            url: `https://akanda.dev${slug}`,
            type: 'article',
            article: {
                publishedTime: seoContent.datePublished,
            },
            images: img ? [
                {
                    url: img.src,
                    alt: img.alt,
                    width: img.width,
                    height: img.height,
                }
            ] : [],
        },
    };

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://akanda.dev${slug}`
        },
        "headline": title,
        "image": img ? `https://akanda.dev${img.src}` : undefined,
        "datePublished": seoContent.datePublished,
        "dateModified": seoContent.dateModified,
        "author": {
            "@type": "Person",
            "name": "Adekoye Adewale"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Akanda Dev",
            "logo": {
                "@type": "ImageObject",
                "url": "https://akanda.netlify.app/_next/image?url=%2Fakanda_dev.png&w=96&q=75"
            }
        },
        "description": description,
        "articleBody": contentText,
    };

    // console.log('sch11', schema );

    return {
        ...metadata,
        schema,
    };
}

export default async function BlogPage({ params }) {
    const { schema } = await generateMetadata({ params });
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
            <head>
                <Script
                    id="blog-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema)
                    }}
                />
            </head>
            <SingleBlogPage 
                params={post}
                relatedArticles={relatedArticles}
            />
        </>
    )
}
