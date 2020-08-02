import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
const FeedBack = props => {
  const data = useStaticQuery(graphql`
    query Images {
      cute: file(relativePath: { eq: "cute.jpeg" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="feedback">
      <BackgroundImage
        className="masthead"
        fluid={data.cute.childImageSharp.fluid}
      >
        <div className="content-box">
          <div className="inner-content-box">
            {/* <div className="cutomer-feed">
              <ul>
                <li>Brenda Achieng</li>
              </ul>
            </div>
            <div className="cutomer-feed">
              <ul>
                <li>Michael Omariba</li>
              </ul>
            </div>
            <div className="cutomer-feed">
              <ul>
                <li>Lord Arani</li>
              </ul>
            </div> */}
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default FeedBack
