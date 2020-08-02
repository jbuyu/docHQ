import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
const FeedBack = props => {
  const { cute, sleep } = useStaticQuery(graphql`
    query {
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
      sleep: file(relativePath: { eq: "cute.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const backgroundFluidImageStack = [
    sleep.childImageSharp.fluid,
    `linear-gradient(rgba(220, 15, 15, 0.73), rgba(4, 243, 67, 0.73))`,
    cute.childImageSharp.fluid,
  ].reverse()
  return (
    <div className="feedback">
      <BackgroundImage className="masthead" fluid={backgroundFluidImageStack}>
        <div className="content-box">
          <div className="inner-content-box">
            <div className="cutomer-feed">
              <ul>
                <li>Brenda Achieng</li>
              </ul>
            </div>
            <div className="cutomer-feed">
              <ul>
                <li>Michael Omariba</li>
              </ul>
            </div>
            {/* <div className="cutomer-feed">
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
