import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="Just a bit about myself">
            <h1>The about page</h1>
        </Layout>
    )
}

export const Head = () => <Seo title="About" />

export default AboutPage