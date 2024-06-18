import Script from "next/script";
import { generateMetadata } from './page';

export default async function Layout({ children, params }) {
    const { schema } = await generateMetadata({params});
    return (
        <>
            <Script
                id="portfolio-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schema)
                }}
            />
            <main>
                {children}
            </main>
        </>
    );
}