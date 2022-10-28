import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
// import { graphql, Link } from 'gatsby'

const ProjectsPage = ({data}) => {
    return (
        <Layout>
            <h1>Projects Page</h1>
            <article>

            </article>
        </Layout>
    )
}

// export const query = graphql`

// `

export const Head = () => <Seo title="Projects" />

export default ProjectsPage