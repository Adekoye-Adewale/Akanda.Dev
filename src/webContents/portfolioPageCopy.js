import { fetchContent } from '@/app/api/contentful';
import { sanitizeSlug } from './blogCopy';

const content = await fetchContent();
const { portfolio } = content;
const worksContent = portfolio.items;

export const rawWorksList = worksContent?.map((content) => {
    const fields = content?.fields;
    const img = fields?.projectPreview;
    const system = content?.sys?.id;
    const rawSlug = fields?.brandName;
    const slug = fields?.slug || sanitizeSlug(rawSlug);
    const projectDate = new Date(fields?.projectYear).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    const projectYear = new Date(fields?.projectYear);

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
        img: img ? {
            src: img.fields.file.url.replace('//', 'https://'),
            alt: img.fields.description || '',
            title: img.fields.title || '',
            height: img.fields.file.details.image.height,
            width: img.fields.file.details.image.width,
        } : null,
        slug: {
            href: `/website-development-projects/${slug}`,
            title: fields?.brandName,
        }
        };
}) || [];

export const worksList = rawWorksList.sort((a, b) => b.date - a.date);

export const portfolioHero = `<span>Projects crafted</span> <span>for my clients turn</span> <span>friends and family😉</span>`;

// ===================================================
// ===================================================
// NEVER REMOVE THIS YOU WILL NEED IT FOR TESTING
// ===================================================
// ===================================================
// export const portfolioList = [
//     {
//         id: `0001`,
//         title: `Mediatek NG`,
//         type: `Website Design and Dev`,
//         img: {
//             src: '/images/mediatek.png',
//             alt: 'Mediatek NG - Website Design and Development',
//             title: `Mediatek NG - Website Design and Development`,
//             height: 203,
//             width: 300,
//         },
//         slug: {
//             href: '/mediatek',
//             title: `View more`,
//         }
//     },
//     {
//         id: `0002`,
//         title: `BL Brand`,
//         type: `Website Design and Dev`,
//         img: {
//             src: '/images/mediatek.png',
//             alt: 'Mediatek NG - Website Design and Development',
//             title: `Mediatek NG - Website Design and Development`,
//             height: 203,
//             width: 300,
//         },
//         slug: {
//             href: '/bl-brand',
//             title: `View more`,
//         }
//     },
//     {
//         id: `0003`,
//         title: `Design Glaze`,
//         type: `Ads & Campaign Setup`,
//         img: {
//             src: '/images/mediatek.png',
//             alt: 'Mediatek NG - Website Design and Development',
//             title: `Mediatek NG - Website Design and Development`,
//             height: 203,
//             width: 300,
//         },
//         slug: {
//             href: '/design-glaze',
//             title: `View more`,
//         }
//     },
//     {
//         id: `0004`,
//         title: `SMC Premier Group`,
//         type: `SEO`,
//         img: {
//             src: '/images/mediatek.png',
//             alt: 'Mediatek NG - Website Design and Development',
//             title: `Mediatek NG - Website Design and Development`,
//             height: 203,
//             width: 300,
//         },
//         slug: {
//             href: '/smc-premier-group',
//             title: `View more`,
//         }
//     },
//     {
//         id: `0005`,
//         title: `Reset USA`,
//         type: `Website Design and Dev`,
//         img: {
//             src: '/images/mediatek.png',
//             alt: 'Mediatek NG - Website Design and Development',
//             title: `Mediatek NG - Website Design and Development`,
//             height: 203,
//             width: 300,
//         },
//         slug: {
//             href: '/reset-usa',
//             title: `View more`,
//         }
//     },
//     {
//         id: `0006`,
//         title: `Mediatek NG`,
//         type: `Website Design and Dev`,
//         img: {
//             src: '/images/mediatek.png',
//             alt: 'Mediatek NG - Website Design and Development',
//             title: `Mediatek NG - Website Design and Development`,
//             height: 203,
//             width: 300,
//         },
//         slug: {
//             href: '/bl-brand',
//             title: `View more`,
//         }
//     },
//     {
//         id: `0007`,
//         title: `Mediatek NG`,
//         type: `Website Design and Dev`,
//         img: {
//             src: '/images/mediatek.png',
//             alt: 'Mediatek NG - Website Design and Development',
//             title: `Mediatek NG - Website Design and Development`,
//             height: 203,
//             width: 300,
//         },
//         slug: {
//             href: '/bl-brand',
//             title: `View more`,
//         }
//     },
//     {
//         id: `0008`,
//         title: `Mediatek NG`,
//         type: `Website Design and Dev`,
//         img: {
//             src: '/images/mediatek.png',
//             alt: 'Mediatek NG - Website Design and Development',
//             title: `Mediatek NG - Website Design and Development`,
//             height: 203,
//             width: 300,
//         },
//         slug: {
//             href: '/bl-brand',
//             title: `View more`,
//         }
//     },
//     {
//         id: `0009`,
//         title: `Mediatek NG`,
//         type: `Website Design and Dev`,
//         img: {
//             src: '/images/mediatek.png',
//             alt: 'Mediatek NG - Website Design and Development',
//             title: `Mediatek NG - Website Design and Development`,
//             height: 203,
//             width: 300,
//         },
//         slug: {
//             href: '/bl-brand',
//             title: `View more`,
//         }
//     },
//     {
//         id: `0010`,
//         title: `Mediatek NG`,
//         type: `Website Design and Dev`,
//         img: {
//             src: '/images/mediatek.png',
//             alt: 'Mediatek NG - Website Design and Development',
//             title: `Mediatek NG - Website Design and Development`,
//             height: 203,
//             width: 300,
//         },
//         slug: {
//             href: '/bl-brand',
//             title: `View more`,
//         }
//     },
//     {
//         id: `0011`,
//         title: `Mediatek NG`,
//         type: `Website Design and Dev`,
//         img: {
//             src: '/images/mediatek.png',
//             alt: 'Mediatek NG - Website Design and Development',
//             title: `Mediatek NG - Website Design and Development`,
//             height: 203,
//             width: 300,
//         },
//         slug: {
//             href: '/bl-brand',
//             title: `View more`,
//         }
//     },
//     {
//         id: `0012`,
//         title: `Mediatek NG`,
//         type: `Website Design and Dev`,
//         img: {
//             src: '/images/mediatek.png',
//             alt: 'Mediatek NG - Website Design and Development',
//             title: `Mediatek NG - Website Design and Development`,
//             height: 203,
//             width: 300,
//         },
//         slug: {
//             href: '/bl-brand',
//             title: `View more`,
//         }
//     },
//     {
//         id: `0013`,
//         title: `Mediatek NG`,
//         type: `Website Design and Dev`,
//         img: {
//             src: '/images/mediatek.png',
//             alt: 'Mediatek NG - Website Design and Development',
//             title: `Mediatek NG - Website Design and Development`,
//             height: 203,
//             width: 300,
//         },
//         slug: {
//             href: '/bl-brand',
//             title: `View more`,
//         }
//     },
//     {
//         id: `0014`,
//         title: `Mediatek NG`,
//         type: `Website Design and Dev`,
//         img: {
//             src: '/images/mediatek.png',
//             alt: 'Mediatek NG - Website Design and Development',
//             title: `Mediatek NG - Website Design and Development`,
//             height: 203,
//             width: 300,
//         },
//         slug: {
//             href: '/bl-brand',
//             title: `View more`,
//         }
//     },
//     {
//         id: `0015`,
//         title: `Mediatek NG`,
//         type: `Website Design and Dev`,
//         img: {
//             src: '/images/mediatek.png',
//             alt: 'Mediatek NG - Website Design and Development',
//             title: `Mediatek NG - Website Design and Development`,
//             height: 203,
//             width: 300,
//         },
//         slug: {
//             href: '/bl-brand',
//             title: `View more`,
//         }
//     },
// ]

