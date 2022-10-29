import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <div className="app">
      <Layout pageTitle="PHILLIP NEIBAUR">
        <br/>
        <p className="pUnderline">
          FULL
          <br />
          STACK
          <br />
          ENGINEER
          <br />
        </p>
      </Layout>
    </div>
  )
}

export const Head = () => <Seo title='Home'/>

export default IndexPage