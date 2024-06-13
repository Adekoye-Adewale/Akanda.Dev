import { notFound } from 'next/navigation';
import { client } from '@/app/api/contentful';
import SingleProjectPage from '@/components/pages/PortfolioPageComponents/singleProjectPage';

export function processWorksContent(content) {
    const fields = content?.fields;
    const img = fields?.projectPreview;
    const system = content?.sys?.id;
    const rawSlug = `${encodeURIComponent(fields?.brandName)}`;
    const projectTechnologies = fields?.projectTechnologies;
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

    // console.log("PaQway", projects.fields.projectTechnologies);

    if (!projects) {
        notFound();
        return null; 
    }

    return processWorksContent(projects);
}

export default async function Page({ params }) {
    const page = await getWorks(params);

    // const allProjectsResponse = await client.getEntries({ content_type: 'portfolio' });
    // const allProjects = allProjectsResponse.items.map(processWorksContent);

    // const relatedProjects = allProjects.filter(
        //      (content) => content.type === page.type && content.id !== page.id
        // );
        
    // console.log("Pats::", page);

    if (!page) {
        return notFound();
    }

    return (
        <>
            <SingleProjectPage 
                params={page}
            />
        </>
    )
}