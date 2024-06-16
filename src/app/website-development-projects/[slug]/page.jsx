import Script from "next/script";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { notFound } from 'next/navigation';
import { client } from '@/app/api/contentful';
import SingleProjectPage from '@/components/pages/PortfolioPageComponents/singleProjectPage';

export function processWorksContent(content) {
    const fields = content?.fields;
    const img = fields?.projectPreview;
    const system = content?.sys?.id;
    const rawSlug = `${encodeURIComponent(fields?.brandName)}`;
    const projectTechnologies = fields?.projectTechnologies;
    const datePublished = content?.sys?.createdAt;
    const lastUpdate = content?.sys?.updatedAt;
    const slug = rawSlug.replace(/%20/g, '-')
                        .replace(/%3A/g, '-') 
                        .replace(/%3F/g, '-')  
                        .replace(/[^a-zA-Z0-9-]/g, '-') 
                        .replace(/-+/g, '-')        
                        .replace(/^-|-$/g, '')
                        .toLowerCase();
    const projectDate = new Date(fields?.projectYear).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    const projectYear = new Date(fields?.projectYear);
    const processedImg = img ? {
        src: img.fields.file.url.replace('//', 'https://'),
        alt: img.fields.description || '',
        title: img.fields.title || '',
        height: img.fields.file.details.image.height,
        width: img.fields.file.details.image.width,
    } : null;
    const processedImgList = fields?.imgList?.map(image => ({
        id: image.sys.id,
        src: image.fields.file.url.replace('//', 'https://'),
        alt: image.fields.description || '',
        title: image.fields.title || '',
        height: image.fields.file.details.image.height || '1100',
        width: image.fields.file.details.image.width || '1500',
    })) || [];

    return {
        id: system,
        title: fields?.brandName,
        industry: fields?.industry,
        summary: fields?.summary,
        status: fields?.status,
        date: projectYear,
        projectYear: projectDate,
        type: fields?.projectCategory,
        link: fields?.projectLink,
        agency: fields?.agency,
        serviceProvided: fields?.serviceProvided,
        objectiveSummary: fields?.objectiveSummary,
        mainService: fields?.mainService,
        mainDescription: fields?.mainDescription,
        techList: fields?.techList,
        img: processedImg,
        slug: {
            href: `/website-development-projects/${slug}`,
            title: fields?.brandName,
        },
        imgList: processedImgList,
        projectTechnologies: projectTechnologies,
        seoContent: {
            datePublished,
            lastUpdate,
        }
    };
}

export async function generateStaticParams() {
    const pageContents = await client.getEntries({ content_type: 'portfolio' });
    const paths = pageContents.items.map((item) => ({
        slug: item.fields.brandName.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase()
    }));
    // console.log("PaQway", pageContents.items);
    return paths;
}

export async function getWorks(params) {
    const { slug } = params;
    const pageContents = await client.getEntries({
        content_type: 'portfolio',
        // 'fields.brandName': slug,
    });
    
    const projects = pageContents.items.find(
        (item) => item.fields.brandName.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase() === slug
    );

    // console.log("PaQway", projects.sys);

    if (!projects) {
        notFound();
        return null; 
    }

    return processWorksContent(projects);
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
    const work = await getWorks(params);

    if (!work) {
        return {
            title: 'Project Not Found',
            description: 'The requested project page could not be found.',
        };
    }

    const { title, summary, slug, img, agency, seoContent, mainDescription } = work;
    const contentComponents = documentToReactComponents(mainDescription);
    const contentText = extractTextFromReactComponents(contentComponents);
    let description = contentText.slice(0, 157);
    if (contentText.length > 157) {
        description += '...'; 
    };

    const metadata = {
        title,
        description,
        alternates: {
            canonical: `https://akanda.dev${slug?.href}`,
        },
        openGraph: {
            title,
            description,
            url: `https://akanda.dev${slug?.href}`,
            type: 'article',
            article: {
                publishedTime: seoContent?.datePublished,
                modifiedTime: seoContent?.lastUpdate,
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
        "@type": "Project",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://akanda.dev${slug}`,
            "description": summary,
        },
        "headline": title,
        "image": img ? `https://akanda.dev${img.src}` : undefined,
        "datePublished": seoContent?.datePublished,
        "dateModified": seoContent?.lastUpdate,
        "author": {
            "@type": "Person",
            "name": "Adekoye Adewale"
        },
        "publisher": {
            "@type": "Organization",
            "name": agency,
            "logo": {
                "@type": "ImageObject",
                "url": "https://akanda.netlify.app/_next/image?url=%2Fakanda_dev.png&w=96&q=75" 
            }
        },
        "brand": title,
        "description": description
    };

    return {
        ...metadata,
        schema,
    };
}

export default async function ProjectPage({ params }) {
    const { schema } = await generateMetadata({ params });
    const page = await getWorks(params);

    if (!page) {
        return notFound();
    }

    return (
        <>
            <Script
                id="porfolio-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schema)
                }}
            />
            <SingleProjectPage 
                params={page}
            />
        </>
    )
}