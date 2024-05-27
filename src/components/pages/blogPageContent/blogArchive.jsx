import Cards from '@/components/blog/cards'
import ArchiveHero from '@/components/blog/hero'
import CtaWrap from '@/components/siteFooter/ctaWrap'
import { articlePageCopy } from "@/webContents/blogCopy"

export default function BlogArchive() {
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
