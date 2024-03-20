'use client'
import React from 'react'
import Loading from '../_loading/loading'
import ContactPage from './page'
 
export default function PageLayout() {
  const [loading, setLoading] = React.useState(false)
 
  React.useEffect(() => {
    setTimeout(() => setLoading(true), 7000);
  }, [])
 
  return (
    <>
      {loading ? (
        <ContactPage/>
      ) : (
        <Loading/>
      )}
    </>
  )
}