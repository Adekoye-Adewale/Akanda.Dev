'use client'
import React from 'react'
import Lenis from 'lenis'
import Loading from './_loading/loading'

export default function Template({ children }) {

    const [loading, setLoading] = React.useState(false)
 
    React.useEffect(() => {
        setTimeout(() => setLoading(true), 7000);
    }, [])

    React.useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
                requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return <>
            {loading ? (
                <>
                    {children}
                </>
            ) : (
                <Loading/>
            )}
            
        </>
}