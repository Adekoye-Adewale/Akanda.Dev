import { client } from "@/lib/contentful";

export async function getStaticProps({ params }) {
  try {
      console.log('Fetching data for slug:', params.title); // Debugging statement

      const res = await client.getEntries({
          content_type: 'blog',
          'fields.slug': params.title,
      });

      console.log('Contentful response:', JSON.stringify(res, null, 2)); // Debugging statement

      if (!res || !res.items || res.items.length === 0) {
          console.error('No blog content found for slug:', params.title); // Debugging statement
          return { notFound: true };
      }

      const blogContent = res.items[0];

      console.log('Blog content found:', JSON.stringify(blogContent, null, 2)); // Debugging statement

      return {
          props: { blogContent },
          revalidate: 60,
      };
  } catch (error) {
      console.error('Error fetching blog content:', error); // Debugging statement
      return { notFound: true };
  }
}

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: 'blog' });
  const paths = res.items.map((item) => ({
      params: { title: item.fields.slug }
  }));

  console.log('Generated paths:', paths); // Debugging statement

  return { paths, fallback: false };
}