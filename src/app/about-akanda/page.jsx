import AboutPageComponent from "@/components/aboutPage";

export const metadata = {
    title: "About Akanda Dev",
    description: "Specializing in creating exceptional digital experiences, Adekoye Adewale (Akanda) is the top pick for all of your website design and development needs.",
    alternates: {
        canonical: `/about-akanda`,
    },
};

export default function AboutPage() {
    
    return (
        <main>
            <AboutPageComponent/>
        </main>
    )
}
