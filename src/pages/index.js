import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <div className="app">
      <Layout pageTitle="Welcome">
        <h2>This still works!</h2>
      </Layout>
    </div>
  )
}

export const Head = () => <Seo title='Home'/>

export default IndexPage