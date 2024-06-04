import * as Contentful from "contentful";

export const client = Contentful.createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID,
});

const response = await client.getEntry(process.env.ENTRY_ID);
export const articleContents = await client.getEntries({content_type: 'blog',});
