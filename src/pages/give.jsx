import React from "react"
import { graphql } from "gatsby"

import BaseBanner from "../components/BaseBanner"

const Give = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <div>
      <div class="flex flex-col">
        <div class="flex-1">
          <BaseBanner
            className="h-128"
            text={data.title}
            img={data.background_photo}
          />
        </div>
        <div class="flex-1 py-24">
          <div class="container mx-auto leading-normal" dangerouslySetInnerHTML={{__html: data.content}}>
          </div>
        </div>
      </div>
    </div>
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
