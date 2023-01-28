import React from "react"
import { Link, graphql } from "gatsby"
import BaseBanner from "../components/BaseBanner"
import GetConnectedForm from "../components/GetConnectedForm"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={data.title} />
      <div className="flex flex-col lg:h-128 lg:flex-row">
        <div className="flex-1">
          <BaseBanner
            className="h-64 lg:h-full"
            text="Welcome to Family"
            img={data.heading_left.background_photo}
          />
        </div>
        <div className="flex-1 h-full text-white bg-gray-900">
          <GetConnectedForm />
        </div>
      </div>

      <section className="pb-20">
        <div className="container mx-auto">
          <h2 className="py-20 text-6xl text-center">
            {data.who_we_are.title}
          </h2>
          <div className="flex flex-col px-4 lg:flex-row lg:px-0">
            <div
              className="flex-1 text-gray-900 lg:px-32"
              dangerouslySetInnerHTML={{ __html: data.who_we_are.text }}
            ></div>
            <div className="flex-1">
              <img
                src={data.who_we_are.image}
                className="mt-6 rounded lg:-mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex flex-row justify-center py-20 text-2xl leading-loose text-blue-600 bg-gray-200"
        dangerouslySetInnerHTML={{ __html: data.section_3.text }}
      ></section>

      <section
        className="flex flex-col items-center py-20 text-lg leading-loose text-gray-900"
        dangerouslySetInnerHTML={{ __html: data.section_4.text }}
      ></section>

      <section className="flex flex-col lg:flex-row lg:h-128">
        <div
          className="flex-1 h-64 bg-center bg-cover lg:h-full"
          style={{
            background:
              "linear-gradient(0deg, rgba(99, 179, 237, 0.5), rgba(99, 179, 237, 0.5))," +
              "url(" +
              data.life_groups.lifegroup.background_photo +
              ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover, cover",
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <Link to="/lifegroup">
              <button className="p-4 text-white bg-blue-500 rounded hover:bg-blue-400">
                {data.life_groups.lifegroup.text}
              </button>
            </Link>
          </div>
        </div>
        {
          // <div
          //   className="flex-1 h-64 bg-center bg-cover lg:h-full"
          //   style={{
          //     backgroundImage:
          //       "url(" + data.life_groups.men.background_photo + ")",
          //   }}
          // >
          //   <div className="flex items-center justify-center w-full h-full">
          //     <Link to="/men">
          //       <button className="p-4 text-white bg-blue-500 rounded hover:bg-blue-400">
          //         {data.life_groups.men.text}
          //       </button>
          //     </Link>
          //   </div>
          // </div>
          // <div
          //   className="flex-1 h-64 bg-center bg-cover lg:h-full"
          //   style={{
          //     backgroundImage:
          //       "url(" + data.life_groups.women.background_photo + ")",
          //   }}
          // >
          //   <div className="flex items-center justify-center w-full h-full">
          //     <Link to="/women">
          //       <button className="p-4 text-white bg-blue-500 rounded hover:bg-blue-400">
          //         {data.life_groups.women.text}
          //       </button>
          //     </Link>
          //   </div>
          // </div>
        }
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
    allFile(
      filter: { name: { eq: "home" }, sourceInstanceName: { eq: "content" } }
    ) {
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
                lifegroup {
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
