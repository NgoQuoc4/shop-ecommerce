import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import ThumbHero from '../../components/ThumbHero'
import BlogContentSection from './BlogContentSection'

const BlogPage = () => {
    return (
        <main className="main">
            <ThumbHero />
            <BreadCrumb />
            <BlogContentSection />
        </main>
    )
}

export default BlogPage