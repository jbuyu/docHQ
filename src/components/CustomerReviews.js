import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Quotes from "../quotes/Quotes"

const CustomerReviews = ({ reviews }) => {
  const { background, kid, colhue } = useStaticQuery(graphql`
    query {
      kid: file(relativePath: { eq: "cute.jpg" }) {
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
      background: file(relativePath: { eq: "cute.jpeg" }) {
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
      colhue: file(relativePath: { eq: "crystal.jpg" }) {
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

  const backgroundFluidImageStack = [
    background.childImageSharp.fluid,
    kid.childImageSharp.fluid,
    colhue.childImageSharp.fluid,
  ].reverse()
  return (
    <div id="reviews">
      <BackgroundImage className="back-image" fluid={backgroundFluidImageStack}>
        <div className="content-box">
          <div className="inner-content-box">
            {/* <div className="cutomer-feed"> */}
            <Quotes reviews={reviews} />
            {/* </div> */}
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default CustomerReviews
