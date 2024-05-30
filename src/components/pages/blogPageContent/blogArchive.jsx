import Cards from '@/components/blog/cards'
import ArchiveHero from '@/components/blog/hero'
import CtaWrap from '@/components/siteFooter/ctaWrap'
import { articlePageCopy } from '@/webContents/blogCopy'

export default function BlogArchive() {

    // console.log('first:', blogContent);

    // const ContentTest = blogContent?.map((content) => {
    //     const fields = content?.fields;
    //     const img = fields?.img;
    //     const system = content?.sys?.id
    
    //     return {
    //         id: system,
    //         title: fields?.title,
    //         slug: fields?.slug,
    //         img: img ? {
    //             src: img.fields.file.url.replace('//', 'https://'),
    //             alt: img.fields.description || '',
    //             title: img.fields.title || '',
    //             height: img.fields.file.details.image.height,
    //             width: img.fields.file.details.image.width,
    //         } : null,
    //     };
    // }) || [];

    // console.log('first:', ContentTest);

    return (
        <main>
            <ArchiveHero/>
            <section 
                className='container__pad full__size'
            >
                <Cards 
                    Contents={articlePageCopy}
                />
            </section>
            <CtaWrap/>
        </main>
    )
}
