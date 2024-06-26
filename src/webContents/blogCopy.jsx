import { fetchContent } from '@/app/api/contentful';

const content = await fetchContent();
const { blog } = content;
const blogContent = blog.items;

export const articlePageCopy = blogContent?.map((content) => {
    const fields = content?.fields;
    const rawSlug = `${encodeURIComponent(fields?.title)}`;
    const slug = sanitizeSlug(rawSlug);
    const img = fields?.img;
    const blogCopy = fields?.content;
    const system = content?.sys?.id;
    const seoContent = content?.sys;
    const datePublished = new Date(fields?.datePublished).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

    return {
        id: system,
        title: fields?.title,
        slug: `/blog/${slug}`,
        type: fields?.type,
        category: fields?.category,
        articleSource: fields?.articleSource,
        sourceLink: fields?.sourceLink,
        datePublished: datePublished,
        articleCopy: blogCopy,
        img: img ? {
            src: img.fields.file.url.replace('//', 'https://'),
            alt: img.fields.description || '',
            title: img.fields.title || '',
            height: img.fields.file.details.image.height,
            width: img.fields.file.details.image.width,
        } : null,
        content,
        seoContent: {
            datePublished: seoContent.createdAt,
            dateModified: seoContent.updatedAt
        }
    };
}) || [];

export function sanitizeSlug(slug) {
    return slug.replace(/%20/g, '-')
               .replace(/%3A/g, '-') 
               .replace(/%3F/g, '-')  
               .replace(/[^a-zA-Z0-9-]/g, '-') 
               .replace(/-+/g, '-')        
               .replace(/^-|-$/g, '')
               .toLowerCase();
}

// ===================================================
// ===================================================
// NEVER REMOVE THIS YOU WILL NEED IT FOR TESTING
// ===================================================
// ===================================================
// export const articlePageCopyOffline = [
//     {
//         id: `0000001`,
//         title: `Google PageSpeed Insight: Why Is My Site (Still) Slow?`,
//         slug: `/blog/google-pagespeed-insight-why-is-my-site-still-slow`,
//         img: {
//             src: `/images/mediatek.png`,
//             alt: `Google PageSpeed Insight: Why Is My Site (Still) Slow`,
//             title: `Google PageSpeed Insight: Why Is My Site (Still) Slow`,
//             width: `1000`,
//             height: `800`,
//         },
//         type: `blog`,
//         category: `Category`,
//         date: `May, 2024`,
//         source: `Medium`,
//         sourceLink: `/`,
//         body: `<h2>Google PageSpeed Insight: Why Is My Site (Still) Slow?</h2>
//         <img src='https://images.ctfassets.net/ago9pp4p48sn/25qMJOooHhY6LAWH1r4npa/63f73c409dc32c12f63ad7c8321aeb30/opengraph-image.png.png' alt='Google PageSpeed Insight: Why Is My Site (Still) Slow'>
//         <p>Lorem ipsum dolor sit amet consectetur. Egestas placerat fermentum sem lorem diam. Diam aenean aenean integer tellus nunc blandit iaculis morbi. Egestas pharetra quis id ornare. At cum metus in id dolor.</p>
//         <h3>Egestas pharetra quis id ornare</h3>
//         <ol>
//             <li>Urna consequat nisl leo mus placerat sed donec vitae sit.</li>
//             <li>Urna consequat nisl leo mus placerat sed donec vitae sit.</li>
//             <li>Urna consequat nisl leo mus placerat sed donec vitae sit.</li>
//             <li>Urna consequat nisl leo mus placerat sed donec vitae sit.</li>
//         </ol>
//         <p>Tellus sollicitudin scelerisque arcu ornare. Ante venenatis consequat phasellus eu amet enim eget purus ipsum. Ultrices adipiscing quisque est vitae. Enim praesent platea mattis phasellus gravida. Risus imperdiet volutpat laoreet faucibus ut amet. Lectus ut eu semper massa purus congue etiam tincidunt. Suscipit gravida velit euismod eget ut tortor. Blandit ornare facilisis sed tristique. Sem tellus enim condimentum urna volutpat laoreet nec risus malesuada. Non aliquam eget et nulla sed porttitor a. Ornare nec turpis rhoncus dictum velit velit. Arcu lectus eros donec nullam diam sed nunc egestas etiam. Id aliquet augue montes nulla.</p>
//         <p>Ac ut tristique tristique ac viverra arcu dignissim. Nunc sollicitudin vel egestas metus ultrices tellus commodo. Aliquam odio dignissim dui diam. Urna consequat nisl leo mus placerat sed donec vitae sit. Bibendum ultricies dictumst pellentesque pharetra massa. Est risus pharetra quisque non at commodo tellus tortor sit. Congue in donec sollicitudin imperdiet nulla enim etiam. Nunc imperdiet id amet pulvinar et eu placerat dolor nisi. Aliquet arcu leo eu vestibulum amet malesuada nec ipsum. Convallis volutpat vel mi vel. Nunc tortor adipiscing proin donec. Tincidunt laoreet mauris ut morbi faucibus faucibus mus.</p>
//         <ul>
//             <li>Urna consequat nisl leo mus placerat sed donec vitae sit.</li>
//             <li>Urna consequat nisl leo mus placerat sed donec vitae sit.</li>
//             <li>Urna consequat nisl leo mus placerat sed donec vitae sit.</li>
//             <li>Urna consequat nisl leo mus placerat sed donec vitae sit.</li>
//         </ul>
//         <p>Facilisi turpis fringilla in egestas venenatis ullamcorper. Risus luctus sed at ullamcorper suspendisse cursus mauris rutrum. At eget egestas nunc est tortor. Quis egestas dignissim justo proin nec amet. <a href='https://adekoye.com.ng'>At mauris magna</a> vulputate quis elementum est at.
//         <p>Odio posuere lectus aliquam tellus quam non tristique sed. Faucibus volutpat nec mattis in et imperdiet faucibus. Ultricies vitae nisl pulvinar senectus eu. Cum lacus purus auctor semper diam facilisi facilisis diam.</p>`,
//     },
//     {
//         id: `0000002`,
//         title: `Building Better & Faster WordPress Sites: The Basic Checklist`,
//         slug: `/blog/building-better-and-faster-wordpress-sites-the-basic-checklist`,
//         img: {
//             src: `/images/mediatek.png`,
//             alt: `Building Better & Faster WordPress Sites: The Basic Checklist`,
//             title: `Building Better & Faster WordPress Sites: The Basic Checklist`,
//             width: `1000`,
//             height: `800`,
//         },
//         type: `blog`,
//         category: `Category`,
//         date: `May, 2024`,
//         source: `Medium`,
//         sourceLink: `/`,
//         body: `Lorem ipsum dolor sit amet consectetur. Egestas placerat fermentum sem lorem diam. Diam aenean aenean integer tellus nunc blandit iaculis morbi. Egestas pharetra quis id ornare. At cum metus in id dolor.
//         Tellus sollicitudin scelerisque arcu ornare. Ante venenatis consequat phasellus eu amet enim eget purus ipsum. Ultrices adipiscing quisque est vitae. Enim praesent platea mattis phasellus gravida. Risus imperdiet volutpat laoreet faucibus ut amet. Lectus ut eu semper massa purus congue etiam tincidunt. Suscipit gravida velit euismod eget ut tortor. Blandit ornare facilisis sed tristique. Sem tellus enim condimentum urna volutpat laoreet nec risus malesuada. Non aliquam eget et nulla sed porttitor a. Ornare nec turpis rhoncus dictum velit velit. Arcu lectus eros donec nullam diam sed nunc egestas etiam. Id aliquet augue montes nulla.
//         Ac ut tristique tristique ac viverra arcu dignissim. Nunc sollicitudin vel egestas metus ultrices tellus commodo. Aliquam odio dignissim dui diam. Urna consequat nisl leo mus placerat sed donec vitae sit. Bibendum ultricies dictumst pellentesque pharetra massa. Est risus pharetra quisque non at commodo tellus tortor sit. Congue in donec sollicitudin imperdiet nulla enim etiam. Nunc imperdiet id amet pulvinar et eu placerat dolor nisi. Aliquet arcu leo eu vestibulum amet malesuada nec ipsum. Convallis volutpat vel mi vel. Nunc tortor adipiscing proin donec. Tincidunt laoreet mauris ut morbi faucibus faucibus mus.
//         Facilisi turpis fringilla in egestas venenatis ullamcorper. Risus luctus sed at ullamcorper suspendisse cursus mauris rutrum. At eget egestas nunc est tortor. Quis egestas dignissim justo proin nec amet. At mauris magna vulputate quis elementum est at.
//         Odio posuere lectus aliquam tellus quam non tristique sed. Faucibus volutpat nec mattis in et imperdiet faucibus. Ultricies vitae nisl pulvinar senectus eu. Cum lacus purus auctor semper diam facilisi facilisis diam.`,
//     },
//     {
//         id: `0000003`,
//         title: `Unleashing the Power of HTML5: A Modern Web Revolution`,
//         slug: `/blog/unleashing-the-power-of-HTML5-a-modern-web-revolution`,
//         img: {
//             src: `/images/mediatek.png`,
//             alt: `Unleashing the Power of HTML5: A Modern Web Revolution`,
//             title: `Unleashing the Power of HTML5: A Modern Web Revolution`,
//             width: `1000`,
//             height: `800`,
//         },
//         type: `blog`,
//         category: `Category`,
//         date: `May, 2024`,
//         source: `Medium`,
//         sourceLink: `/`,
//         body: `Lorem ipsum dolor sit amet consectetur. Egestas placerat fermentum sem lorem diam. Diam aenean aenean integer tellus nunc blandit iaculis morbi. Egestas pharetra quis id ornare. At cum metus in id dolor.
//         Tellus sollicitudin scelerisque arcu ornare. Ante venenatis consequat phasellus eu amet enim eget purus ipsum. Ultrices adipiscing quisque est vitae. Enim praesent platea mattis phasellus gravida. Risus imperdiet volutpat laoreet faucibus ut amet. Lectus ut eu semper massa purus congue etiam tincidunt. Suscipit gravida velit euismod eget ut tortor. Blandit ornare facilisis sed tristique. Sem tellus enim condimentum urna volutpat laoreet nec risus malesuada. Non aliquam eget et nulla sed porttitor a. Ornare nec turpis rhoncus dictum velit velit. Arcu lectus eros donec nullam diam sed nunc egestas etiam. Id aliquet augue montes nulla.
//         Ac ut tristique tristique ac viverra arcu dignissim. Nunc sollicitudin vel egestas metus ultrices tellus commodo. Aliquam odio dignissim dui diam. Urna consequat nisl leo mus placerat sed donec vitae sit. Bibendum ultricies dictumst pellentesque pharetra massa. Est risus pharetra quisque non at commodo tellus tortor sit. Congue in donec sollicitudin imperdiet nulla enim etiam. Nunc imperdiet id amet pulvinar et eu placerat dolor nisi. Aliquet arcu leo eu vestibulum amet malesuada nec ipsum. Convallis volutpat vel mi vel. Nunc tortor adipiscing proin donec. Tincidunt laoreet mauris ut morbi faucibus faucibus mus.
//         Facilisi turpis fringilla in egestas venenatis ullamcorper. Risus luctus sed at ullamcorper suspendisse cursus mauris rutrum. At eget egestas nunc est tortor. Quis egestas dignissim justo proin nec amet. At mauris magna vulputate quis elementum est at.
//         Odio posuere lectus aliquam tellus quam non tristique sed. Faucibus volutpat nec mattis in et imperdiet faucibus. Ultricies vitae nisl pulvinar senectus eu. Cum lacus purus auctor semper diam facilisi facilisis diam.`,
//     },
//     {
//         id: `0000004`,
//         title: `How to Integrate a Carousel into React Applications`,
//         slug: `/blog/How-to-Integrate-a-Carousel-into-React-Applications`,
//         img: {
//             src: `/images/mediatek.png`,
//             alt: `How to Integrate a Carousel into React Applications`,
//             title: `How to Integrate a Carousel into React Applications`,
//             width: `1000`,
//             height: `800`,
//         },
//         type: `blog`,
//         category: `Category`,
//         date: `May, 2024`,
//         source: `Medium`,
//         sourceLink: `/`,
//         body: `Lorem ipsum dolor sit amet consectetur. Egestas placerat fermentum sem lorem diam. Diam aenean aenean integer tellus nunc blandit iaculis morbi. Egestas pharetra quis id ornare. At cum metus in id dolor.
//         Tellus sollicitudin scelerisque arcu ornare. Ante venenatis consequat phasellus eu amet enim eget purus ipsum. Ultrices adipiscing quisque est vitae. Enim praesent platea mattis phasellus gravida. Risus imperdiet volutpat laoreet faucibus ut amet. Lectus ut eu semper massa purus congue etiam tincidunt. Suscipit gravida velit euismod eget ut tortor. Blandit ornare facilisis sed tristique. Sem tellus enim condimentum urna volutpat laoreet nec risus malesuada. Non aliquam eget et nulla sed porttitor a. Ornare nec turpis rhoncus dictum velit velit. Arcu lectus eros donec nullam diam sed nunc egestas etiam. Id aliquet augue montes nulla.
//         Ac ut tristique tristique ac viverra arcu dignissim. Nunc sollicitudin vel egestas metus ultrices tellus commodo. Aliquam odio dignissim dui diam. Urna consequat nisl leo mus placerat sed donec vitae sit. Bibendum ultricies dictumst pellentesque pharetra massa. Est risus pharetra quisque non at commodo tellus tortor sit. Congue in donec sollicitudin imperdiet nulla enim etiam. Nunc imperdiet id amet pulvinar et eu placerat dolor nisi. Aliquet arcu leo eu vestibulum amet malesuada nec ipsum. Convallis volutpat vel mi vel. Nunc tortor adipiscing proin donec. Tincidunt laoreet mauris ut morbi faucibus faucibus mus.
//         Facilisi turpis fringilla in egestas venenatis ullamcorper. Risus luctus sed at ullamcorper suspendisse cursus mauris rutrum. At eget egestas nunc est tortor. Quis egestas dignissim justo proin nec amet. At mauris magna vulputate quis elementum est at.
//         Odio posuere lectus aliquam tellus quam non tristique sed. Faucibus volutpat nec mattis in et imperdiet faucibus. Ultricies vitae nisl pulvinar senectus eu. Cum lacus purus auctor semper diam facilisi facilisis diam.`,
//     },
//     {
//         id: `0000005`,
//         title: `Understanding of React Hooks - useEffect`,
//         slug: `/blog/Understanding-of-React-Hooks-useEffect`,
//         img: {
//             src: `/images/mediatek.png`,
//             alt: `Understanding of React Hooks - useEffect`,
//             title: `Understanding of React Hooks - useEffect`,
//             width: `1000`,
//             height: `800`,
//         },
//         type: `blog`,
//         category: `Category`,
//         date: `May, 2024`,
//         source: `Medium`,
//         sourceLink: `/`,
//         body: `Lorem ipsum dolor sit amet consectetur. Egestas placerat fermentum sem lorem diam. Diam aenean aenean integer tellus nunc blandit iaculis morbi. Egestas pharetra quis id ornare. At cum metus in id dolor.
//         Tellus sollicitudin scelerisque arcu ornare. Ante venenatis consequat phasellus eu amet enim eget purus ipsum. Ultrices adipiscing quisque est vitae. Enim praesent platea mattis phasellus gravida. Risus imperdiet volutpat laoreet faucibus ut amet. Lectus ut eu semper massa purus congue etiam tincidunt. Suscipit gravida velit euismod eget ut tortor. Blandit ornare facilisis sed tristique. Sem tellus enim condimentum urna volutpat laoreet nec risus malesuada. Non aliquam eget et nulla sed porttitor a. Ornare nec turpis rhoncus dictum velit velit. Arcu lectus eros donec nullam diam sed nunc egestas etiam. Id aliquet augue montes nulla.
//         Ac ut tristique tristique ac viverra arcu dignissim. Nunc sollicitudin vel egestas metus ultrices tellus commodo. Aliquam odio dignissim dui diam. Urna consequat nisl leo mus placerat sed donec vitae sit. Bibendum ultricies dictumst pellentesque pharetra massa. Est risus pharetra quisque non at commodo tellus tortor sit. Congue in donec sollicitudin imperdiet nulla enim etiam. Nunc imperdiet id amet pulvinar et eu placerat dolor nisi. Aliquet arcu leo eu vestibulum amet malesuada nec ipsum. Convallis volutpat vel mi vel. Nunc tortor adipiscing proin donec. Tincidunt laoreet mauris ut morbi faucibus faucibus mus.
//         Facilisi turpis fringilla in egestas venenatis ullamcorper. Risus luctus sed at ullamcorper suspendisse cursus mauris rutrum. At eget egestas nunc est tortor. Quis egestas dignissim justo proin nec amet. At mauris magna vulputate quis elementum est at.
//         Odio posuere lectus aliquam tellus quam non tristique sed. Faucibus volutpat nec mattis in et imperdiet faucibus. Ultricies vitae nisl pulvinar senectus eu. Cum lacus purus auctor semper diam facilisi facilisis diam.`,
//     },
//     {
//         id: `0000006`,
//         title: `How to add a Feedback Widget to your website`,
//         slug: `/blog/How-to-add-a-Feedback-Widget-to-your-website`,
//         img: {
//             src: `/images/mediatek.png`,
//             alt: `How to add a Feedback Widget to your website`,
//             title: `How to add a Feedback Widget to your website`,
//             width: `1000`,
//             height: `800`,
//         },
//         type: `blog`,
//         category: `Category`,
//         date: `May, 2024`,
//         source: `Medium`,
//         sourceLink: `/`,
//         body: `Lorem ipsum dolor sit amet consectetur. Egestas placerat fermentum sem lorem diam. Diam aenean aenean integer tellus nunc blandit iaculis morbi. Egestas pharetra quis id ornare. At cum metus in id dolor.
//         Tellus sollicitudin scelerisque arcu ornare. Ante venenatis consequat phasellus eu amet enim eget purus ipsum. Ultrices adipiscing quisque est vitae. Enim praesent platea mattis phasellus gravida. Risus imperdiet volutpat laoreet faucibus ut amet. Lectus ut eu semper massa purus congue etiam tincidunt. Suscipit gravida velit euismod eget ut tortor. Blandit ornare facilisis sed tristique. Sem tellus enim condimentum urna volutpat laoreet nec risus malesuada. Non aliquam eget et nulla sed porttitor a. Ornare nec turpis rhoncus dictum velit velit. Arcu lectus eros donec nullam diam sed nunc egestas etiam. Id aliquet augue montes nulla.
//         Ac ut tristique tristique ac viverra arcu dignissim. Nunc sollicitudin vel egestas metus ultrices tellus commodo. Aliquam odio dignissim dui diam. Urna consequat nisl leo mus placerat sed donec vitae sit. Bibendum ultricies dictumst pellentesque pharetra massa. Est risus pharetra quisque non at commodo tellus tortor sit. Congue in donec sollicitudin imperdiet nulla enim etiam. Nunc imperdiet id amet pulvinar et eu placerat dolor nisi. Aliquet arcu leo eu vestibulum amet malesuada nec ipsum. Convallis volutpat vel mi vel. Nunc tortor adipiscing proin donec. Tincidunt laoreet mauris ut morbi faucibus faucibus mus.
//         Facilisi turpis fringilla in egestas venenatis ullamcorper. Risus luctus sed at ullamcorper suspendisse cursus mauris rutrum. At eget egestas nunc est tortor. Quis egestas dignissim justo proin nec amet. At mauris magna vulputate quis elementum est at.
//         Odio posuere lectus aliquam tellus quam non tristique sed. Faucibus volutpat nec mattis in et imperdiet faucibus. Ultricies vitae nisl pulvinar senectus eu. Cum lacus purus auctor semper diam facilisi facilisis diam.`,
//     },
//     {
//         id: `0000007`,
//         title: `Get 100 lighthouse performance score with a React app`,
//         slug: `/blog/Get-100-lighthouse-performance-score-with-a-React-apps`,
//         img: {
//             src: `/images/mediatek.png`,
//             alt: `Get 100 lighthouse performance score with a React app`,
//             title: `Get 100 lighthouse performance score with a React app`,
//             width: `1000`,
//             height: `800`,
//         },
//         type: `blog`,
//         category: `Category`,
//         date: `May, 2024`,
//         source: `Medium`,
//         sourceLink: `/`,
//         body: `Lorem ipsum dolor sit amet consectetur. Egestas placerat fermentum sem lorem diam. Diam aenean aenean integer tellus nunc blandit iaculis morbi. Egestas pharetra quis id ornare. At cum metus in id dolor.
//         Tellus sollicitudin scelerisque arcu ornare. Ante venenatis consequat phasellus eu amet enim eget purus ipsum. Ultrices adipiscing quisque est vitae. Enim praesent platea mattis phasellus gravida. Risus imperdiet volutpat laoreet faucibus ut amet. Lectus ut eu semper massa purus congue etiam tincidunt. Suscipit gravida velit euismod eget ut tortor. Blandit ornare facilisis sed tristique. Sem tellus enim condimentum urna volutpat laoreet nec risus malesuada. Non aliquam eget et nulla sed porttitor a. Ornare nec turpis rhoncus dictum velit velit. Arcu lectus eros donec nullam diam sed nunc egestas etiam. Id aliquet augue montes nulla.
//         Ac ut tristique tristique ac viverra arcu dignissim. Nunc sollicitudin vel egestas metus ultrices tellus commodo. Aliquam odio dignissim dui diam. Urna consequat nisl leo mus placerat sed donec vitae sit. Bibendum ultricies dictumst pellentesque pharetra massa. Est risus pharetra quisque non at commodo tellus tortor sit. Congue in donec sollicitudin imperdiet nulla enim etiam. Nunc imperdiet id amet pulvinar et eu placerat dolor nisi. Aliquet arcu leo eu vestibulum amet malesuada nec ipsum. Convallis volutpat vel mi vel. Nunc tortor adipiscing proin donec. Tincidunt laoreet mauris ut morbi faucibus faucibus mus.
//         Facilisi turpis fringilla in egestas venenatis ullamcorper. Risus luctus sed at ullamcorper suspendisse cursus mauris rutrum. At eget egestas nunc est tortor. Quis egestas dignissim justo proin nec amet. At mauris magna vulputate quis elementum est at.
//         Odio posuere lectus aliquam tellus quam non tristique sed. Faucibus volutpat nec mattis in et imperdiet faucibus. Ultricies vitae nisl pulvinar senectus eu. Cum lacus purus auctor semper diam facilisi facilisis diam.`,
//     },
//     {
//         id: `0000008`,
//         title: `5 Skills Programmers and Developers Should Learn in 2024`,
//         slug: `/blog/5-Skills-Programmers-and-Developers-Should-Learn-in-2024`,
//         img: {
//             src: `/images/mediatek.png`,
//             alt: `5 Skills Programmers and Developers Should Learn in 2024`,
//             title: `5 Skills Programmers and Developers Should Learn in 2024`,
//             width: `1000`,
//             height: `800`,
//         },
//         type: `blog`,
//         category: `Category`,
//         date: `May, 2024`,
//         source: `Medium`,
//         sourceLink: `/`,
//         body: `Lorem ipsum dolor sit amet consectetur. Egestas placerat fermentum sem lorem diam. Diam aenean aenean integer tellus nunc blandit iaculis morbi. Egestas pharetra quis id ornare. At cum metus in id dolor.
//         Tellus sollicitudin scelerisque arcu ornare. Ante venenatis consequat phasellus eu amet enim eget purus ipsum. Ultrices adipiscing quisque est vitae. Enim praesent platea mattis phasellus gravida. Risus imperdiet volutpat laoreet faucibus ut amet. Lectus ut eu semper massa purus congue etiam tincidunt. Suscipit gravida velit euismod eget ut tortor. Blandit ornare facilisis sed tristique. Sem tellus enim condimentum urna volutpat laoreet nec risus malesuada. Non aliquam eget et nulla sed porttitor a. Ornare nec turpis rhoncus dictum velit velit. Arcu lectus eros donec nullam diam sed nunc egestas etiam. Id aliquet augue montes nulla.
//         Ac ut tristique tristique ac viverra arcu dignissim. Nunc sollicitudin vel egestas metus ultrices tellus commodo. Aliquam odio dignissim dui diam. Urna consequat nisl leo mus placerat sed donec vitae sit. Bibendum ultricies dictumst pellentesque pharetra massa. Est risus pharetra quisque non at commodo tellus tortor sit. Congue in donec sollicitudin imperdiet nulla enim etiam. Nunc imperdiet id amet pulvinar et eu placerat dolor nisi. Aliquet arcu leo eu vestibulum amet malesuada nec ipsum. Convallis volutpat vel mi vel. Nunc tortor adipiscing proin donec. Tincidunt laoreet mauris ut morbi faucibus faucibus mus.
//         Facilisi turpis fringilla in egestas venenatis ullamcorper. Risus luctus sed at ullamcorper suspendisse cursus mauris rutrum. At eget egestas nunc est tortor. Quis egestas dignissim justo proin nec amet. At mauris magna vulputate quis elementum est at.
//         Odio posuere lectus aliquam tellus quam non tristique sed. Faucibus volutpat nec mattis in et imperdiet faucibus. Ultricies vitae nisl pulvinar senectus eu. Cum lacus purus auctor semper diam facilisi facilisis diam.`,
//     },
//     {
//         id: `0000009`,
//         title: `The Power of :has() in CSS`,
//         slug: `/blog/the-power-of-has-in-CSS`,
//         img: {
//             src: `/images/mediatek.png`,
//             alt: `The Power of :has() in CSS`,
//             title: `The Power of :has() in CSS`,
//             width: `1000`,
//             height: `800`,
//         },
//         type: `blog`,
//         category: `Category`,
//         date: `May, 2024`,
//         source: `Medium`,
//         sourceLink: `/`,
//         body: `Lorem ipsum dolor sit amet consectetur. Egestas placerat fermentum sem lorem diam. Diam aenean aenean integer tellus nunc blandit iaculis morbi. Egestas pharetra quis id ornare. At cum metus in id dolor.
//         Tellus sollicitudin scelerisque arcu ornare. Ante venenatis consequat phasellus eu amet enim eget purus ipsum. Ultrices adipiscing quisque est vitae. Enim praesent platea mattis phasellus gravida. Risus imperdiet volutpat laoreet faucibus ut amet. Lectus ut eu semper massa purus congue etiam tincidunt. Suscipit gravida velit euismod eget ut tortor. Blandit ornare facilisis sed tristique. Sem tellus enim condimentum urna volutpat laoreet nec risus malesuada. Non aliquam eget et nulla sed porttitor a. Ornare nec turpis rhoncus dictum velit velit. Arcu lectus eros donec nullam diam sed nunc egestas etiam. Id aliquet augue montes nulla.
//         Ac ut tristique tristique ac viverra arcu dignissim. Nunc sollicitudin vel egestas metus ultrices tellus commodo. Aliquam odio dignissim dui diam. Urna consequat nisl leo mus placerat sed donec vitae sit. Bibendum ultricies dictumst pellentesque pharetra massa. Est risus pharetra quisque non at commodo tellus tortor sit. Congue in donec sollicitudin imperdiet nulla enim etiam. Nunc imperdiet id amet pulvinar et eu placerat dolor nisi. Aliquet arcu leo eu vestibulum amet malesuada nec ipsum. Convallis volutpat vel mi vel. Nunc tortor adipiscing proin donec. Tincidunt laoreet mauris ut morbi faucibus faucibus mus.
//         Facilisi turpis fringilla in egestas venenatis ullamcorper. Risus luctus sed at ullamcorper suspendisse cursus mauris rutrum. At eget egestas nunc est tortor. Quis egestas dignissim justo proin nec amet. At mauris magna vulputate quis elementum est at.
//         Odio posuere lectus aliquam tellus quam non tristique sed. Faucibus volutpat nec mattis in et imperdiet faucibus. Ultricies vitae nisl pulvinar senectus eu. Cum lacus purus auctor semper diam facilisi facilisis diam.`,
//     },
// ]