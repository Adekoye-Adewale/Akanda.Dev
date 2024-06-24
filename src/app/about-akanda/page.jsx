import AboutPageComponent from "@/components/aboutPage";

export const metadata = {
    title: "About Akanda Dev",
    alternates: {
        canonical: `/about-akanda`,
    },
};

export default function AboutPage() {
    
    return (
        <main>
            <AboutPageComponent/>
            {/* <div className='grid__center full__size'>
                <h1>
                    About
                </h1>
            </div> */}
        </main>
    )
}
