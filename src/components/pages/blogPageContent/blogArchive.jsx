import Cards from '@/components/blog/cards'
import ArchiveHero from '@/components/blog/hero'
import CtaWrap from '@/components/siteFooter/ctaWrap'

export default function BlogArchive() {
    return (
        <main>
            <ArchiveHero/>
            <section className='container__pad full__size'>
                <Cards/>
            </section>
            <CtaWrap/>
        </main>
    )
}
