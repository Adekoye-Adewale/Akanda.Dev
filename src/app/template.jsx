'use client'
import React from 'react'
import Loading from './_loading/loading'

export default function Template({ children }) {

    const [loading, setLoading] = React.useState(false)
 
    React.useEffect(() => {
        setTimeout(() => setLoading(true), 7000);
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