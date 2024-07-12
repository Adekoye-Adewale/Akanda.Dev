import TabContent from "@/components/tab/tabContent";
import Image from "next/image";

export const Tabs = [
    {
        title: 'tab1',
        label: 'Web Development',
        component: ({ img, text, link }) => <TabContent img={img} text={text} link={link} />,
        comp: ({ img }) => <Image {...img}/>,
        img: {
            src: `/images/web-development.webp`,
            alt: `Web Development`,
            title: `Web Development`,
            width: `600`,
            height: `473`,
        },
        text: `When it comes to web design, Akanda is the expert. I build websites using major web technologies & frameworks for content management systems (e.g. WordPress, Wix, Webflow, Shopify…) and custom coded web applications.`,
        link: {
            href: `/`,
            title: `Start your development now`,
            target: `_blank`,
        },
    },
    {
        title: 'tab2',
        label: 'E-Commerce',
        component: ({ img, text, link }) => <TabContent img={img} text={text} link={link} />,
        comp: ({ img }) => <Image {...img}/>,
        img: {
            src: `/images/e-commerce.webp`,
            alt: `E-Commerce`,
            title: `E-Commerce`,
            width: `600`,
            height: `431`,
        },
        text: `Akanda provides specialized e-commerce web app development services to large global and SME clients, integrating design and dedicated systems, built around the user's requirements while providing the best consumer experience (CX).`,
        link: {
            href: `/`,
            title: `Build your online store now`,
            target: `_blank`,
        },
    },
    {
        title: 'tab3',
        label: 'Search Engine Optimization',
        component: ({ img, text, link }) => <TabContent img={img} text={text} link={link} />,
        comp: ({ img }) => <Image {...img}/>,
        img: {
            src: `/images/search-engine-optimization.webp`,
            alt: `Search Engine Optimization`,
            title: `Search Engine Optimization`,
            width: `600`,
            height: `418`,
        },
        text: `Akanda will continuously optimize digital presence for your brand and business, to keep you on search engine’s first page, resulting in potential clients and customers easily finding your website when your services are needed.`,
        link: {
            href: `/`,
            title: `Improve your website google ranking now`,
            target: `_blank`,
        },
    },
    {
        title: 'tab4',
        label: 'Web Analytics and User Tracking',
        component: ({ img, text, link }) => <TabContent img={img} text={text} link={link} />,
        comp: ({ img }) => <Image {...img}/>,
        img: {
            src: `/images/web-analytics-and-user-tracking.webp`,
            alt: `Web Analytics and User Tracking`,
            title: `Web Analytics and User Tracking`,
            width: `600`,
            height: `315`,
        },
        text: `User tracking is an integral part of lead generation and targeted marketing while running Ads and campaigns. With the professional use of Google Tag Manager, Facebook pixel, Snapchat pixel, and Pinterest pixel, Akanda ensures you no longer waste any extra penny to reach the right audience.`,
        link: {
            href: `/`,
            title: `Boost Ads and campaign results now`,
            target: `_blank`,
        },
    }
];

