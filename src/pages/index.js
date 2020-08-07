import React from "react"
import { Link, graphql } from "gatsby"

const Home = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  console.log(data)
  return (
    <div>
      <p>{ data.title }</p>
      <p className="text-3xl bg-red-400">{ data.heading_left.title }</p>
    </div>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: {name: {eq: "home"}}) {
      edges {
        node {
          id
          relativePath
          childMarkdownRemark {
            html
            frontmatter {
              title
              date
              description
              heading_left {
                title
                background_photo
              }
              section_1 {
                title
                text
              }
              who_we_are {
                title
                text
                image
              }
              section_3 {
                title
                text
              }
              section_4 {
                text
                title
              }
              life_groups {
                men {
                  text
                  background_photo
                }
                women {
                  text
                  background_photo
                }
              }
            }
          }
        }
      }
    }
  }
`
