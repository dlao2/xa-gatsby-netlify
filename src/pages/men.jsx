import React from "react"
import { graphql } from "gatsby"
import BaseBanner from "../components/BaseBanner"
import BaseMember from "../components/BaseMember"
import Layout from "../components/layout"

const Men = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <div className="flex">
        <div className="flex-1">
          <BaseBanner
            className="h-128"
            text={ data.title }
            img={ data.background_photo }
          />
        </div>
      </div>

      <div className="flex flex-col my-20 mx-10 justify-center items-center" dangerouslySetInnerHTML={{__html: data.life_group}}>
      </div>

      <div className="container mx-auto mb-24">
        <div className="max-w-screen-xl flex flex-col lg:flex-row flex-wrap mx-auto justify-center">
          {
            data.student_leaders.map(member => 
              <div className="flex flex-col lg:flex-row items-center mb-10 py-10" key={member.name}>
                <div className="flex-none px-6">
                  <BaseMember member={member}/>
                  <h3 className="text-center pt-3 text-gray-900 font-semibold font-sans">{ member.name }</h3>
                </div>
                <div className="flex-grow mt-4 lg:-mt-10 mx-10 lg:mx-0 leading-normal">
                { member.biography }
              </div>
              </div>
            )
          }
        </div>
      </div>
    </Layout>
  )
}

export default Men

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allFile(filter: {name: {eq: "men"}, sourceInstanceName: {eq: "content"}}) {
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
