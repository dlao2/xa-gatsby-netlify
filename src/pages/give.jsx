import React from "react"
import { graphql } from "gatsby"

import BaseBanner from "../components/BaseBanner"
import Layout from "../components/layout"

const Give = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex-1">
          <BaseBanner
            className="h-128"
            text={data.title}
            img={data.background_photo}
          />
        </div>
        <div className="flex-1 py-24">
          <div className="container mx-auto leading-normal" dangerouslySetInnerHTML={{__html: data.content}}>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Give

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: {name: {eq: "give"}, sourceInstanceName: {eq: "content"}}) {
      edges {
        node {
          id
          relativePath
          childMarkdownRemark {
            html
            frontmatter {
              title
              background_photo
              content
            }
          }
        }
      }
    }
  }
`
