import React, { Component } from "react"
import BgImage from "./backgroundContent"
import Img from "gatsby-image"

const FeedBack = () => {
  const data = useStaticQuery(graphql`
    query Images {
      cute: file(relativePath: { eq: "cute.jpg" }) {
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
    <div>
      <BgImage
        title="customer"
        fluid={data.cute.childImageSharp.fluid}
        height="500px"
        mobileHeight="200px"
      >
        <p>Miami</p>
      </BgImage>
    </div>
  )
}

export default FeedBack
