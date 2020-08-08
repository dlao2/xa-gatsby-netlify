import React from "react"
import { graphql } from "gatsby"
import BaseBanner from "../components/BaseBanner"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={ data.title } />
      <div className="flex">
        <div className="flex-1">
          <BaseBanner
            className="h-128"
            text="About"
            img={ data.background_photo }
          />
        </div>
      </div>

      <section className="my-10 pb-10">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 pl-32 lg:px-32 lg:-mr-32 mt-10 z-40 text-gray-900" dangerouslySetInnerHTML={{__html: data.our_vision.text}}>
            </div>
            <div className="flex-1 -ml-32 mt-24">
              <img src={ data.our_vision.background_photo } className="rounded" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-lighter">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:px-32 items-center">
            <div className="flex-none">
              <img src={ data.part_2.background_photo } className="rounded" />
            </div>
            <div className="flex-grow text-gray-900" dangerouslySetInnerHTML={{__html: data.part_2.text}}>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto leading-normal">
          <div className="mx-10">
            <h2 className="text-center py-20 text-6xl">{ data.what_we_believe.title }</h2>
            <div dangerouslySetInnerHTML={{__html: data.what_we_believe.text}}>
            </div>
            
            <h2 className="text-5xl text-center py-10">{ data.the_long_version.title }</h2>
            <div dangerouslySetInnerHTML={{__html: data.the_long_version.text}}>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allFile(filter: {name: {eq: "about"}, sourceInstanceName: {eq: "content"}}) {
    edges {
      node {
        id
        relativePath
        childMarkdownRemark {
          html
          frontmatter {
            title
            background_photo
            our_vision {
              text
              background_photo
            }
            part_2 {
              text
              background_photo
            }
            what_we_believe {
              title
              text
            }
            the_long_version {
              title
              text
            }
          }
        }
      }
    }
  }
}
`
