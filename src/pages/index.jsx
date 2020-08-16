import React from "react"
import { Link, graphql } from "gatsby"
import BaseBanner from "../components/BaseBanner"
import GetConnectedForm from "../components/GetConnectedForm"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={ data.title } />
      <div className="flex lg:h-128 flex-col lg:flex-row">
        <div className="flex-1">
          <BaseBanner
            className="h-64 lg:h-full"
            text="Welcome to Family"
            img={data.heading_left.background_photo}
          />
        </div>
        <div className="flex-1 bg-gray-900 h-full text-white">
          <GetConnectedForm />
        </div>
      </div>

      <section className="py-20 bg-gray-200">
        <div className="container mx-auto flex items-center justify-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zi81EggAN1w" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto">
          <h2 className="text-center py-20 text-6xl">{ data.who_we_are.title }</h2>
          <div className="flex flex-col lg:flex-row px-4 lg:px-0">
            <div className="flex-1 lg:px-32 text-gray-900" dangerouslySetInnerHTML={{__html: data.who_we_are.text}}>
            </div>
            <div className="flex-1">
              <img src={ data.who_we_are.image } className="rounded mt-6 lg:-mt-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-200 flex flex-row justify-center text-blue-600 text-2xl leading-loose" dangerouslySetInnerHTML={{__html: data.section_3.text}}>
      </section>

      <section className="py-20 flex flex-col items-center text-gray-900 text-lg leading-loose" dangerouslySetInnerHTML={{__html: data.section_4.text }}>
      </section>

      <section className="flex flex-col lg:flex-row lg:h-128">
        <div className="flex-1 h-64 lg:h-full bg-center bg-cover" style={ { backgroundImage: 'url(' + data.life_groups.men.background_photo + ')' } }>
          <div className="flex w-full h-full items-center justify-center">
            <Link to="/men">
              <button className="bg-blue-500 p-4 rounded text-white hover:bg-blue-400">{ data.life_groups.men.text }</button>
            </Link>
          </div>
        </div>
        <div className="flex-1 h-64 lg:h-full bg-center bg-cover" style={ { backgroundImage: 'url(' + data.life_groups.women.background_photo + ')' } }>
          <div className="flex w-full h-full items-center justify-center">
            <Link to="/women">
              <button className="bg-blue-500 p-4 rounded text-white hover:bg-blue-400">{ data.life_groups.women.text }</button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
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
    allFile(filter: {name: {eq: "home"}, sourceInstanceName: {eq: "content"}}) {
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
