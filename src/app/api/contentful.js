import * as Contentful from "contentful";

export const client = Contentful.createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID,
});

export const fetchContent = async () => {
    try {
        const response = await client.getEntry(process.env.ENTRY_ID);

        const articleContents = await client.getEntries({ content_type: 'blog' });

        const portfolioContents = await client.getEntries({ content_type: 'portfolio' });

        return {
            entry: response,
            blog: articleContents,
            portfolio: portfolioContents,
        };
    } catch (error) {
        console.error("Error fetching content from Contentful:", error);
        throw new Error("Content fetch failed");
    }
};

export const getStaticProps = async () => {
    const content = await fetchContent();

    return {
        props: {
            entry: content.entry,
            blog: content.blog,
            portfolio: content.portfolio,
        },
        revalidate: 60,
    };
};