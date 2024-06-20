import Image from "next/image"

export const homeHero = `<span class='italic'>In Business</span> <span>of making everyone </span> <div><span>visible</span> <span>on the internet</span></div>`

export const HomeContent = {
    intro: `In the business of putting everyone online.`,
    introAbout: `With a focus on the digital realm, Akanda specializes in website design and development, mobile app development, analytics, and SEO.`,
    about: `Akanda forte is taking industry leaders forward with digital products that focus on and meet their wants and needs.`,
    portfolioTitle: `Akanda.Dev work across many industries`,
    skillTitle: `As an experienced front-end software engineer with a keen eye for detail, Akanda is committed to providing exceptional quality on every project.`,
    skill: [
        {
            title: 'Website Design',
            description: 'We design and develop websites that are easy to use and easy to navigate.',
            since: `2019`
        },
        {
            title: 'Website Design',
            description: 'We design and develop websites that are easy to use and easy to navigate.',
            since: `2019`
        },
        {
            title: 'Website Design',
            description: 'We design and develop websites that are easy to use and easy to navigate.',
            since: `2019`
        },
        {
            title: 'Website Design',
            description: 'We design and develop websites that are easy to use and easy to navigate.',
            since: `2019`
        },
    ],
    whyAkanda: `Creating websites and applications is my passion, and I am dedicated to doing everything in my power to ensure the entire process aligns with your business objectives.`,
    whyAkandaList: [
        {
            title: `High Quality`,
            text: `Creating websites and applications is my passion, and I am dedicated to doing everything in my power to ensure the entire process aligns with your business objectives.`,
            component: ({ img }) => <Image {...img}/>,
            img: {
                src: `/images/High-Quality-Code_adekoye-adewale_Akanda-Dev.png`,
                alt: `High Quality`,
                height: `650`,
                width: `500`,
            }
        },
        {
            title: `Quality Assurance`,
            text: `Creating websites and applications is my passion, and I am dedicated to doing everything in my power to ensure the entire process aligns with your business objectives.`,
            component: ({ img }) => <Image {...img}/>,
            img: {
                src: `/images/opengraphImage.png`,
                alt: `Quality Assurance`,
                height: `650`,
                width: `500`,
            }
        },
        {
            title: `Customer Centric Products`,
            text: `Creating websites and applications is my passion, and I am dedicated to doing everything in my power to ensure the entire process aligns with your business objectives.`,
            component: ({ img }) => <Image {...img}/>,
            img: {
                src: `/images/High-Quality-Code_adekoye-adewale_Akanda-Dev.webp`,
                alt: `Customer Centric Products`,
                height: `650`,
                width: `500`,
            }
        },
        {
            title: `No Bull-Sh*t`,
            text: `Creating websites and applications is my passion, and I am dedicated to doing everything in my power to ensure the entire process aligns with your business objectives.`,
            component: ({ img }) => <Image {...img}/>,
            img: {
                src: `/images/opengraphImage.png`,
                alt: `No Bull-Sh*t`,
                height: `650`,
                width: `500`,
            }
        },
    ],
    faq: {
        title: `Frequently Asked Questions`,
        btn: {
            href: `/`,
            text: `Ask Akanda.Dev`,
        },
        desc: `Got Questions?`,
    },
    cta: {
        title: `Connect With Akanda`,
        description: `Are you ready to elevate your business to new heights? Akanda.Dev specializes in crafting stunning websites that not only captivate your audience but also drive results. As a seasoned website developer with a keen eye for detail, I'm dedicated to delivering unparalleled quality on every project.`,
        desc: `From seamless user experiences to cutting-edge SEO strategies, our services are tailored to help your business thrive in the digital landscape. Let's collaborate to transform your online vision into reality and boost your revenue like never before.`,
    }
}