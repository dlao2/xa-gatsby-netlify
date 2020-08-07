import React from "react"
import { graphql } from "gatsby"

import BaseBanner from "../components/BaseBanner"
import BaseMember from "../components/BaseMember"

const Resources = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  data.testimonials.forEach(testimonial => {
    testimonial.member = { headshot: testimonial.headshot }
  });

  const classObject = (school) => {
    var color;
    switch (school) {
      case 'North Carolina State University':
        color = 'red';
        break;
      case 'Virginia Commonwealth University':
        color = 'yellow';
        break;
      case 'Reinhardt University':
        color = 'orange';
        break;
      default:
        color = 'blue';
        break;
    }

    return `w-12 h-1 border-${ color }-500 border bg-${ color }-500`;
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex-1">
          <BaseBanner
            className="h-128"
            text={data.title}
            img={data.background_photo}
          />
        </div>

        <div className="container mx-auto mt-20 px-20">
          {
            data.testimonials.map((testimonial, index) =>
              <section key={index} class="mb-20">
                {
                  testimonial.headshot &&
                  <BaseMember
                    member={testimonial.member}
                    className="float-right"
                  />
                }
                <div className="mb-5">
                  <h1 className="uppercase font-bold my-3 text-base font-sans">{ testimonial.name }</h1>
                  { testimonial.school && <h2 className="text-gray-800 my-1 text-base font-sans font-normal">{ testimonial.school}</h2> }
                  <div className={ classObject(testimonial.school) }></div>
                </div>
                <p dangerouslySetInnerHTML={{__html: testimonial.testimonial}}></p>
              </section>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Resources

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: {name: {eq: "testimonials"}, sourceInstanceName: {eq: "content"}}) {
      edges {
        node {
          id
          relativePath
          childMarkdownRemark {
            html
            frontmatter {
              title
              background_photo
              testimonials {
                name
                headshot
                school
                testimonial
              }
            }
          }
        }
      }
    }
  }
`
