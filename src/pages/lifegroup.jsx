import React from "react"
import { graphql } from "gatsby"
import BaseBanner from "../components/BaseBanner"
import BaseMember from "../components/BaseMember"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GetConnectedForm from "../components/GetConnectedForm"

const Lifegroup = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={data.title} />
      <div className="flex">
        <div className="flex-1">
          <BaseBanner
            className="h-128"
            text={data.title}
            img={data.background_photo}
            showColorOverlay={true}
          />
        </div>
      </div>

      <div
        className="flex flex-col my-20 mx-10 justify-center items-center"
        dangerouslySetInnerHTML={{ __html: data.life_group }}
      ></div>

      <div className="flex flex-col py-20 px-10 justify-center items-center bg-gray-300 text-gray-900">
        <GetConnectedForm title="Fill out our connection form if interested!" />
      </div>
    </Layout>
  )
}

export default Lifegroup

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(
      filter: {
        name: { eq: "lifegroup" }
        sourceInstanceName: { eq: "content" }
      }
    ) {
      edges {
        node {
          id
          relativePath
          childMarkdownRemark {
            html
            frontmatter {
              title
              background_photo
              life_group
              student_leaders {
                name
                photo
                biography
              }
            }
          }
        }
      }
    }
  }
`
