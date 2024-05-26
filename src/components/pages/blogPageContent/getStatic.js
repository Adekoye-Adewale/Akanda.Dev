import { client } from "@/lib/contentful";

export async function getStaticProps({ params }) {
    try {
        const entries = await client.getEntries({
            content_type: 'blog',
            'fields.slug': params.title,
        });

        if (!entries.items.length) {
            return {
                redirect: {
                destination: "/not-found",
                permanent: false,
                },
            };
        }

        const blogContent = entries.items[0].fields;

        return {
            props: {
                blogContent,
            },
            revalidate: 1, // Optional: Add revalidation to keep content updated
            };
    } catch (error) {
        console.error("Error fetching data from Contentful:", error);
        return {
            redirect: {
                destination: "/not-found",
                permanent: false,
            },
        };
    }
}

export async function getStaticPaths() {
  try {
    const entries = await client.getEntries({
      content_type: 'blog',
    });

    const paths = entries.items.map((item) => ({
      params: { title: item.fields.slug },
    }));

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    console.error("Error fetching paths from Contentful:", error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}
