import React, { useState } from "react"
import { graphql } from "gatsby"
import BaseBanner from "../components/BaseBanner"
import BaseMember from "../components/BaseMember"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Staff = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  const [ selectedMember, setSelectedMember ] = useState(data.staff[0]);
  return (
    <Layout>
      <SEO title={ data.title } />
      <div className="flex">
        <div className="flex-1">
          <BaseBanner
            className="h-128"
            text={ data.title }
            img={ data.background_photo }
          />
        </div>
      </div>

      <div className="max-w-screen-xl flex flex-col lg:flex-row flex-wrap mx-auto justify-center">
        {
          data.staff.map(member => 
            <div className="mt-20 m-10" key={member.name}>
              <BaseMember
                member={member}
                selectedMember={selectedMember}
                hoverable={true}
                onClick={ () => setSelectedMember(member)}
              />

              <div className="lg:hidden">
                <h2 className="text-3xl my-3">{ member.name }</h2>
                {
                  member.title
                    && <h3 className="font-sans text-black text-xl my-3">
                      { member.title }
                    </h3>
                }

                <p className="leading-normal">{ member.biography }</p>
              </div>
            </div>
          )
        }
      </div>

      <div className="container mx-auto my-10 hidden lg:block">
        <h2 className="text-4xl">{selectedMember.name }
          {
            selectedMember.title
              && <span className="font-sans text-black text-2xl">
                <span className="mx-4">|</span>
                { selectedMember.title }
              </span>
          }
        </h2>

        <div className="flex flex-row my-10">
          <p className="flex-grow leading-normal pr-6">{ selectedMember.biography }</p>
          <div className="flex-none">
            <img src={selectedMember.bio_photo} className="rounded" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Staff

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allFile(filter: {name: {eq: "staff"}, sourceInstanceName: {eq: "content"}}) {
    edges {
      node {
        id
        relativePath
        childMarkdownRemark {
          html
          frontmatter {
            title
            background_photo
            staff {
              name
              position
              headshot
              biography
              bio_photo
            }
          }
        }
      }
    }
  }
}
`
