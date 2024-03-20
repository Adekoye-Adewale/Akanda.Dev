'use client'
import React from 'react'
import Loading from '../_loading/loading'
import ProjectPage from './page'
 
export default function PageLayout() {
  const [loading, setLoading] = React.useState(false)
 
  React.useEffect(() => {
    setTimeout(() => setLoading(true), 7000);
  }, [])
 
  return (
    <>
      {loading ? (
        <ProjectPage/>
      ) : (
        <Loading/>
      )}
    </>
  )
}