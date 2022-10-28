import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProjectDetails = ({data, children}) => {
    const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        <Layout>
            <h1>{data.mdx.frontmatter.title}</h1>
            <GatsbyImage image={image} alt={data.mdx.frontmatter.title} />
            <p>GitHub Repo: {data.mdx.frontmatter.git_repo}</p>
            {children}
        </Layout>
    )
}

export const query = graphql`
query findProject($id: String) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        date_posted(formatString: "MMMM D, YYYY")
        git_repo
        live_link
        slug
        title
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }  
`

export const head = ({data}) => <Seo title={data.mdx.frontmatter.title} />

export default ProjectDetails