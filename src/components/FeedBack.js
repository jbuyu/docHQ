import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import Quote from "../quotes/Quotes"
const FeedBack = props => {
  const { cute, kid } = useStaticQuery(graphql`
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

  const backgroundFluidImageStack = [
    kid.childImageSharp.fluid,
    cute.childImageSharp.fluid,
  ].reverse()
  return (
    <BackgroundImage className="masthead" fluid={backgroundFluidImageStack}>
      <div className="content-box">
        <div className="inner-content-box">
          {/* <div className="cutomer-feed"> */}
          <Quote />
          {/* </div> */}
        </div>
      </div>
    </BackgroundImage>
  )
}

export default FeedBack
