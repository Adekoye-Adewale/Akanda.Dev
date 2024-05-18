
export const metadata = {
    title: "About Akanda Dev",
    alternates: {
        canonical: `/about-akanda`,
      },
};

export default function Layout({ children }) {
    return (
        <>
            <body>
                { children }
            </body>
        </>
    )
}
