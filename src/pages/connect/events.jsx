import React from "react"
import { graphql } from "gatsby"

import TheNav from "../../components/TheNav"
import TheFooter from "../../components/TheFooter"
import SEO from "../../components/SEO"

const Events = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <div>
      <SEO title={ data.title } />
      <header className="lg:pin-t lg:absolute w-full hidden lg:flex">
        <TheNav />
      </header> 
      <div className="flex flex-col">
        <div className="flex-1">
          <div className="w-full flex bg-center bg-cover h-128 bg-blue-500 flex-col justify-around px-10" style={{ backgroundImage: 'url(/' + data.background_photo + ')' } }>
            <h1
            className="text-white text-center"
              style={{
                fontFamily: ['Underland', 'sans-serif'],
                fontSize: '4rem',
                transform: 'rotate(-10deg)'
              }}
            >
              {data.title}
            </h1>
            <h2 className="text-white text-left text-4xl font-sans">
              <a href="/connect/events">Events</a>
            </h2>
          </div>
        </div>
        <div className="flex-1 font-sans">
          <div className="container mx-auto leading-normal font-sans" dangerouslySetInnerHTML={{__html: data.content}}>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden">
        <TheNav />
      </div>
      <footer>
        <TheFooter />
      </footer>
    </div>
  )
}

export default Events

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: {name: {eq: "events"}, sourceInstanceName: {eq: "content"}}) {
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
