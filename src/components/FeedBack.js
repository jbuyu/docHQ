import React from "react"
import BgImage from "./backgroundContent"
import { useStaticQuery } from "gatsby"
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
    <div className="feedback">
      {/* <Img fixed={data.cute.childImageSharp.fixed} /> */}
      <BgImage
        title="customer"
        fluid={data.cute.childImageSharp.fluid}
        height="400px"
        mobileHeight="200px"
      >
        <p>Miami</p>
        <p>Miami</p>
        <p>Miami</p>
        <p>Miami</p>
      </BgImage>
    </div>
  )
}

export default FeedBack
